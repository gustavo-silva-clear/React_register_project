import Layout from '../components/Layout'
import React, { useState } from 'react'

export default function State() {


    const [inc,setInc] = useState(3)

    

    return (

        <Layout titulo="Componente de Estado">

            <div>
                <h2>
                    {inc}
                </h2>

               <button onClick={() => setInc(inc+1)} className="btn"><h3>Increment</h3></button> 


            </div>

        </Layout>

    )

}