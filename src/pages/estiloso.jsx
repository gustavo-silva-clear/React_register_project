import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {

    return (
        <div className={styles.cont}>

            <div className={styles.roxo}>
                <h1>Estilo usando CSS modulos</h1>
            </div>

            <div className={styles.roxo}>
                <h1>Estilo usando CSS modulos</h1>
            </div>

            <div className={styles.roxo}>
                <h1>Estilo usando CSS modulos</h1>
            </div>
            
            <div className={styles.roxo}>
                <h1>Estilo usando CSS modulos</h1>
            </div>

            <Link href="/"><button className="btn"><h3>Voltar</h3></button></Link>

        </div>

    )

}