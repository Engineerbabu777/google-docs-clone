import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import { EditorState } from 'react-draft-wysiwyg'
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { convertFromRaw, convertToRaw } from 'draft-js'
import React, { useEffect } from 'react'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

export default function TextEditor ({ id, user,data }) {
  const [editorState, setEditorState] = React.useState(
    EditorState?.createEmpty()
  )

  const onEditorStateChange =async editorState => {
    setEditorState(editorState)

    const data = await getDocs(collection(db, 'userDocs',user?.email,'docs'));

    console.log(user?.email, id)

    await setDoc(doc(db, 'userDocs', user?.email,'docs',id),{
        editorState: convertToRaw(editorState.getCurrentContent())
    },{
        merge:true
    })
  }

  useEffect(() => {
    const docRef = doc(db, 'userDocs', user?.email, 'docs', id)
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        const data = doc.data()
        const content = data?.editorState
        if (content) {
        console.log({content})
            
          setEditorState(
            EditorState?.createWithContent(convertFromRaw(content))
          )
        }
      }
    })
  },[id]);
  return (
    <>
      <div className='min-h-screen  pb-16 bg-[#F8F9FA]'>
        <Editor
          toolbarClassName='flex sticky !justify-center top-0 z-50 mx-auto '
          editorClassName='mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-10 '
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </>
  )
}
