import { Svglogo } from "../components/logo"
import { ButtonC } from "../components/Button"
import { Button } from "../components/Button"
import { Text15 } from "../components/Textos"

export function Login(){
    return(
        <div className="md:w-[50%] md:h-screen w-screen h-[10%] bg-cian-500 flex flex-col items-center">
            <Svglogo></Svglogo>
            <div className='md:mt-[140px] mt-[40px] mb-[20px] flex md:flex-col flex-row gap-2 items-center'>
            <Button link="Index" text="Cadastro"></Button>
                <Text15 text="OU"></Text15>
            <ButtonC link="Login" text="Login"></ButtonC>
        </div>
        </div>
    )
}