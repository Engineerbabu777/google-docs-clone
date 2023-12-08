import { MdInsertDriveFile } from 'react-icons/md'
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '@/firebase'
import DocumentRow from './DocumentRow'

export default function Docs ({ user }) {
  console.log(user)

  const [value] = useCollection(
    query(collection(db, 'userDocs', user?.email, 'docs'))
  )

  return (
    <>
      <section className='bg-white px-10 md:px-0'>
        <div className='max-w-3xl text-sm text-gray-800 mx-auto py-8'>
          <div className='flex justify-between items-center pb-5'>
            <h2 className='font-medium flex-grow'>My Documents</h2>
            <p className='mr-12'>Date Created</p>
            <MdInsertDriveFile size={28} color={'gray'} />
          </div>
        </div>
        {value?.docs?.map(doc => (
          <>
            <DocumentRow id={doc.id} data={doc.data()} />
          </>
        ))}
      </section>
    </>
  )
}
