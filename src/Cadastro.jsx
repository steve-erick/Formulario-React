// Botões
import { ButtonC2 } from './components/Button'
// Texto
import { Text20 } from './components/Textos'
// Imputs
import { Email, Senha, Telefone, Nome,Data} from './components/imput'
// Checkbox
import { Checkbox } from './components/checkbox'
// Pagina
import { Sign } from './Pages/sign'

export function Cadastro() {
 
  return (
    <body className='bg-gray-400 flex flex-col md:flex-row'>
    <Sign></Sign>
    <form className='md:w-[50%] md:h-screen w-screen h-[473px] flex-col flex items-center justify-center md:gap-3 gap-1'>
      <Text20 text="Faça seu cadastro e começe a usar"></Text20>
      <Nome title="Nome" placeholder="React Person"></Nome>
      <Email  title="Email" placeholder="React@gmail..."></Email>
      <Senha  title="Senha" placeholder="No minimo oito caracteres"></Senha>
      <Telefone  title="Telefone" placeholder="(85)98818-0319"></Telefone>
      <Data title="Data de nascimento" placeholder="16/12/1990"></Data>
      <Checkbox  text="Aceito e concordo com os termos de serviço"></Checkbox>
      <ButtonC2 text="Cadastrar"></ButtonC2>
   </form>
   </body>
    )
}

