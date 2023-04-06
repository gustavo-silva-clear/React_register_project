import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function Cod() {

const router = useRouter()

    return (

        <Layout titulo="Navegação dinamica">

            <div><h2>Codigo = {router.query.cod} </h2></div>
            <div><h2>Filial = {router.query.filial} </h2></div>


        </Layout>

    )

}