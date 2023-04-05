import styles from '../styles/Estiloso.module.css'
import Link from "next/link"

export default function Layout(props) {

    return (

        <div>

            <Link href='/'><button className="btn"><h3>Voltar</h3></button></Link>
            {props.children}
        </div>

    )

}