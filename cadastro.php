<?php 

$login = $_POST['login'];
$senha = MD5($_POST['senha']);
$perfil = $_COOKIE['perfil'];
$connect = mysqli_connect('localhost', 'root', '12qwaszx', 'independence');
$query_select = "SELECT login FROM usuarios WHERE login = '$login'";
$select = mysqli_query($connect, $query_select);
$array = mysqli_fetch_array($select);
$logarray = $array['login'];
 
  if($login == "" || $login == null || $perfil == "" || $perfil == null || $senha == "" || $senha == null){
	      echo"<script language='javascript' type='text/javascript'>alert('Todos os campos devem ser preenchidos');window.location.href='cadastroForm.php';</script>";
	       
	          }else{
			        if($logarray == $login){
					 
					        echo"<script language='javascript' type='text/javascript'>alert('Esse login já existe');window.location.href='cadastroForm.php';</script>";
						        die();
						 
						      }else{
							              $query = "INSERT INTO usuarios (login,senha, perfil) VALUES ('$login','$senha', '$perfil')";
								              $insert = mysqli_query($connect, $query);
								               
								              if($insert){
										                echo"<script language='javascript' type='text/javascript'>alert('Usuário cadastrado com sucesso!');window.location.href='login.html'</script>";
												        }else{
														          echo"<script language='javascript' type='text/javascript'>alert('Não foi possível cadastrar esse usuário');window.location.href='cadastroFomr.php'</script>";
															          }
									            }
				    }
?>
