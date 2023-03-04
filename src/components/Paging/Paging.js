import { react, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import classes from './Paging.module.css'
import { getData } from "../Chart/utils"

const Paging = (props) => {
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        getData(currentPage, props.pageSize, props.filterQuery).then(data => {
            props.setData(data);
            console.log(data.searchCount);
            setPageCount(Math.ceil(data.searchCount / props.pageSize));
            console.log(pageCount);
            console.log(props.pageSize);
            console.log(data);

        })

    }, [currentPage, props.pageSize, props.filterQuery]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <div className={classes.pagination}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
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
