<?php

if(!($sock = socket_create(AF_INET, SOCK_STREAM, 0)))
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Couldn't create socket: [$errorcode] $errormsg \n");
}

echo "Socket created \n";

//Connect socket to remote server
if(!socket_connect($sock , '74.125.235.20' , 80))
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Could not connect: [$errorcode] $errormsg \n");
}

echo "Connection established \n";

$message = "GET / HTTP/1.1\r\n\r\n";

//Send the message to the server
if( ! socket_send ( $sock , $message , strlen($message) , 0))
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Could not send data: [$errorcode] $errormsg \n");
}

echo "Message send successfully \n";

//Now receive reply from server
if(socket_recv ( $sock , $buf , 2045 , MSG_WAITALL ) === FALSE)
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Could not receive data: [$errorcode] $errormsg \n");
}

//print the received message
echo $buf;

socket_close($sock);

$ip_address = gethostbyname("www.google.com");

// Bind
if(!($sock = socket_create(AF_INET, SOCK_STREAM, 0)))
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Couldn't create socket: [$errorcode] $errormsg \n");
}

echo "Socket created \n";

// Bind the source address
if( !socket_bind($sock, "127.0.0.1" , 5000) )
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Could not bind socket : [$errorcode] $errormsg \n");
}

echo "Socket bind OK \n";

socket_listen ($sock , 10)
  
  if(!($sock = socket_create(AF_INET, SOCK_STREAM, 0)))
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Couldn't create socket: [$errorcode] $errormsg \n");
}

echo "Socket created \n";

// Bind the source address
if( !socket_bind($sock, "127.0.0.1" , 5000) )
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Could not bind socket : [$errorcode] $errormsg \n");
}

echo "Socket bind OK \n";

if(!socket_listen ($sock , 10))
{
	$errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Could not listen on socket : [$errorcode] $errormsg \n");
}

echo "Socket listen OK \n";

echo "Waiting for incoming connections... \n";

//Accept incoming connection - This is a blocking call
$client = socket_accept($sock);
	
//display information about the client who is connected
if(socket_getpeername($client , $address , $port))
{
	echo "Client $address : $port is now connected to us.";
}

socket_close($client);
socket_close($sock);
