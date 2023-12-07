import { Button } from '@material-tailwind/react'
import { FiMenu } from 'react-icons/fi'
import { IoDocumentText } from 'react-icons/io5'
export default function Header ({}) {
  return (
    <>
      <div className='flex items-center sticky top-0 z-50 px-4 py-2 shadow-md'>
        <button>
          <FiMenu size={28} color='skyBlue' />
        </button>

        <button className="ml-6">
          <IoDocumentText size={28} color={'skyBlue'} />
        </button>

        <h1 className='hidden md:inline-flex ml-2 text-gray-700 text-2xl'>
            Docs
        </h1>
      </div>
    </>
  )
}
