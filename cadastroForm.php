<?php
	ini_set('display_errors', true);
	error_reporting(E_ALL);
		$login_cookie = $_COOKIE['login'];
		$perfil_cookie = $_COOKIE['perfil'];
			if(isset($login_cookie)){
						if($perfil_cookie == "admin"){
										include 'cadastro.html';
												}else{
																echo"<script language='javascript' type='text/javascript'>alert('Funcionalidade disponível somente para administradores do sistema!');window.location.href='login.html';</script>";
																			die();
																		}
							}else{
										echo"<script language='javascript' type='text/javascript'>alert('Necessário realizar login para acessar esta funcionalidade!');window.location.href='login.html';</script>";
												die();
											}
?>
