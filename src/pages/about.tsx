import DialogFlowChat from "../components/DialogFlowChat"
import InfoCard from "../components/InfoCard"
import { Navbar } from "../components/Navbar"
export default function About() {
    const textoClarice = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius odit nisi inventore perferendis corrupti doloremque beatae et nulla quaerat quam adipisci voluptas reprehenderit numquam, velit suscipit libero dolor quidem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolorum rem harum saepe voluptate? Voluptate molestias vero itaque quam? Consequatur vitae architecto nostrum maxime totam amet inventore, hic distinctio quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iusto distinctio exercitationem, cum veniam eveniet minus repellat, ab iure eum similique veritatis possimus! Dignissimos numquam sed architecto rem doloribus ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet suscipit exercitationem fuga quidem? Facere dolor placeat reprehenderit deserunt eligendi. Esse nemo nulla nisi tempora quam, fugiat eveniet ipsam nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi suscipit officiis vero ex tempore sint iste incidunt saepe, beatae nemo et dignissimos, deleniti iusto a modi. Eos, impedit expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta repellat sequi magnam quibusdam perferendis natus nam facilis, aperiam voluptas soluta repellendus? Aperiam autem reiciendis maiores odio obcaecati qui nulla!"
    return (
        <>
            <Navbar />
            <div className={`
        bg-gray-300 h-screen py-3
        flex justify-left flex-col
        `}>
                <div className="text-5xl px-4 pb-8">Sobre Nós</div>

                <InfoCard titulo="Ana Clarice" texto={textoClarice} img={'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg'} />
            </div>
            <DialogFlowChat />
        </>
    )
}