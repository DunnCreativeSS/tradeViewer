const express = require('express');
const app = express();
var request = require("request")
var bodyParser = require('body-parser')
app.use('/media', express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/public'));
var ccxt = require("ccxt")
                                var _ = require("underscore")
const Binance = require('binance-api-node').default

var moment = require("moment");

const client = Binance()

const WebSocket = require('ws');

const ws = new WebSocket('wss://real.okex.com:10441/websocket');

ws.on('open', function open() {
  //console.log('opened!');

});
var asks = []
var bids = []
const bfx = require('./bfx.js')
const ws2 = bfx.ws(2, { transform: true })

ws.on('message', function incoming(data) {
	
				  for (var v in JSON.parse(data)){
					if (JSON.parse(data)[v].data.high){
						var symbol = JSON.parse(data)[v].channel.substr(JSON.parse(data)[v].channel.indexOf('spot') + 5, JSON.parse(data)[v].channel.indexOf('_ticker') - 12).split('_')[0].toUpperCase() + JSON.parse(data)[v].channel.substr(JSON.parse(data)[v].channel.indexOf('spot') + 5, JSON.parse(data)[v].channel.indexOf('_ticker') - 12).split('_')[1].toUpperCase()
						if (asks[symbol] == undefined){
		asks[symbol] = []
		bids[symbol] = []
	}
				if (asks[symbol]['okex'] == undefined){
					//console.log(symbol);
					asks[symbol]['okex'] = JSON.parse(data)[v].data.sell;
					bids[symbol]['okex']= JSON.parse(data)[v].data.buy;
				}
						asks[symbol]['okex'] = JSON.parse(data)[v].data.sell;
					bids[symbol]['okex'] = JSON.parse(data)[v].data.buy;
					}
				  }
				  //console.log(asks);
				  //console.log(bids);
				  gogo['okexTrades'] = true
				});


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
 
app.set('view engine', 'ejs');
var MongoClient = require('mongodb').MongoClient;

            app.listen(process.env.PORT || 8080, function() {});

var sortBy = (function() {
    var toString = Object.prototype.toString,
        // default parser function
        parse = function(x) {
            return x;
        },
        // gets the item to be sorted
        getItem = function(x) {
            var isObject = x != null && typeof x === "object";
            var isProp = isObject && this.prop in x;
            return this.parser(isProp ? x[this.prop] : x);
        };

    /**
     * Sorts an array of elements.
     *
     * @param {Array} array: the collection to sort
     * @param {Object} cfg: the configuration options
     * @property {String}   cfg.prop: property name (if it is an Array of objects)
     * @property {Boolean}  cfg.desc: determines whether the sort is descending
     * @property {Function} cfg.parser: function to parse the items to expected type
     * @return {Array}
     */
    return function sortby(array, cfg) {
        if (!(array instanceof Array && array.length)) return [];
        if (toString.call(cfg) !== "[object Object]") cfg = {};
        if (typeof cfg.parser !== "function") cfg.parser = parse;
        cfg.desc = !!cfg.desc ? -1 : 1;
        return array.sort(function(a, b) {
            a = getItem.call(cfg, a);
            b = getItem.call(cfg, b);
            return cfg.desc * (a < b ? -1 : +(a > b));
        });
    };

}());
var gogo=[]
var msg = "";

			var result3 = []
			var result4  = []
			var result5 = []
			var result6  = []
			var result7 = []
			var result8  = []
			var result9 = []
			var result10  = []
			var result11 = []
			var result12  = []
			var result13 = []
			var result14  = []
			
app.post('/', (req, res) => {
       doPost(req, res);    
		
});
var BitMexApi = require('bit_mex_api');
// See 'options' reference below
var api = new BitMexApi.TradeApi()
let sleep = (ms) => new Promise (resolve => setTimeout (resolve, ms));

    let quoinex = new ccxt.quoinex ({'timeout' : 30000})
		setTimeout(async function(){
			
    let markets = await quoinex.fetchMarkets ()

doOthers({symbol:'BTC/USD'});	
    for (var v in markets){ 
	await sleep (quoinex.rateLimit) // milliseconds
 await sleep (quoinex.rateLimit) // milliseconds
 await sleep (quoinex.rateLimit) // milliseconds

		   doQ(markets[v]);
		   if (markets[v].symbol != "BTC/USD"){
doOthers(markets[v]);
		   }
	}

    while(true){
			 await sleep (quoinex.rateLimit) // milliseconds
 await sleep (quoinex.rateLimit) // milliseconds
 await sleep (quoinex.rateLimit) // milliseconds

		for (var v in markets){
				 await sleep (quoinex.rateLimit) // milliseconds
 await sleep (quoinex.rateLimit) // milliseconds
 await sleep (quoinex.rateLimit) // milliseconds

				  doQ(markets[v]);
		}
	}
}, 1000);
async function doOthers(mv){
	var pair = mv.symbol.replace('/','')
if (pair.slice(-3) == "USD"){
	pair+="T"
}
	var ts = Math.round(new Date().getTime() / 1000) ;
		var tsYesterday = ts - (0.005 * 3600);
		
if (pair == "BTCUSDT"){
	var p = "XBTUSD";
}
else {
	var p = pair;
}
var opts = { 
'symbol': p,
'startTime': moment(tsYesterday * 1000).format() 
};
console.log(opts);
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    for(var v in data){
		if (!done.includes(data[v].timestamp)){
			done.push(data[v].timestamp);
		//console.log(new Date(data[v].timestamp).getTime());
		
		if (data[v].symbol == "XBTUSD"){
			var p = "BTCUSDT";
		}
		else {
			var p = data[v].symbol;
		}if (asks[p] == undefined){
			asks[p] = []
			bids[p] = []
		}
		if (data[v].side == "Sell"){
			asks[p]['bitmex'] = data[v].price;
		}else {
			bids[p]['bitmex'] = data[v].price;

		}
		gogo['bitmexTrades'] = true
		//console.log(asks);
		//console.log(bids);
		}
	}gogo['bitmexTrades'] = true
  }
};
api.tradeGet(opts, callback);
				var pd = pair.split('/')[0]
	if (pd.slice(-3)== "USD"){
	pd+="T"	
	}
	console.log(pd);
	client.ws.ticker(pd, ticker => {
		if (asks[ticker.symbol] == undefined){
		asks[ticker.symbol] = []
		bids[ticker.symbol] = []
	}
	asks[ticker.symbol]['binance']= ticker.bestAsk;
	bids[ticker.symbol]['binance'] = ticker.bestBid;
 // console.log(ticker)
})
			try {
				var p;
	if (pair== "BTC/USDT"){
		p = 'btc_usdt';
	}
	else{
		p = pair
			

	}
	if (ws.readyState === WebSocket.OPEN) {
					if (pair.slice(-4) == "USDT" || pair.slice(-4) == "QASH"){
			  			ws.send("{'event':'addChannel','channel':'ok_sub_spot_" + pair.substr(0, pair.length-4)  + "_" + pair.substr(pair.length-4, pair.length - 1) + "_ticker'}");

			console.log("ok_sub_spot_" + pair.substr(0, pair.length-4)  + "_" + pair.substr(pair.length-4, pair.length - 1) + "_ticker");
					}
					else {
						ws.send("{'event':'addChannel','channel':'ok_sub_spot_" + pair.substr(0, pair.length-3)  + "_" + pair.substr(pair.length-3, pair.length) + "_ticker'}");

			console.log("ok_sub_spot_" + pair.substr(0, pair.length-3)  + "_" + pair.substr(pair.length-3, pair.length) + "_ticker");
					
					}
					
			}
			else {
				//console.log('not open...');
			}
			}
			catch(err){//console.log(err); gogo['okexTrades'] = true;
}
			
			try {
				
				if (pair.slice(-4)== "USDT"){
					var p = pair.substr(0, pair.length-1).split('/')[0] + pair.substr(0, pair.length-1).split('/')[1];
				}
				else {
				var p = pair.split('/')[0] + pair.split('/')[1];
				}
				//console.log("t" + p);
			ws2.subscribeTicker("t" + p)

ws2.onTicker({ symbol: "t" + p }, (ticker) => {
  var p = ticker.symbol.substr(1, ticker.symbol.length)
  if (p.slice(-3) == 'USD'){
	  p+="T"
  }
  if (asks[p] == undefined){
		asks[p] = []
		bids[p] = []
	}
		asks[p]['bitfinex'] = ticker.ask
		bids[p]['bitfinex']= ticker.bid
	gogo['bitfinexTrades'] = true;
	
})
ws2.open()
			}
			catch(err){gogo['bitfinexTrades'] = true;
}
}
var done = []
async function doQ(mv){
	 await sleep (quoinex.rateLimit) // milliseconds
	 await sleep (quoinex.rateLimit) // milliseconds
	 await sleep (quoinex.rateLimit) // milliseconds
		 
	 await sleep (quoinex.rateLimit) // milliseconds
	 await sleep (quoinex.rateLimit) // millisecondsv
	 await sleep (quoinex.rateLimit) // milliseconds
		 
    let ticker = await quoinex.fetchTicker ('BTC/USD')
	console.log(ticker.info.disabled );
   if (ticker.info.disabled == false){
		if (ticker.symbol.slice(-3) == "USD"){
			
	if (asks[ticker.symbol.replace('/','') + "T"] == undefined){
			asks[ticker.symbol.replace('/','') + "T"] = []
			bids[ticker.symbol.replace('/','') + "T"] = []
		}
		if (ticker.ask != 0){
			asks[ticker.symbol.replace('/','') + "T"]['quoinex'] = ticker.ask;
		}
				if (ticker.bid != 0){

			bids[ticker.symbol.replace('/','') + "T"]['quoinex'] = ticker.bid;
		}
		}
		else{
	if (asks[ticker.symbol.replace('/','')] == undefined){
			asks[ticker.symbol.replace('/','')] = []
			bids[ticker.symbol.replace('/','')] = []
		}		if (ticker.ask != 0){

			asks[ticker.symbol.replace('/','')]['quoinex'] = ticker.ask;
		}
		
		if (ticker.bid != 0){
			bids[ticker.symbol.replace('/','')]['quoinex'] = ticker.bid;
		}
			
		
	}
   }
	
	 await sleep (quoinex.rateLimit) // milliseconds
	 await sleep (quoinex.rateLimit) // millisecondsv
	 await sleep (quoinex.rateLimit) // milliseconds
		 
	 await sleep (quoinex.rateLimit) // milliseconds
	 await sleep (quoinex.rateLimit) // millisecondsv
	 await sleep (quoinex.rateLimit) // milliseconds
		 
   ticker = await quoinex.fetchTicker (mv.symbol)
   if(ticker.info.disabled == false){
		if (ticker.symbol.slice(-3) == "USD"){
			
	if (asks[ticker.symbol.replace('/','') + "T"] == undefined){
			asks[ticker.symbol.replace('/','') + "T"] = []
			bids[ticker.symbol.replace('/','') + "T"] = []
		}
		if (ticker.ask != 0){
			asks[ticker.symbol.replace('/','') + "T"]['quoinex'] = ticker.ask;
		}
				if (ticker.bid != 0){

			bids[ticker.symbol.replace('/','') + "T"]['quoinex'] = ticker.bid;
		}
		}
		else{
	if (asks[ticker.symbol.replace('/','')] == undefined){
			asks[ticker.symbol.replace('/','')] = []
			bids[ticker.symbol.replace('/','')] = []
		}		if (ticker.ask != 0){

			asks[ticker.symbol.replace('/','')]['quoinex'] = ticker.ask;
		}
		
		if (ticker.bid != 0){
			bids[ticker.symbol.replace('/','')]['quoinex'] = ticker.bid;
		}
			
		}
   }
}
		async function doPost(req, res)
		{
			result3 = []
			result4  = []
			result5 = []
			result6  = []
			result7 = []
			result8  = []
			result9 = []
			result10  = []
			result11 = []
			result12  = []
			result13 = []
			result14  = []
			result15 = []
			result16  = []
			
			if (req.query.name){
				var pair = req.query.name;
			}
			else {
				
				var pair = req.body.Input
			}
			
				for (var p in asks){
					var totAsk = 0;
					var totBid = 0;
					//console.log(p)
					for (var ex in asks[p]){
					if (ex != 'quoinex'){
						if (p == pair){
							totAsk += parseFloat(asks[p][ex])
							totBid += parseFloat(bids[p][ex])
						}
					}
					else {
						qa[p] = asks[p][ex]
						qb[p] = bids[p][ex]
					}
					console.log(p)
					console.log((Object.keys(asks[p]).length - 1));
					
					}if ((Object.keys(asks[p]).length - 1 > 0)){
						//console.log(Object.keys(asks[p]).length  - 1);
						console.log(p);
					avgAsk[p] = totAsk / (Object.keys(asks[p]).length  - 1);
					avgBid[p] = totBid / (Object.keys(bids[p]).length - 1);
					console.log(avgAsk[p]);
					console.log(avgBid[p]);
					var diffA = -1 * (100* (1-(qa[p] / avgAsk[p])))
					var diffB = -1 * (100* (1-(qb[p] / avgBid[p])))
					console.log(diffA)
					console.log(diffB)
					console.log((diffA + diffB ) /2)
					
				
				}
				
				}
				
				
			if (req.query.name){
if (asks[pair] !=undefined ){
			res.json({avgAsk: avgAsk[pair], avgBid: avgBid[pair], quoinexAsk: asks[pair]['quoinex'], quoinexBid: bids[pair]['quoinex']});
				}
				else {
				res.json({avgAsk: avgAsk[pair], avgBid: avgBid[pair]});	
				}
			
			} else {
				res.render('index.ejs', {
					name: req.body.Input,
					json: {},
					avgAsk: avgAsk[pair], avgBid: avgBid[pair], quoinexAsk: asks[pair]['quoinex'], quoinexBid: bids[pair]['quoinex'],
					msg: msg,
					trades: []
				})
			}
            	}
				var avgAsk= []
				var avgBid = []
		
		
