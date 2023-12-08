export default function Modal ({input, createDoc,setShowModal,setInput}) {
  return (
    <>
      <div className='fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center'>
        <div className="max-w-2xl bg-white rounded-lg p-4 flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Create New Document</h2>
        <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type='text'
            placeholder='Enter new doc name'
            className="px-2 py-1 border-gray-300 border rounded-sm "
            onKeyDown={e => e.key === 'Enter' && createDoc()}
          />
          <div className="flex items-center gap-10">
          <button
            className='px-5 py-1 text-black bg-gray-400 rounded-md'
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            onClick={createDoc}
            className='px-5 py-1 text-white bg-blue-400 rounded-md'
          >
            Create
          </button>
          </div>
        </div>
      </div>
    </>
  )
}
