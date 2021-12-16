<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd4e7ac5933de421f5a56a41049c5c271
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'SiglaMeo\\' => 9,
        ),
        'P' => 
        array (
            'Psr\\Container\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'SiglaMeo\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/SiglaMeo',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Psr\\Container\\ContainerExceptionInterface' => __DIR__ . '/..' . '/psr/container/src/ContainerExceptionInterface.php',
        'Psr\\Container\\ContainerInterface' => __DIR__ . '/..' . '/psr/container/src/ContainerInterface.php',
        'Psr\\Container\\NotFoundExceptionInterface' => __DIR__ . '/..' . '/psr/container/src/NotFoundExceptionInterface.php',
        'SiglaMeo\\Container\\Container' => __DIR__ . '/../..' . '/src/SiglaMeo/Container/Container.php',
        'SiglaMeo\\Contracts\\Container\\Container' => __DIR__ . '/../..' . '/src/SiglaMeo/Contracts/Container/Container.php',
        'SiglaMeo\\Foundation\\Application' => __DIR__ . '/../..' . '/src/SiglaMeo/Foundation/Application.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd4e7ac5933de421f5a56a41049c5c271::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd4e7ac5933de421f5a56a41049c5c271::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd4e7ac5933de421f5a56a41049c5c271::$classMap;

        }, null, ClassLoader::class);
    }
}