//Botões
import { ButtonC2 } from './components/Button'
//Textos
import { Text20 } from './components/Textos'
//Imputs
import { Email, Senha} from './components/imput'
//Pages
import { Login } from './Pages/login'
export function Logar() {
    return (
    <body className='bg-gray-400 flex flex-col md:flex-row'>
    <div className='md:w-[50%] md:h-screen w-screen h-[343px] flex-col flex items-center justify-center gap-3'>
    <Text20 text="Faça seu Login e entre na plataforma"></Text20>
        <Email  title="Email" placeholder="React@gmail..."></Email>
        <Senha  title="Senha" placeholder="No minimo oito caracteres"></Senha>
        <ButtonC2 text="Entrar"></ButtonC2>
   </div>
        <Login></Login>
        
   </body>
    )
}

