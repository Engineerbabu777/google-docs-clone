import Docs from '@/components/Docs'
import Header from '@/components/Header'
import Login from '@/components/Login';
import NewDocs from '@/components/NewDocs'
import { app, auth } from '@/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

export default function Home ({}) {


  const [user,loading,err] = useAuthState(auth);

  if(loading){
    return 'loading...'
  }

  if(!user?.email){
     return <Login />
  }

  return (
    <>
      {/* HEADER! */}
      <Header user={user}/>

      {/* CREATE NEW DOC!  */}
      <NewDocs />

      {/* ALL DOCUMENTS! */}
      <Docs />
    </>
  )
}
