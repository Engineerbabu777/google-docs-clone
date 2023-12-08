import { auth } from '@/firebase';
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';

export default function Login ({}) {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
    <>
      <div className='flex flex-col items-center justify-center py-2 min-h-screen'>
        <Image
          height={'300'}
          width={'550'}
          src={'https://links.papareact.com/1ui'}
          objectFit='contain'
        />

        <button
          className='w-44 mt-10 bg-blue-500 text-white h-12 hover:bg-blue-600 rounded-md'
          onClick={async() => await signInWithGoogle()}
        >
          Login
        </button>
      </div>
    </>
  )
}
