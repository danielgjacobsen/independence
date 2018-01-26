$(document).ready(function(){
	$.ajax({
		url: "http://35.224.227.85/independence/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var value = {
				dia : [],
				SICREDI_PREVIDENCIA : [],
				TESOURO_SELIC_2023_LFT : [],
				TESOURO_IPCA_2024_NTNB_PRINC : [],
				TESOURO_PREFIXADO_2023_LTN : [],
			};
			
			var len = data.length;

			for(var i = 0; i < len; i++) {
				value.dia.push(data[i].data);
				if (data[i].investimento == "SICREDI PREVIDENCIA"){
					value.SICREDI_PREVIDENCIA.push(data[i].valor);
				}else if (data[i].investimento == "TESOURO SELIC 2023 (LFT)"){
					value.TESOURO_SELIC_2023_LFT.push(data[i].valor);
				}else if (data[i].investimento == "TESOURO IPCA+ 2024 (NTNB PRINC)"){
					value.TESOURO_IPCA_2024_NTNB_PRINC.push(data[i].valor);
				}else if (data[i].investimento == "TESOURO PREFIXADO 2023 (LTN)"){
					value.TESOURO_PREFIXADO_2023_LTN.push(data[i].valor);
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
						label : "TESOURO SELIC 2023 (LFT)",
						data : value.TESOURO_SELIC_2023_LFT,
						backgroundColor : "green",
						borderColor : "lightgreen",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					},
					{
						label : "TESOURO IPCA+ 2024 (NTNB PRINC)",
						data : value.TESOURO_IPCA_2024_NTNB_PRINC,
						backgroundColor : "silver",
						borderColor : "lightsilver",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					},
					{
						label : "TESOURO PREFIXADO 2023 (LTN)",
						data : value.TESOURO_PREFIXADO_2023_LTN,
						backgroundColor : "yellow",
						borderColor : "lightyellow",
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