const TabelaBebidas = ({titulo, cabecalhos, conteudo}) => {
    const valores_cabecalho = cabecalhos.map((tituloCabecalho,index)=>{
        return (
            <th key={index}>{tituloCabecalho}</th>
        );
    });

    const conteudo_formatado = conteudo.map(({nome, marca,teor_alcoolico},index)=>{
        return(
            <tr>
                <td>{nome}</td>
                <td>{marca}</td>
                <td>{teor_alcoolico}</td>
                <td>
                    <button>Editar</button>
                    <button>Deletar</button>
                </td>
            </tr>
        );
    })

    return (
        <div id="containerTabela">
            <h1>{titulo}</h1>
            <table id="tabela">
                <thead>
                    <tr>
                    {valores_cabecalho}
                    </tr>
                </thead>
                <tbody>
                    {conteudo_formatado}
                </tbody>
            </table>
        </div>
    )  
}