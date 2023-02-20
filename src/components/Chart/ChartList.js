
import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"

class ChartList extends React.Component {
    componentDidMount() {

        getData().then(data => {
            this.setState({ data })
        })
    }
    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <React.Fragment>
                <div >
                    <label>
                        DBC
                    </label>
                <Chart  data={this.state.data} width={500} height={300} stock="dbc" />

                </div>
                {/* <Chart  data={this.state.data} width={400} height={300} /> */}
            </React.Fragment>
        )
    }
}

export default ChartList;