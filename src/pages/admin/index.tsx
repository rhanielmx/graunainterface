import Card from "../../components/Card"
import {Navbar} from "../../components/Navbar"
import Solicitation from "../../core/Solicitation"
import { useEffect, useState } from "react"
import SolicitationsList from "../../components/SolicitationsList"
import 'axios'
import axios from "axios"

export default function Admin() {

    const [solicitations, setSolicitations] = useState<Solicitation[]>([])
    const [ loading, setLoading ] = useState(true)

    function getSolicitations() {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/handler/list`)
            .then(res => {
                console.log(res.data)
                let data = res.data.News
                let newSolicitations: Solicitation[] = []
                data.map(solicitation => {
                        let newSolicitation = new Solicitation(solicitation.message, solicitation.url, solicitation.response, solicitation.status, solicitation.id)
                        newSolicitations.push(newSolicitation)
                        setSolicitations(newSolicitations)
                        setLoading(false)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(()=>{
        getSolicitations()
    },[])

    
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-4xl pt-2 pb-6">Solicitações</h1>
            {loading ? <h1>Carregando</h1>: <SolicitationsList solicitations={solicitations}/>}
        </div>
    )
}