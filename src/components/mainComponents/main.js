import imageLogo from "../../img/logo transparente.png"
import styles from'./main.module.css'
import imginsta from '../../img/instagram.svg'
import imgyout from '../../img/youtube.svg'
import imgtik from '../../img/tik-tok.svg'
import Doar from "../components independent/doar"
export default function Main(){
   
    return(
        <main>

            <h2 className={styles.about} id="about" >Me Conheça</h2>
           <section className={styles.aboutChanel}>
            <h3 className={styles.description}>
                Olá, você está visitando o site do nosso canal, mas já deve ter se perguntado, quem sou eu? 
                Bom, você pode me chamar de Jeff, tenho 21 anos e sou eu quem cuido de todos os vídeos de todas as redes 
                oficiais  do canal. Sou apaixonado pelo mundo gamer, adoro jogar e me divertir neste universo, 
                principalmente com amigos. Jogo no Pc e via nuvem, não tenho um Pc super potente (ainda) para rodar 
                tudo em alta resolução, mas faço o que posso. Mas é isso, sou um jovem que assim como você adora jogar 
                e se divertir, então, venha comigo entrar nesse mundo maravilhoso. Eu tenho certeza que você não vai sair
                 de nenhum video sem dar pelo menos uma risada hahah. Essa é a minha vibe, me divertir 
                 e passar isso para vocês.
            </h3>
           
           
           <figure>
           <img src={imageLogo} alt="Logo" className={styles.logo}/>
            
            </figure>
            </section>
            
            <article> 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/udDgL1zy9eI?si=MiZQ2qTF8xbu-qwV" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowfullscreen>
            </iframe>

            </article>
             <div className={styles.groupSection}>
                <section>
                    <h2 className={styles.redesTitle} id="redes">Minhas Redes Sociais</h2>
                    <a href="https://www.youtube.com/@TragicoNerd" target="_blank" rel="noreferrer" className={styles.rede}> <img src={imgyout} alt="youtube"/> @TragicoNerd</a> <br></br>
                    <a href="https://www.instagram.com/tragico_nerd/" target="_blank" rel="noreferrer" className={styles.rede} > <img src={imginsta} alt="instagram"/> @tragico_nerd </a> <br></br>
                    <a href="https://www.tiktok.com/@tragiconerd" target="_blank" rel="noreferrer" className={styles.rede}> <img src={imgtik} alt="tik tok"/> @tragiconerd </a> <br></br>
                </section>
                <section className={styles.setup}>
                    <h2 className={styles.setupTitle} id="setup">Meu Setup</h2>
                       
                    <ul>
                        <a href="https://amzn.to/3tjjRCd" target="_blank" rel="noreferrer" className={styles.product}><li>Processador: I5 6600;</li></a>
                        <a href="https://amzn.to/3NCjwkI" target="_blank" rel="noreferrer" className={styles.product}><li>Placa mãe: Gigabyte H110M-S2V-CF</li></a>
                        <a href="https://amzn.to/3vig5cz" target="_blank" rel="noreferrer"className={styles.product}><li>Placa de vídeo: GTX 750;</li></a>
                        <a href="https://amzn.to/3GTzhjC" target="_blank" rel="noreferrer"className={styles.product}><li>Memória RAM:  12GB;</li></a>
                        <a href="https://amzn.to/48q03Mf" target="_blank" rel="noreferrer"className={styles.product}><li>Armazenamento: SSD 120GB & HDD 500GB;</li></a>
                        <a href="https://amzn.to/3Rw21E4" target="_blank" rel="noreferrer"className={styles.product}><li>Fonte: 500W;</li></a>
                        <a href="https://amzn.to/3RPFQKj" target="_blank" rel="noreferrer"className={styles.product}><li>Headset: HyperX Cloud Stinger S;</li></a>
                        <a href="https://amzn.to/3tCiiPA" target="_blank" rel="noreferrer"className={styles.product}><li>Teclado: Teclado semi mecânico</li></a>
                        <a href="https://amzn.to/3RRgYSp" target="_blank" rel="noreferrer"className={styles.product}><li>Mouse: M7 G Pro</li></a>
                    </ul>

                </section>
                </div>
                    <Doar/>

        </main>

    )
}