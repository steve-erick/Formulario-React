
// export function Text(props){
//     return(
//         <>
//         <span className='text-xl text-sm text-la'></span>
//         <text className={`text-${props.size}`}>
//             {props.text}
//         </text>
//         </>
//     )
// }

 export function Text25(props){
        return(
            <p className='text-xl text-white'>
                {props.text}
            </p>
        )
    }

    export function Text20(props){
        return(
            <p className='md:text-le text-sm text-white font-light md:mb-[20px] mb-[10px] mt-[10px]'>
                {props.text}
            </p>
        )
    }

    export function Text15(props){
        return(
            <p className='text-sm text-white'>
                {props.text}
            </p>
        )
    }

    export function Text13(props){
        return(
            <text className='text-xm text-white'>
                {props.text}
            </text>
        )
    }