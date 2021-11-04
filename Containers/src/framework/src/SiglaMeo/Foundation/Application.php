<?php declare(strict_types = 1);

namespace SiglaMeo\Foundation;

use SiglaMeo\Container\Container;

final class Application extends Container
{
    private const VERSION = '0.0.1';

    private $appRoot;

    public function __construct(string $appRoot = '')
    {
        if ($appRoot) {
            $this->appRoot = $appRoot;   
        }
    }

    public function version()
    {
        return static::VERSION;
    }

    public function root()
    {
        return $this->appRoot;
    }
}