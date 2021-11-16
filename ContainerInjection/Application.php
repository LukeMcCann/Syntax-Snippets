<?php declare(strict_types = 1);

namespace SiglaMeo\Foundation;

use Psr\Container\ContainerInterface;

final class Application
{

    /**
     * The SiglaMeo framework version.
     *
     * @var string
     */
    const VERSION = '0.0.1';

    protected static $container;

    private static $appRoot;

    public function __construct(ContainerInterface $container, String $appRoot = '')
    {
        // if ($appRoot) {
        //     self::$appRoot = $appRoot;   
        // }

        self::$container = $container;

        echo get_class(self::$container);
    }
}