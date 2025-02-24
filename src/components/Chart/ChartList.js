
import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"
import ChartItem from './ChartItem'
import classes from './ChartList.module.css'
import Paging from '../Paging/Paging';
import Filter from '../Filter/Filter';
import Dropdown from '../UI/Dropdown/Dropdown';
var defaultPageSize = 20;
class ChartList extends React.Component {
    constructor() {
        super();
        this.state = {
            pageSize: defaultPageSize,
            filterQuery: ""
        };
    }
    setData(data) {
        this.setState({ data });
    };

    onPageSizeChange(value) {
        this.setState({ pageSize: value });
    }

    onFilterChange(value) {
        this.setState({ filterQuery: value });
    }

    render() {
        return (
            <React.Fragment>
                <Filter onFilterChange={this.onFilterChange.bind(this)}></Filter>
                <div className={classes.chartContainer}>
                    <Dropdown defaultPageSize={20} label="Page size: " onPageSizeChange={this.onPageSizeChange.bind(this)}></Dropdown>
                    <div className={classes.chartList}>
                        {this.state.data != null ?
                            this.state.data.stocks.map((element, index) => (
                                <ChartItem data={element.data} stock={element.code} key={index}></ChartItem>
                            )) :
                            <div>Loading...</div>
                        }

                    </div>
                    <Paging setData={this.setData.bind(this)} pageSize={this.state.pageSize} filterQuery={this.state.filterQuery}></Paging>

                </div>

            </React.Fragment>
        )
    }
}

export default ChartList;