app.get('/update', (req, res) => {

	doPost(req, res)

})
var qa = []
var qb = []
app.get('/', (req, res) => {
	
var msg = '<head><meta http-equiv="refresh" content="5"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><style>table{font-family:arial,sans-serif;border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;text-align:left;padding:8px}tr:nth-child(even){background-color:#ddd}</style></head><table><tr><th>Pair</th><th>Quoinex Ask</th><th>Average Ask</th><th>Diff. Ask %</th><th>Quoinex Bid</th><th>Average Bid</th><th>Diff Bid %</th></tr>'
					
					console.log(asks);
				for (var p in asks){
					var totAsk = 0;
					var totBid = 0;
					//console.log(p)
					for (var ex in asks[p]){
					if (ex != 'quoinex'){
							totAsk += parseFloat(asks[p][ex])
							totBid += parseFloat(bids[p][ex])
						
					}
					else {
						qa[p] = asks[p][ex]
						qb[p] = bids[p][ex]
					}
					//console.log(p)
					//console.log((Object.keys(asks[p]).length - 1));
					
					}if ((Object.keys(asks[p]).length - 1 > 0)){
						//console.log(Object.keys(asks[p]).length  - 1);
						console.log(p);
					avgAsk[p] = totAsk / (Object.keys(asks[p]).length  - 1);
					avgBid[p] = totBid / (Object.keys(bids[p]).length - 1);
					console.log(avgAsk[p]);
					console.log(avgBid[p]);
					var diffA = -1 * (100* (1-(qa[p] / avgAsk[p])))
					var diffB = -1 * (100* (1-(qb[p] / avgBid[p])))
					console.log(diffA)
					console.log(diffB)
					console.log((diffA + diffB ) /2)
					if ((diffA + diffB ) /2 > 0.05 || (diffA + diffB ) /2 < -0.05){
						if ((diffA + diffB ) /2 <= 10 || (diffA + diffB ) /2 >= -10){
						if ((diffA + diffB ) /2 > 0){
						msg+="<tr style = 'color:red;'>"
						msg+="<td><form id='" + p + "'style='display:none;' action='/' method='post'><input type='hidden' name='Input' value='" + p + "'></input></form><a href='#' onclick='$(\"#" + p + "\").submit()'>" + p + "</a></td>"
						
					msg+="<td>"+ qa[p] + "</td>"
					msg+="<td>"+ avgAsk[p] + "</td>"
					msg+="<td>"+ diffA + "</td>"
					msg+="<td>"+ qb[p] + "</td>"
					msg+="<td>"+ avgBid[p] + "</td>"
					msg+="<td>"+ diffB + "</td>"
						msg+="</tr>"
						}
					else {
						msg+="<tr style = 'color:green;'>"
						msg+="<td><form id='" + p + "'style='display:none;' action='/' method='post'><input type='hidden' name='Input' value='" + p + "'></input></form><a href='#' onclick='$(\"#" + p + "\").submit()'>" + p + "</a></td>"
						
					msg+="<td>"+ qa[p] + "</td>"
					msg+="<td>"+ avgAsk[p] + "</td>"
					msg+="<td>"+ diffA + "</td>"
					msg+="<td>"+ qb[p] + "</td>"
					msg+="<td>"+ avgBid[p] + "</td>"
					msg+="<td>"+ diffB + "</td>"
						msg+="</tr>"
					}
						}
					}
				
				}
				
				}
				msg+="</table>"
				res.send(msg);

})