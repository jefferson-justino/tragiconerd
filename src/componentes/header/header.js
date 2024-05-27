import logo from '../../icones/logo transparente.png'
import  './header.css'
export default function Header() {
    return(
        <header>
            <div className='conteudo'>
        <img src={logo} alt="Logotipo - Tragico Nerd" className='logo'/>

        <h1>TRAGICO NERD</h1>
             </div>
        </header>
    )
}