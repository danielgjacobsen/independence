$(document).ready(function(){
	$.ajax({
		url: "http://35.224.227.85/independence/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var value = {
				dia : [],
				TESOURO_PREFIXADO_2023_LTN : [],
			};
			
			var len = data.length;

			for(var i = 0; i < len; i++) {
				if (data[i].investimento == "TESOURO PREFIXADO 2023 (LTN)"){
					value.dia.push(data[i].data);
					value.TESOURO_PREFIXADO_2023_LTN.push(data[i].valor);
				}
			}
			
			console.log(value);
			
			var ctx = $("#myChart");
			
			var data = {
				labels : value.dia,
				datasets : [
					{
						label : "TESOURO PREFIXADO 2023 (LTN)",
						data : value.TESOURO_PREFIXADO_2023_LTN,
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