import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/integration.module.css'

export default function Integracao() {

    const [client, setClient] = useState({})
    const [cod, setCod] = useState(1)


    async function GetClient() {

        //1ª forma
        const resp = await fetch(`http://localhost:3000/api/clients/${cod}`)
        const dados =await resp.json()
        setClient(dados)


        //2ª forma
        //fetch(`http://localhost:3000/api/clients/${cod}`)
          //  .then(resp => resp.json())
            //.then(dados => setClient(dados))

    }



    return (
        <Layout>


            <div>
                <input type="number" value={cod} onChange={e => setCod(e.target.value)} />
                <button onClick={GetClient}>Get Client</button>
            </div>
            <div className={styles.list}>
                <ul>
                    <li>
                        <h3>Código:{client.id}</h3>
                    </li>

                    <li>
                        <h3>Nome:{client.nome}</h3>
                    </li>

                    <li>
                        <h3>Email:{client.email}</h3>
                    </li>

                </ul>

            </div>
        </Layout>



    )

}