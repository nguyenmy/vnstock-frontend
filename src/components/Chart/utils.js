import { csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";
import Papa from "papaparse"
function parseData(parse) {
	return function (d) {
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

export function getData(page, pageSize, filterQuery) {
	var url = "http://localhost:4000/stocks/filters?pi=" + page + "&ps=" + pageSize + "&" + filterQuery;
	console.log(url);
	const promiseMSFT = fetch(url)
		.then(response => response.json())
		.then(data => processData(data));
	return promiseMSFT;
}

function processData(jsonData) {
	var results = {
		stocks: [],
		searchCount: jsonData.searchCount
	}
	jsonData.stockHistories.forEach(element => {
		var stock = {}
		stock.code = element.Code;
		stock.data = csvParse(Papa.unparse(element.Prices), parseData(parseDate))
		results.stocks.push(stock)
	});

	return results;
}