import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {

    return (

        <Layout>

            <div className={styles.cont}>



                <div className={styles.roxo}>
                    <h1>Estilo usando CSS modulos1</h1>
                </div>

                <div className={styles.roxo}>
                    <h1>Estilo usando CSS modulos2</h1>
                </div>

                <div className={styles.roxo}>
                    <h1>Estilo usando CSS modulos2</h1>
                </div>

                <div className={styles.roxo}>
                    <h1>Estilo usando CSS modulos3</h1>
                </div>
            </div>
        </Layout>
    )

}