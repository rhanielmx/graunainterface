import DialogFlowChat from "../components/DialogFlowChat"
import {Navbar} from "../components/Navbar"
export default function Home() {
  return (
    <>
      <Navbar/>
      <div className={`
        h-screen
        flex justify-center items-center
        bg-gradient-to-r from-blue-500 to-purple-700
        text-white text-4xl
        `}>
        Projeto Graúna
        <DialogFlowChat />
      </div>
    </>
  )
}