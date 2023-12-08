import { GrArticle } from 'react-icons/gr'
import { HiOutlineDotsVertical } from 'react-icons/hi'

export default function DocumentRow ({ id, data }) {
  return (
    <>
      <div className='flex items-center p-4 rounded-lg hover:bg-gray-100 max-w-3xl mx-auto text-sm cursor-pointer'>
        <GrArticle size={28} color={'skyBlue'} />
        <p className='flex-grow pl-5 w-10 pr-10 truncate'>{data?.filename}</p>
        <p className='pr-3 text-sm'>
          {new Date(data?.timestamp?.toDate().getTime()).toLocaleDateString()}
        </p>
        <HiOutlineDotsVertical 
        size={28} color={'lightGray'}
        />
         
      </div>
    </>
  )
}
