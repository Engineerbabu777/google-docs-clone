import { HiOutlineDotsVertical } from 'react-icons/hi'
import Image from 'next/image'

export default function NewDocs ({ openModal }) {
  return (
    <>
      <section className='bg-[#F8F9FA] pb-10 px-10 '>
        <div className='max-w-3xl mx-auto'>
          <div className='py-6 flex justify-between items-center'>
            <h2 className='text-gray-700 text-lg'>Start a new document</h2>
            <button>
              <HiOutlineDotsVertical size={28} color={'skyBlue'} />
            </button>
          </div>

          <div className='' onClick={openModal}>
            <div className='relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700'>
              <Image src='https://links.papareact.com/pju' layout='fill' />
            </div>

            <p className='ml-2 mt-2 font-semibold text-sm text-gray-700 '>
              Blank
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
