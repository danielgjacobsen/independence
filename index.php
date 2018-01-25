<?php
  $login_cookie = $_COOKIE['login'];
$perfil_cookie = $_COOKIE['perfil'];
      if(isset($login_cookie)){
	            echo"Bem-Vindo, $login_cookie <br>";
		          echo"Essas informações <font color='red'>PODEM</font> ser acessadas por você<br>";
		    	  if($perfil_cookie == "admin"){
				  		echo "Hummmmm, vc é Administrador do sistema.......Parabéns!";
							  }else{
								  		echo "Seja muito bem vindo, usuário!";
											  }
			      }else{
				            echo"Bem-Vindo, convidado <br>";
					          echo"Essas informações <font color='red'>NÃO PODEM</font> ser acessadas por você";
					          echo"<br><a href='login.html'>Faça Login</a> Para ler o conteúdo";
						      }
?>
