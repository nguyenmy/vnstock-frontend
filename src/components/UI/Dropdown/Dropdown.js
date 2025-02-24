import React, { useState } from "react";

const Dropdown = (props) => {
    const [pageSize, setPageSize] = useState(props.defaultPageSize);
    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        props.onPageSizeChange(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="input-group col-2 input-group-sm">
                <div class="input-group-prepend ">
                    <span className="input-group-text" >{props.label}</span>
                </div>
                <select className="form-control" value={pageSize} onChange={handlePageSizeChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>

        </React.Fragment>

    );
};

export default Dropdown;