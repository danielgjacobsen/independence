<?php
//setting header to json
header('Content-Type: application/json');

$login = $_COOKIE['login'];

$connect = mysqli_connect('localhost', 'root', '12qwaszx', 'independence');
if (!$connect) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
$query  = " SELECT 'Flavia' as nome, ";
$query .= " 	   '10' as Agressividade, ";
$query .= "        '60' as Desenv_Relacionamento, ";
$query .= "        '50' as Facilidade_Mudancas, ";
$query .= " 	   '20' as Extroversao, ";
$query .= " 	   '90' as Dominancia, ";
$query .= "        '70' as Desenv_Trab, ";
$query .= "        '10' as Formalidade, ";
$query .= "        '05' as Condescendencia, ";
$query .= "        '80' as Concentracao, ";
$query .= "        '45' as Perfil_Tecnico, ";
$query .= "        '20' as Exatidao, ";
$query .= "        '30' as Detalhismo, ";
$query .= "        '50' as Perfil_Artistico, ";
$query .= "        '80' as Paciencia, ";
$query .= "        '20' as Empatia, ";
$query .= "        '60' as Sociabilidade, ";
$query .= "        '20' as Entusiasmo, ";
$query .= "        '90' as Cap_Sonhar, ";
$query .= "        '80' as Automotivacao, ";
$query .= "        '20' as Independencia ";
$query .= " UNION  ";
$query .= " SELECT 'Marina' as nome, ";
$query .= " 	   '20' as Agressividade, ";
$query .= "        '70' as Desenv_Relacionamento, ";
$query .= "        '40' as Facilidade_Mudancas, ";
$query .= " 	   '90' as Extroversao, ";
$query .= " 	   '50' as Dominancia, ";
$query .= "        '30' as Desenv_Trab, ";
$query .= "        '0' as Formalidade, ";
$query .= "        '50' as Condescendencia, ";
$query .= "        '10' as Concentracao, ";
$query .= "        '75' as Perfil_Tecnico, ";
$query .= "        '90' as Exatidao, ";
$query .= "        '50' as Detalhismo, ";
$query .= "        '40' as Perfil_Artistico, ";
$query .= "        '70' as Paciencia, ";
$query .= "        '60' as Empatia, ";
$query .= "        '90' as Sociabilidade, ";
$query .= "        '80' as Entusiasmo, ";
$query .= "        '50' as Cap_Sonhar, ";
$query .= "        '80' as Automotivacao, ";
$query .= "        '70' as Independencia ";
$query .= " UNION  ";
$query .= " SELECT 'Lucas' as nome, ";
$query .= " 	   '80' as Agressividade, ";
$query .= "        '40' as Desenv_Relacionamento, ";
$query .= "        '50' as Facilidade_Mudancas, ";
$query .= " 	   '80' as Extroversao, ";
$query .= " 	   '40' as Dominancia, ";
$query .= "        '40' as Desenv_Trab, ";
$query .= "        '10' as Formalidade, ";
$query .= "        '55' as Condescendencia, ";
$query .= "        '15' as Concentracao, ";
$query .= "        '70' as Perfil_Tecnico, ";
$query .= "        '70' as Exatidao, ";
$query .= "        '60' as Detalhismo, ";
$query .= "        '10' as Perfil_Artistico, ";
$query .= "        '20' as Paciencia, ";
$query .= "        '90' as Empatia, ";
$query .= "        '80' as Sociabilidade, ";
$query .= "        '70' as Entusiasmo, ";
$query .= "        '50' as Cap_Sonhar, ";
$query .= "        '60' as Automotivacao, ";
$query .= "        '20' as Independencia ";

$result = mysqli_query($connect, $query);

$data = array();
while ($row = mysqli_fetch_object($result)) {
    $data[] = $row;
}


// Free result set
mysqli_free_result($result);

//close connection
mysqli_close($connect);

//now print the data
print json_encode($data);

?>
