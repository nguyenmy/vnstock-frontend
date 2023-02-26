import {react, useState,useEffect} from "react";
import ReactPaginate from "react-paginate";
import classes from './Paging.module.css'
import { getData } from "../Chart/utils"

const Paging = (props) => {
    const [pageCount, setPageCount] = useState(5);
    const [currentItems, setCurrentItems] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage]=useState(0);
    const itemsPerPage=20;
    console.log("useEffect1");

    // useEffect(()=>{
    //     console.log("useEffect1");

    // });

    useEffect(() => {
        // Fetch items from another resources.
        getData(currentPage).then(data => {
            props.setData(data);

            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            // setCurrentItems(data.stockHistories);
            setPageCount(Math.ceil(data.searchCount / itemsPerPage));
        })

      }, [currentPage, itemsPerPage]);

    const handlePageClick = (event) => {
        console.log(event.selected);
        // const newOffset = (event.selected * 8) % images.length;
        // setImagesOffset(newOffset);
        setCurrentPage(event.selected);
      };

    return (
        <div className={classes.pagination}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                containerClassName={classes.pagination}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default Paging;
