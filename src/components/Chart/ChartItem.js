import React from "react";
import classes from './ChartItem.module.css'
import Chart from './Chart';

const ChartItem = (props) => {
    return (
        <div className={classes.chartItem}>
            <label>
                {props.stock}
            </label>
            <Chart data={props.data} width={500} height={300} ratio={10} />
        </div>
    )
}

export default ChartItem;