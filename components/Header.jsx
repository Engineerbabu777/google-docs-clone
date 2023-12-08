import { Button } from '@material-tailwind/react'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { GrApps } from 'react-icons/gr'
import { IoDocumentText } from 'react-icons/io5'
export default function Header ({}) {
  return (
    <>
      <div className='flex items-center sticky top-0 z-50 px-4 py-2 shadow-md'>
        <button>
          <FiMenu size={28} color='skyBlue' />
        </button>

        <button className='ml-6'>
          <IoDocumentText size={28} color={'skyBlue'} />
        </button>

        <h1 className='hidden md:inline-flex ml-2 text-gray-700 text-2xl'>
          Docs
        </h1>
        <div className='flex flex-grow items-center px-5 py-2 bg-gray-100 text-skyBlue rounded-lg mx-5 md:mx-20 focus-within:shadow-md'>
          <FiSearch size={28} color='skyBlue' />
          <input
            placeholder='Search'
            type='text'
            className='flex-grow px-5 text-base bg-transparent outline-none '
          />
        </div>

        <button className='ml-5 md:ml-20 border-0'>
          <GrApps size={28} color={'lightGray'} />
        </button>

        <img
          className='cursor-pointer w-12 h-12 rounded-full ml-2'
          src={
            'https://lh3.googleusercontent.com/ogw/ANLem4YSRDkd-y2kxb8CTLwMVc7JIHifcU8YTsdt7n-G=s32-c-mo'
          }
          alt='none'
          onClick={() => {}}
          loading='lazy'
        />
      </div>
    </>
  )
}
