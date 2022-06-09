import Solicitation from '../core/Solicitation'
import Input from './Input'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";

import {statusChoices} from './choices'

interface FormProps {
    solicitation: Solicitation
}

export default function Form(props: FormProps) {
    const jsonified = Solicitation.toJSON(props.solicitation)
    const [status, setStatus] = useState(jsonified.status)
    const [message, setMessage] = useState(jsonified.message)
    const [url, setUrl] = useState(jsonified.url)
    const [response, setResponse] = useState(jsonified.response)
    const router = useRouter()

    function saveSolicitation(id, status, response) {
        axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/solicitation/${id}`, {
            status: status,
            response: response,
            category_id: 0
        }).then(function (response) {
            location.href='/admin'
        })
            .catch(function (error) {
                console.error(error);
            });
    }

    

    return (
        <div className={`
        flex flex-col text-center justify-center items-center
        h-screen w-4/5 m-auto
        border-2 border-gray-400 rounded-md 
        `}>
            <span className='text-4xl pb-10'>Alterar Solicitação</span>
            <div className='flex flex-row justify-center py-4'>
                <Input label="Mensagem" type="textarea"
                    value={message}
                    onChange={setMessage}
                    readOnly={true}
                />
                <Input label="Resposta" type="textarea"
                    value={response}
                    onChange={setResponse}
                    placeholder="Resposta que o usuário vai receber ao verificar a solicitação"
                />
            </div>
            <div className='flex flex-row justify-center pt-4'>
                <Input label="URL" type="text"
                    value={url}
                    onChange={setUrl}
                    readOnly={true}
                />
                <Input
                    label="Status" type="select"
                    value={status} onChange={setStatus}
                    choices={statusChoices}
                />
            </div>

            <div className='flex justify-end pt-4 items-center'>
                <button className={`bg-gradient-to-r from-blue-400 to-blue-700
            text-white px-4 py-2 rounded-md disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed m-4`}
                    disabled={status === '0'} onClick={() => saveSolicitation(router.query.id, status, response)}>
                    <span className={status === '0' ? 'text-red-500' : ''}
                    >Salvar</span>
                </button>
                <button className='bg-gradient-to-r from-gray-400 to-gray-700
            text-white px-4 py-2 rounded-md m-4'
            onClick={()=>location.href='/admin'}
                ><span>Cancelar</span> </button>
            </div>
        </div>
    )
}