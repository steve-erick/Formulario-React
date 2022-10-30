import '../styles/styles.css'
import { styles } from '../styles/estilos'

export function Button(props){
    function redirecionar(){
        
        location.href = `${props.link}.html`;
    }
    return(
        <button className='justify-self-center md:w-[254px] md:h-[42px] w-[204px] h-[32px] bg-gray-500 rounded-full cursor-pointer text-white font-bold text-la' onClick={redirecionar}>{props.text}</button>
    )
}

export function ButtonC(props){
    function redirecionar(){
        
        location.href = `${props.link}.html`;
    }
    return(
        <button className='justify-self-center md:w-[254px] md:h-[42px] w-[204px] h-[32px] bg-cian-400 rounded-full cursor-pointer text-white font-bold text-la'>{props.text}</button>

        )
}

export function ButtonC2(props){
    return(
        <label>
        <input type="submit" value={props.text} className='justify-self-center w-[380px] h-[42px] bg-cian-400 rounded-full cursor-pointer text-white font-bold text-la'/>
        </label>
        )
}
