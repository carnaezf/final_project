import ReactPaginate from 'react-paginate';
import styles from "./Paginated.module.css"



const Paginated=(props)=>{

    const handlePageClick = (event) => {
        props.pagin(event.selected +1)
    };
    
    return(
        <div>
            <ReactPaginate
               breakLabel="..."
               nextLabel="Siguiente >"
               onPageChange={handlePageClick}
               pageRangeDisplayed={3}
               pageCount={props.maximumPage}
               previousLabel="< Anterior"
               renderOnZeroPageCount={null}
               containerClassName= {styles.pagination}
               pageClassName={styles.page}
               previousLinkClassName={styles.page}
               nextLinkClassName={styles.page}
               activeLinkClassName={styles.active}
            />
        </div>
    )
};

export default Paginated;