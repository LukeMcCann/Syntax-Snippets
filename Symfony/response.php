<?php declare(strict_types = 1);

require_once(dirname(__DIR__).'/vendor/autoload.php');

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$request = Request::createFromGlobals();

$name = $request->get('name', 'World');

$response = new Response(sprintf('Hello %s', htmlspecialchars($name, ENT_QUOTES, 'UTF-8')));

$response->setContent('{"Intercepted": true}');
$response->setStatusCode(418);
$response->headers->set('Content-Type', 'text/json');

$response->prepare($request);

$response->send();
