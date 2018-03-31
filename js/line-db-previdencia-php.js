$(document).ready(function(){
	$.ajax({
		url: "http://35.224.227.85/independence/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var value = {
				dia : [],
				SICREDI_PREVIDENCIA : [],
				diff : [],
			};
			
			var len = data.length;
			var oldValue = 0;

			for(var i = 0; i < len; i++) {
				if (data[i].investimento == "SICREDI PREVIDENCIA"){
					value.dia.push(data[i].data);
					value.SICREDI_PREVIDENCIA.push(data[i].valor);
					value.diff.push(data[i].valor - oldValue);
					oldValue = data[i].valor;
				}
			}
			
			console.log(value);
			
			var ctx = $("#myChart");
			
			var data = {
				labels : value.dia,
				datasets : [
					{
						label : "SICREDI PREVIDENCIA",
						data : value.SICREDI_PREVIDENCIA,
						backgroundColor : "blue",
						borderColor : "lightblue",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					},
					{
						label : "Diferenca",
						data : value.diff,
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
