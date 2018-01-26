$(document).ready(function(){
	$.ajax({
		url: "http://35.224.227.85/independence/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var value = {
				dia : [],
				SICREDI_PREVIDENCIA : [],
			};
			
			var len = data.length;

			for(var i = 0; i < len; i++) {
				value.dia.push(data[i].data);
				if (data[i].investimento == "SICREDI PREVIDENCIA"){
					value.SICREDI_PREVIDENCIA.push(data[i].valor);
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