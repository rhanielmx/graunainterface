export default function Input(props) {
    let inputField = null
    if (props.type == "textarea") {
        inputField = <textarea name="" id="" rows={5} cols={30}
            className={`
            border border-gray-500 rounded-lg m-8 cols p-2
            text-gray-700 focus:outline-none focus:bg-gray-100 focus:border-gray-500
            `}
            onChange={e => props.onChange(e.target.value)} 
            value={props.value} readOnly={props.readOnly}
            placeholder={props.placeholder}/>
    } else if (props.type == "select") {
        inputField =
            <select 
            className={
                `border border-gray-500 rounded-lg m-4 bg-white
                appearance-none w-full py-2 px-4 text-gray-700 leading-tight
                focus:outline-none focus:bg-gray-100 focus:border-gray-500
                cursor-pointer 
                `}
                value={props.value}
                id="status" onChange={e=>props.onChange(e.target.value)}>
                {Object.keys(props.choices).map((key,i) => {
                    return <option key={i} value={key}>{props.choices[key]}</option>
                })}
            </select>
    } else {
        inputField = <input type="text"
            className="border border-gray-500 rounded-lg m-4 p-2
            text-gray-700 focus:outline-none focus:bg-gray-100 focus:border-gray-500"
            onChange={e => props.onChange(e.target.value)} value={props.value} readOnly={props.readOnly}/>
    }


    return (
        <div className="flex flex-col">
            <label className="text-3lg">{props.label}</label>
            {inputField}
            {/* <input className="border border-gray-500 rounded-lg" type={props.type ?? "text"} value={props.value} onChange={e => props.onChange(e.target.value)} /> */}
        </div>
    )
}