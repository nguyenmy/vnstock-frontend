
import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"
import ChartItem from './ChartItem'
class ChartList extends React.Component {
    componentDidMount() {
        getData().then(data => {
            this.setState({ data });
            // console.log(data);
        })
    }
    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <React.Fragment>
                {this.state.data.map((element, index) => (
                    <ChartItem data={element.data} stock={element.code}></ChartItem>
                ))}
               
            </React.Fragment>
        )
    }
}

export default ChartList;