$(document).ready(function(){
	$.ajax({
		url: "http://35.224.227.85/independence/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var value = {
				dia : [],
				TESOURO_SELIC_2023_LFT : [],,
				TESOURO_SELIC_2023_LFT_diff : [],
			};
			
			var len = data.length;
			var oldValue = 0;

			for(var i = 0; i < len; i++) {
				if (data[i].investimento == "TESOURO SELIC 2023 (LFT)"){
					value.dia.push(data[i].data);
					value.TESOURO_SELIC_2023_LFT.push(data[i].valor);
					value.TESOURO_SELIC_2023_LFT_diff.push(data[i].valor - oldValue);
					oldValue = data[i].valor;
				}
			}
			
			console.log(value);
			
			var ctx = $("#myChart");
			
			var data = {
				labels : value.dia,
				datasets : [
					{
						label : "TESOURO SELIC 2023 (LFT)",
						data : value.TESOURO_SELIC_2023_LFT,
						backgroundColor : "blue",
						borderColor : "lightblue",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					},
					{
						label : "Diferenca",
						data : value.TESOURO_SELIC_2023_LFT_diff,
						backgroundColor : "green",
						borderColor : "lightblue",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					}
				]
			};
			
			var myChart = new Chart( ctx, {
				type : "line",
				data : data,
				options : {}
			});
			
		},
		error: function(data) {
			console.log(data);
		}
	});
});
