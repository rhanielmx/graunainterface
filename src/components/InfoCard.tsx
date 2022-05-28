import Image from "next/image"

export default function InfoCard(props) {
    return (
        <div>
            <div className="text-2xl px-6">{props.titulo}</div>
            <div className={'flex flex-col'}>
                <p className="px-8 py-4 text-justify">
                    {props.img ?
                        <div >
                            <Image alt="Img"
                                height={200} width={200}
                                src={props.img} />
                        </div>
                        : false}
                    {props.texto}
                </p>
            </div>
        </div>
    )
}