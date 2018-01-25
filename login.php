<?php
	ini_set('display_errors', true);
	error_reporting(E_ALL);
		$login = $_POST['login'];
		$entrar = $_POST['entrar'];
			$senha = MD5($_POST['senha']);
				$connect = mysqli_connect('localhost', 'root', '12qwaszx', 'independence');
				if (isset($entrar)) {
							$verifica = mysqli_query($connect, "SELECT * FROM usuarios WHERE login = '$login' AND senha = '$senha'") or die("erro ao selecionar");
									if (mysqli_num_rows($verifica)<=0){
													echo"<script language='javascript' type='text/javascript'>alert('Login e/ou senha incorretos');window.location.href='login.html';</script>";
																die();
															}else{
																			while($row = mysqli_fetch_assoc($verifica)) {
																								setcookie("perfil", $row["perfil"]);
																											}
																						setcookie("login",$login);
																						header("Location:index.php");
																								}
								}
					mysqli_close($connect);
?>
