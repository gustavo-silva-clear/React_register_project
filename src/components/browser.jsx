import Link from "next/link"
import styles from '../styles/browser.module.css'

export default function Browser(props) {

    return (

        <Link href={props.destino}>
            <div className={styles.browser}>
                <button className="btn">
                    <h3>{props.texto}</h3>
                </button>
            </div>
        </Link>

    )

}