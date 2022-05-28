import Solicitation from '../core/Solicitation'
import Card from './Card'

interface SolicitationProps{
    solicitations: Solicitation[]
}

export default function SolicitationsList(props: SolicitationProps){
    return(
        <div>
            {props.solicitations.map(solicitation => <Card solicitation={solicitation}/>)}
        </div>
    )
}