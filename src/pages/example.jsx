import Header from "../components/Header";
import Link from "next/link";
export default function Example() {

    return (

        <div>

            <Header title = "Fundamentos de Next.JS & React"/>

            <Header title = "Não é dificil"/>

            <Link href='/'><button className="btn"><h3>Voltar</h3></button></Link>

        </div>

    )

}