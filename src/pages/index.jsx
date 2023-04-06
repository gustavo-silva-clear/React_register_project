import Link from "next/link"
import Browser from "../components/browser"

export default function Init() {

    return (

        <div>

            <Browser texto="Style" destino="/estiloso"></Browser>
           
            <Browser texto="About" destino="/example"></Browser>

            <Browser texto="Navigation" destino="/client/sp-1/132"></Browser>

            <Browser texto="State" destino="/state"></Browser>

            <Browser texto="Integration" destino="/integracao"></Browser>

        </div>

    )

}