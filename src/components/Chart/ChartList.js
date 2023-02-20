
import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"
import ChartItem from './ChartItem'
import classes from './ChartList.module.css'
class ChartList extends React.Component {
    componentDidMount() {
        getData().then(data => {
            this.setState({ data });
        })
    }
    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <React.Fragment>
                <div className={classes.chartContainer}>
                {this.state.data.map((element, index) => (
                    <ChartItem data={element.data} stock={element.code}></ChartItem>
                ))}
               
                </div>
              
            </React.Fragment>
        )
    }
}

export default ChartList;