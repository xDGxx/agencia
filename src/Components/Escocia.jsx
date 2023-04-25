import styles from './Escocia.module.css';
import Logo from '../Imagens/viagem.jpg';

function Escocia(){
    return(
        <div>
            <section className={styles.escocia}>
            <div className={styles.card}>
                    <h2>Venha Explorar esse lugar incrível Escócia!</h2>
                    <p>Turismo na Escócia, localizado ao lado da Inglaterra, fica a Escócia, um dos países pertencentes ao Reino Unido. Que traz consigo uma grande carga histórica, lindas paisagens naturais e construções antigas, como seus castelos medievais.</p>
                    <img src={Logo} alt="Logo" />
                </div>
            </section>
        </div>
    )
}

export default Escocia;