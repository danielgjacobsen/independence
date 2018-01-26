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
$query = "SELECT DATE_FORMAT(data,'%d/%m/%Y') AS data, investimento, valor from valores_diarios WHERE login = '$login' ";

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