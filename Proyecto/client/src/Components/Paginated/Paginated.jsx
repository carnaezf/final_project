import ReactPaginate from 'react-paginate';

// import { useHistory,useLocation } from 'react-router-dom';



const Paginated=(props)=>{

    const handlePageClick = (event) => {
        props.pagin(event.selected +1)
    };
    
    // const history = useHistory()
    // const location = useLocation()

    // const handlePageClick = (event) => {
    //     const selectedPage = event.selected + 1;
    //     const currentPagePath = location.pathname; // obtener la ruta de la categoría actual
    //     const pageQuery = `?page=${selectedPage}`;
    //     history.push(`${currentPagePath}${pageQuery}`);
    
    // };

    return(
        <div className=''>
            <ReactPaginate
                breakLabel="..."
                nextLabel="»"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={props.maximumPage}
                previousLabel="«"
                renderOnZeroPageCount={null}
                containerClassName= "btn-group"
                pageClassName="btn font-roboto bg-transparent border-transparent hover:border-purple-700 hover:border"
                previousLinkClassName="btn font-roboto bg-transparent border-transparent hover:border-purple-700 hover:border hover:scale-[1.1]"
                nextLinkClassName="btn font-roboto bg-transparent border-transparent hover:border-purple-700 hover:border hover:scale-[1.1] "
                activeLinkClassName="font-roboto px-4 py-4 bg-purple-700 hover:border-transparent"
            />
        </div>
    )
};

export default Paginated;