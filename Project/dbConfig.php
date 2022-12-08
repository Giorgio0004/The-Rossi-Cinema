<?php
// DB credentials.
define('DB_HOST1','localhost');
define('DB_USER1','root');
define('DB_PASS1','');
define('DB_NAME1','therossicinema');
try
{
$dbh = new PDO("mysql:host=".DB_HOST1.";dbname=".DB_NAME1,DB_USER1, DB_PASS1);
}
catch (PDOException $e)
{
echo("Error: " . $e->getMessage());
}
?>