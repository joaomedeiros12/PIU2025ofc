import "./Escopo.css"

function Escopo() {
    
    const label = "Clique aqui"
    function handleClick() {

        return (
            alert("Alerta")
        )

    }
    return (
        <>
        <div>
            <h2>Teste de componentes</h2>
        </div>
        <div>
            <button onClick={() => console.log("Voce clicou aqui")}>{label}</button>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Escopo