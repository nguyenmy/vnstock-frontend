import { csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import Papa from "papaparse"
function parseData(parse) {
	return function(d) {
		// console.log(d);
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}


const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	const promiseMSFT = fetch("http://localhost/api/stocks/filters?pi=0&ps=20&stocks=DBC&volavg=50_50000")
		.then(response => response.json() )
		.then(data => Papa.unparse(data.stockHistories[0].Prices))
		.then(data => csvParse(data, parseData(parseDate)))
		
	return promiseMSFT;
}
