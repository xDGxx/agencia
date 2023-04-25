import styles from "./HeaderTopo.module.css"
import { Link } from "react-router-dom"
import Lupa from '../Imagens/lupa.png'
import Logo from "../Imagens/viagem.jpg"

function HeaderTopo() {

    return (

        <div>

        <header className={styles.header}>
                <Link to='/'> <img src={Logo} alt="logo" className={styles.logo} /> </Link>

            <nav className={styles.menu}>
                <ul>

                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/GrandCanyon'>GrandCanyon</Link>
                    </li>
                    <li>
                        <Link to='/Escócia'>Escócia</Link>
                    </li>
                    <li>
                        <Link to='/Muralha'>Muralhas da China</Link>
                    </li>
                    <li>
                        <Link to='/Aruba'>Aruba</Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.busca}>
                    <input type="text" /><img src={Lupa} alt="Lupa" className={styles.lupa}/>
                </div>

    </header >

    </div>
)

}

export default HeaderTopo;