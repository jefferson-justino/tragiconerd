import imgYoutube from '../../icones/youtube.svg'
import imgPix from '../../icones/livepix.svg'
import imgInstagram from '../../icones/instagram.svg'
import imgTiktok from '../../icones/tik-tok.svg'
import imgDiscord from '../../icones/discord.svg'
import imgThreads from '../../icones/threads.svg'
import imgSteam from '../../icones/steam.svg'
import './main.css'

export default function Main (){
    const objetos = [
        {icone: imgYoutube, titulo: 'Canal principal', link:'https://www.youtube.com/@TragicoNerd' },
        {icone: imgPix, titulo: 'LivePix', link:'https://livepix.gg/tragiconerd' },
        {icone: imgDiscord, titulo: 'Discord', link:'https://discord.gg/q4NGxS8NPX' },
        {icone: imgInstagram, titulo: 'Instagram', link:'https://www.instagram.com/tragico_nerd/' },
        {icone: imgTiktok, titulo: 'TikTok', link:'https://www.tiktok.com/@tragiconerd' },
        {icone: imgThreads, titulo: 'threads', link:'https://www.threads.net/@tragico_nerd' },
        {icone:imgSteam, titulo: 'Jogos com desconto', link:'https://tragiconerdjogos.netlify.app/'}
    ]

    let conteudo = objetos.map((item)=>{
        return(
            <a href={item.link} target="_blank" rel='noreferrer'>
                <div className='card'>
                    <img src={item.icone} alt="preview"/>
                    <h3>{item.titulo}</h3>
                                     
                </div>
            </a>
        )
    })


    return(
        <main>
                {conteudo}
        </main>

    )
}