import imageLogo from "../../img/logo transparente.png"
import styles from'./header.module.css'
import '../mainComponents/main'
function Header() {
    return (
        <header >
            <section>
                <img src={imageLogo} alt="LogoImagem" className={styles.image}/>
                <h1 className={styles.title}>TRAGICO NERD</h1>
            </section>

            <nav> 
                <ul className={styles.list}>
                    <a href="#about"  rel="noreferrer" > <li className={styles.option}>SOBRE</li></a>
                    <a href="#jj" target="_blank"  > <li className={styles.option}>SETUP</li></a>
                    <a href="#jj" target="_blank" > <li className={styles.option}>DOAR</li></a>
                </ul> 
            </nav>

            <section>
            <a href="https://www.amazon.com.br/hz/wishlist/ls/K7KBOEU4EEX0?ref_=wl_share" target="_blank" rel="noreferrer" ><h1 className={styles.wishList}>LISTA DE DESEJOS</h1></a>
            </section>
        </header>
      
    );
  }
  
  export default Header;