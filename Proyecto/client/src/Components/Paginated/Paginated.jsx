import ReactPaginate from 'react-paginate';
import styles from "./Paginated.module.css"



const Paginated=(props)=>{

    const handlePageClick = (event) => {
        props.pagin(event.selected +1)
    };
    
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