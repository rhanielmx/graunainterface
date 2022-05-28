import { useRouter } from "next/router";
import Form from "../../../components/Form";
import { Navbar } from "../../../components/Navbar";
import Solicitation from "../../../core/Solicitation"
import If from "../../../components/If";
import Loading from "../../../components/Loading";
import { useEffect, useState } from 'react'
import axios from "axios";


export default function SolicitationById() {
    const [solicitation, setSolicitation] = useState(new Solicitation())
    const [loading, setLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const show = !loading && (Solicitation.toJSON(solicitation).status != '' || Solicitation.toJSON(solicitation).status != undefined);

    function getSolicitation(id) {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/solicitation/${id}`)
            .then(res => {
                let data = res.data.message
                if (data === 'Solicitation not found'){
                    setIsEmpty(true)
                    setLoading(false);
                } else {
                    let sol = new Solicitation(data.message, data.url, data.response, data.status)
                    setSolicitation(sol)
                    setIsEmpty(false)
                    setLoading(false);
                }
            })
            .catch(err => {
                console.log(err)
            })
        
    }
    const router = useRouter();
    
    useEffect(()=>{
        if(router.query.id) {
            getSolicitation(router.query.id)
        }     
    }, [router.query.id])
    
    // const solicitation2 = new Solicitation(solicitation.message, solicitation.url,solicitation.response,solicitation.message)
    return (
        <div>
            <Navbar />
            {show ?  <If isEmpty={isEmpty}><Form solicitation={solicitation}/></If> : <Loading/> }
        </div>
    )
}