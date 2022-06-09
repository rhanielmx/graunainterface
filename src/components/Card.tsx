import Link from 'next/link';
import axios from 'axios';

import Solicitation from '../core/Solicitation'
import { DeleteIcon, EditIcon } from './Icons';

interface CardProps{
    solicitation: Solicitation
}

export default function Card(props: CardProps){
    const statusLabels = {
        '0': 'Pendente',
        '1': 'Conteúdo genuíno',
        '2': 'Sátira ou paródia',
        '3': 'Conexão falsa',
        '4': 'Conteúdo enganoso',
        '5': 'Contexto falso',
        '6': 'Conteúdo manipulado',
        '7': 'Conteúdo exagerado',
        '8': 'Conteúdo fabricado'
    }

    const id = props.solicitation?.id
    return(
       <div key={id} className="flex justify-center">
            <div className="flex flex-row w-2/4 border-2 bg-purple-500 rounded-md justify-between px-7 py-2 my-2">
                <span className="text-white text-2md">Solicitação #{props.solicitation.id}</span>
                <span className="text-white text-2md">{statusLabels[props.solicitation.status]}</span>
                <div className={`flex flex-rol`}>
                <Link href={`/admin/solicitation/${props.solicitation.id}`}>
                    <span className={`
                            flex justify-center items-center
                            text-white rounded-full p-1 mr-2
                            hover:bg-green-200
                        `}>
                        {EditIcon}
                    </span>
                </Link>
                {/* <Link href={`/admin/solicitation/${props.solicitation.id}`}>
                    <button className={`
                            flex justify-center items-center
                            text-white rounded-full p-1 ml-2
                            hover:bg-red-300
                        `}>
                        {DeleteIcon}
                    </button>
                </Link> */}
                </div>
        </div>
       </div>
    )
}