const maxProfit = prices => {
	let totalProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		// if previous day's price was lower
		if (prices[i - 1] < prices[i]) {
			// add difference to totalProfit
			totalProfit += prices[i] - prices[i - 1];
		}
	}

	console.log(totalProfit);
	return totalProfit;
};

maxProfit([7, 1, 5, 3, 5, 4]); // 6
maxProfit([7, 5, 3, 1]); // 0
