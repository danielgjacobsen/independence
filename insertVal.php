<?php
	$investimento = $_POST['investimento'];
	$valor = $_POST['valor'];
		$perfil = $_COOKIE['perfil'];
		$login = $_COOKIE['login'];
			$connect = mysqli_connect('localhost', 'root', '12qwaszx', 'independence');
			if($investimento == "" || $investimento == null || $perfil == "" || $perfil == null || $valor == "" || $valor == null){
						echo"<script language='javascript' type='text/javascript'>alert('Todos os campos devem ser preenchidos');window.location.href=document.referrer</script>";
							}else{
										$query = "INSERT INTO valores_diarios (login, investimento, valor) VALUES ('$login','$investimento', '$valor')";
												$insert = mysqli_query($connect, $query);
												if($insert){
																echo"<script language='javascript' type='text/javascript'>alert('Valor cadastrado com sucesso!');window.location.href=document.referrer</script>";
																		}else{
																						echo"<script language='javascript' type='text/javascript'>alert('Não foi possível cadastrar o valor...houve alguma falha');window.location.href=document.referrer</script>";
																								}
													}
?>
