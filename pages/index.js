import Docs from '@/components/Docs'
import Header from '@/components/Header'
import Login from '@/components/Login'
import NewDocs from '@/components/NewDocs'
import { app, auth, db } from '@/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState } from 'react'
import Modal from '@/components/Modal'
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Home ({}) {
  const [user, loading, err] = useAuthState(auth)
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState('')

  // console.log({data})

  if (loading) {
    return 'loading...'
  }

  if (!user?.email) {
    return <Login />
  }

  const createDoc = async () => {
    if (!input) return

    const docRef = collection(db, 'userDocs', user.email, 'docs')

    const newDoc = await addDoc(docRef, {
      filename: input,
      timestamp: serverTimestamp()
    })

    setInput('')
    setShowModal(false)

    alert('created')
  }

  console.log({ showModal })
  return (
    <>
      {showModal && (
        <Modal
          input={input}
          setInput={setInput}
          createDoc={createDoc}
          setShowModal={setShowModal}
        />
      )}

      {/* HEADER! */}
      <Header user={user} />

      {/* CREATE NEW DOC!  */}
      <NewDocs openModal={() => setShowModal(true)} />

      {/* ALL DOCUMENTS! */}
      {user && <Docs user={user} />}
    </>
  )
}
