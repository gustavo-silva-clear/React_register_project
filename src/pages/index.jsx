import Link from "next/link"
import Browser from "../components/browser"

export default function Init() {

    return (

        <div className="home">

            <Browser texto="Style" destino="/estiloso"></Browser>
            <Browser texto="About" destino="/example"></Browser>

        </div>

    )

}