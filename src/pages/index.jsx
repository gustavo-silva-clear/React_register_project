import Link from "next/link"
import Browser from "../components/browser"

export default function Init() {

    return (

        <div>

            <Browser texto="Style" destino="/estiloso"></Browser>
           <Browser texto="About" destino="/example"></Browser> 

           <Browser texto="Nav" destino="/client/sp-1/132"></Browser> 

           <Browser texto="State" destino="/state"></Browser> 

        </div>

    )

}