
import './Input.css'

const Input = (props) => {


    const dadosDigitado = (event) => {

        const valor = event.target.value
        props.dadosDigitado(valor)
        console.log(valor)
    }

    return (
        <div className="campo-input">
            <label>{props.label}</label>
            <input 
                value={props.valor} 
                onChange={dadosDigitado} 
                placeholder={props.placeholder} 
                required={props.obrigatorio}
                type={props.type}
                />
        </div>
    )
}


export default Input