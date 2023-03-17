
const Paginated=(props)=>{

    const allPage=[];
    for(let i=1;i<= props.maximumPage;i++){  //se corrigio error de sintaxis antes decia "miximoPage"
        allPage.push(i);
    };

    return(
        <nav>
            <ul className="btn-group">
                {allPage && allPage.map(n=>(
                    <li key = {n}>  
                    <button className="btn btn-outline" onClick={()=>props.pagin(n)}>{n}</button> 
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Paginated;