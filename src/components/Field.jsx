import "../styles/Field.css"

export default function Field({label, id, type, value, handler}){
    return(
        <div className="field">
            <label for={id} className="field-label thin-font">{label}</label>
            <input className="field-input thin-font" id={id} type={type} value={value} onChange={handler} required/>
        </div>   
    )
}