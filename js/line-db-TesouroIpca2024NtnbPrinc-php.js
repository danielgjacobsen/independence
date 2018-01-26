$(document).ready(function(){
	$.ajax({
		url: "http://35.224.227.85/independence/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var value = {
				dia : [],
				TESOURO_IPCA_2024_NTNB_PRINC : [],
			};
			
			var len = data.length;

			for(var i = 0; i < len; i++) {
				value.dia.push(data[i].data);
				if (data[i].investimento == "TESOURO IPCA+ 2024 (NTNB PRINC)"){
					value.TESOURO_IPCA_2024_NTNB_PRINC.push(data[i].valor);
				}
			}
			
			console.log(value);
			
			var ctx = $("#myChart");
			
			var data = {
				labels : value.dia,
				datasets : [
					{
						label : "TESOURO IPCA+ 2024 (NTNB PRINC)",
						data : value.TESOURO_IPCA_2024_NTNB_PRINC,
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