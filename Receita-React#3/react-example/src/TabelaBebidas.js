const TabelaBebidas = ({titulo, cabecalhos, conteudo}) => {
    const valores_cabecalho = cabecalhos.map((tituloCabecalho,index)=>{
        return (
            <th key={index}>{tituloCabecalho}</th>
        );
    });

    const conteudo_formatado = conteudo.map((obj,index)=>{
        return(
            <tr key={index}>
                {
                    Object.values(obj).map((atributo,index)=>{
                        return(
                            <td key={index}>{atributo}</td>
                        );
                    })
                }
                <td><button>Editar</button></td>
                <td><button>Deletar</button></td>
                
                
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