
import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"
import ChartItem from './ChartItem'
import classes from './ChartList.module.css'
import Paging from '../Paging/Paging';

class ChartList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
  

    setData(data) {
        console.log(data);
        this.setState({ data });
    };

    render() {
    
        return (
            <React.Fragment>
                <div className={classes.chartContainer}>

                    {this.state.data != null ?
                        this.state.data.stocks.map((element, index) => (
                            <ChartItem data={element.data} stock={element.code} key={index}></ChartItem>
                        )) :
                        <div>Loading...</div>
                    }

                </div>
                <Paging setData={this.setData.bind(this)}></Paging>
            </React.Fragment>
        )
    }
}

export default ChartList;