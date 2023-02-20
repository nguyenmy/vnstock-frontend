import { csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import Papa from "papaparse"
function parseData(parse) {
	return function(d) {
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
	const promiseMSFT = fetch("http://localhost/api/stocks/filters?pi=0&ps=20&volavg=50_50000")
		.then(response =>response.json() )
		.then(data => processData(data));
		// .then(data => csvParse(data, parseData(parseDate)))
		
	return promiseMSFT;
}

function processData(jsonData){
	var results=[]
	jsonData.stockHistories.forEach(element => {
		var stock={}
		stock.code=element.Code;
		stock.data = csvParse(Papa.unparse(element.Prices), parseData(parseDate)) 
		results.push(stock)
	});

	return results;
}