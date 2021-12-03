const TabelaBebidas = ()=>{
    return(
        <table id="tabela" border="1">
                <TableHead/>
                <TableBody/>
        </table>
    );
}

const TableHead = ()=>{
    return(
        <thead>
            <tr>
                <th>Nome</th>
                <th>Marca</th>
            </tr>
        </thead> 
    );
}

const TableBody = ()=>{
    return(
        <tbody>
            <tr><td>Havana</td><td>Engenho Anísio Santiago</td></tr>
        </tbody>
    );
}
