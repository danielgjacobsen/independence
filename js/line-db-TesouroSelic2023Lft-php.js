$(document).ready(function(){
	$.ajax({
		url: "http://35.224.227.85/independence/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var value = {
				dia : [],
				TESOURO_SELIC_2023_LFT : [],
			};
			
			var len = data.length;

			for(var i = 0; i < len; i++) {
				value.dia.push(data[i].data);
				if (data[i].investimento == "TESOURO SELIC 2023 (LFT)"){
					value.TESOURO_SELIC_2023_LFT.push(data[i].valor);
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