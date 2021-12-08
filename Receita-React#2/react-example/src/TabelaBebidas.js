

class TabelaBebidas extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div id="containerTabela">
                <h2 id="tituloTabela">{this.props.titulo}</h2>
                <table id="tabela">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Marca</th>
                    </tr>
                </thead> 
                <tbody>
                    <tr className="item">
                        <td>Havana</td>
                        <td>Engenho Anísio Santiago</td>
                    </tr>
                    <tr className="item">
                        <td>Havana</td>
                        <td>Engenho Anísio Santiago</td>
                    </tr>
                </tbody>   
                </table>
            </div>
        );
    }
}

