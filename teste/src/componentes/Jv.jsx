import "./Jv.css"

function Jv() {
    const message = "Iuri Redes"
    const complete = " Melhor professor"
    const buttao = "Clique aqui"

    function mudarCor() {
        return (
            document.getElementById("teste").style.backgroundColor = "blue"
        )
    }

    return (
        <>
        <div id="">
            <button id="teste" onClick={mudarCor}>{buttao}</button>
        </div>
        </>
    )


}

export default Jv