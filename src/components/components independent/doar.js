import './doar.css'

export default function Doar(){
    return(
        <section >
            <h2 className='support' id='support' >Apoie o Canal</h2>
            <p>Apoiar o canal é uma forma de carinho e garante que continuemos trazendo conteúdos novos 
                para vocês, mas lembre-se, nem todo apoio envolve dinheiro, o simples fato de você se inscrever 
                no canal, deixar o like e assistir os vídeos são os maiores apoios que criadores de conteúdo podem receber.
                TAMO JUNTO!
            </p>
<div className='content'>
            <div className='cardSupport'>
                <h2 className='titleCard' >Apoie o canal diretamente</h2>
                <p> Apoios diretos nos ajudam a investir em equipamentos novos e até comprar novos jogos
                    para criar conteúdo, fique à vontade :')
                </p>
                <a href="https://livepix.gg/tragiconerd" target="_blank" rel="noreferrer">
                   <div className='bot'><h1>DOAR</h1> </div>
                </a>
                <a href="https://www.amazon.com.br/hz/wishlist/ls/K7KBOEU4EEX0?ref_=wl_share" target="_blank" rel="noreferrer">
                   <div className='bot'><h1>PRESENTE</h1> </div>
                </a>
            </div>
            <div className='cardSupport' >
            <h2 className='titleCard'>Apoie o canal indiretamente</h2>
            <p> Apoios indiretos nos ajudam a crescer na plataforma e criar uma comunidade engajada, além de dar 
                    motivação extra para criar conteúdo, fique à vontade :')
                </p>
                <a href="https://www.youtube.com/@TragicoNerd?sub_confirmation=1" target="_blank" rel="noreferrer">
                   <div className='bot'><h1>VER CANAL</h1> </div>
                </a>
                <a href="https://www.youtube.com/@TragicoNerd/playlists" target="_blank" rel="noreferrer">
                   <div className='bot'><h1>MARATONAR VIDEOS</h1> </div>
                </a>
            </div>
</div>
        </section>
    )
}