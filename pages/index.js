import Docs from '@/components/Docs'
import Header from '@/components/Header'
import NewDocs from '@/components/NewDocs'

export default function Home ({}) {
  return (
    <>
      {/* HEADER! */}
      <Header />

      {/* CREATE NEW DOC!  */}
      <NewDocs />

      {/* ALL DOCUMENTS! */}
      <Docs />
    </>
  )
}
