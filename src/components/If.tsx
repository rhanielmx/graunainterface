export default function If(props){
    if (props.isEmpty) {
        return (
            <div className={`
                h-screen
                flex justify-center items-center
                bg-gradient-to-r from-blue-500 to-purple-700
                text-white text-4xl
                `}>
                Solicitação Não Encontrada
            </div>
        )
    } else {
        return(
            <div>
                {props.children}
            </div>
        )
    }
}