import Login from '@/components/Login'
import { auth, db } from '@/firebase'
import { useParams, useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { IoDocumentText, IoSave } from 'react-icons/io5'
import { useDocumentOnce, useDocument } from 'react-firebase-hooks/firestore'
import { doc, collection, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Button } from '@material-tailwind/react'
import { FaPeopleGroup } from 'react-icons/fa6'
import TextEditor from '@/components/TextEditor'

export default function Page ({}) {
  const [user, loading, err] = useAuthState(auth)
  const router = useParams()
  const [data, setData] = useState(null)

  if (!router?.id) return ''
  if (router.id) console.log({ id: router.id })

  const [snapshot, loader, error, reload] = useDocumentOnce(
    doc(collection(db, 'userDocs', user?.email, 'docs'), router?.id)
  )

  if (!user?.email) {
    return <Login />
  }

  if (!loader && !snapshot?.data()?.filename) {
    router.replace('/')
  }

  console.log({ data: snapshot?.data() })

  return (
    <>
      <div>
        {/* HEADER SECTIONS! */}
        <header className='flex justify-between items-center p-3 pb-1'>
          <span
            className=''
            onClick={() => {
              router.push('/')
            }}
          >
            <IoDocumentText size={28} color={'skyBlue'} />
          </span>
          <div className='flex-grow px-2'>
            <h2>{snapshot?.data()?.filename}</h2>
            <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600 '>
              <p className='option'>File</p>
              <p className='option'>Edit</p>
              <p className='option'>View</p>
              <p className='option'>Format</p>
              <p className='option'>Insert</p>
              <p className='option'>Tools</p>
            </div>
          </div>

          <button className='bg-blue-400 px-3 py-1 rounded-lg flex gap-2 hidden md:inline-flex'>
            <FaPeopleGroup size={28} color={'blue'} />
            SHARE
          </button>

          <img src={user?.photoURL} alt={"test"} className="cursor-pointer h-10 w-10 ml-2 rounded-full"/>
        </header>


        <TextEditor user={user} id={router?.id}/>
      </div>
    </>
  )
}
