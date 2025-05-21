import { useState } from "react"

export default function Change() {

    let [valor, setValor] = useState("")
    return (
        <>
        <div>
            <button onClick={() => setValor(valor+1)}>Cliques: {valor}</button>
        </div>
        </>
    )

}