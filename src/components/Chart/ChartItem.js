import React from "react";
import classes from './ChartItem.module.css'
import Chart from './Chart';
import ErrorBoundary from '../ErrorHandler/ErrorBoundary'
const ChartItem = (props) => {
    return (
        <div className={classes.chartItem}>
            <label>
                {props.stock}
            </label>
            <ErrorBoundary stock={props.stock}>
                <Chart data={props.data} stock={props.stock} width={420} height={300} ratio={10} />
            </ErrorBoundary>
        </div>
    )
}

export default ChartItem;