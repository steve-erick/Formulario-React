import { Button } from '../components/Button'
import { ButtonC } from '../components/Button'
import { Text15} from '../components/Textos'
import { Email, Senha, Telefone, Nome,Data} from '../components/imput'
import { Checkbox } from '../components/checkbox'
import { Svglogo } from '../components/logo'

export function Sign(){
    return(
        <div className="md:w-[50%] md:h-screen w-screen h-[10%] bg-cian-500 flex flex-col items-center">
            <Svglogo></Svglogo>
            <div className='md:mt-[140px] mt-[40px] mb-[20px] flex md:flex-col flex-row  md:gap-4 gap-2 items-center'>
            <ButtonC link="Index"text="Cadastro"></ButtonC>
                <Text15 text="OU"></Text15>
            <Button link="Login" text="Login"></Button>
        </div>
        </div>
    )
}