
import { MdInsertDriveFile } from "react-icons/md";

export default function Docs ({}) {
  return (
    <>
      <section className='bg-white px-10 md:px-0'>
        <div className='max-w-3xl text-sm text-gray-800 mx-auto py-8'>
            <div className="flex justify-between items-center pb-5">
                <h2 className="font-medium flex-grow">My Documents</h2>
                <p className="mr-12">Date Created</p>
                <MdInsertDriveFile size={28} color={"gray"} />
            </div>

        </div>
      </section>
    </>
  )
}
