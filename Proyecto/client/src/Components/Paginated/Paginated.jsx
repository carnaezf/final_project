
const Paginated=(props)=>{

    const allPage=[];
    for(let i=1;i<= props.miximoPage;i++){ 
        allPage.push(i);
    };

    return(
        <nav>
            <ul>
                {allPage && allPage.map(n=>(
                    <li>
                        <a onClick={()=>props.paginado(n)}>{n}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Paginated;