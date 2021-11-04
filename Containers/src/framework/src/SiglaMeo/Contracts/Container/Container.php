<?php declare(strict_types = 1);

namespace SiglaMeo\Contracts\Container;

/**
 * PSR-11 Compliant ContainerInterface
 * 
 * @author Luke McCann
 * 
 * @version PHP 8.0.12
 * 
 * This interface manually builds a ServiceContianer (IoC Container)
 * following PSR-11 standards. As of creating this class the official 
 * PSR-11 package is incompatible with PHP 8.
 */
interface Container 
{
    /**
     * Finds an entry of the container by its identifier and returns it.
     *
     * @param string $id Identifier of the entry to look for.
     *
     * @throws NotFoundExceptionInterface  No entry was found for **this** identifier.
     * @throws ContainerExceptionInterface Error while retrieving the entry.
     *
     * @return mixed Entry.
     */
    public function get(String $id);

    /**
     * Returns true if the container can return an entry for the given identifier.
     * Returns false otherwise.
     *
     * `has($id)` returning true does not mean that `get($id)` will not throw an exception.
     * It does however mean that `get($id)` will not throw a `NotFoundExceptionInterface`.
     *
     * @param string $id Identifier of the entry to look for.
     *
     * @return bool
     */
    public function has(String $id);

    /**
     * Get a Singleton instance of the Container.
     *
     * @return static
     */
    public static function instance();

    /**
     * Resolve the given type from the container.
     *
     * @param  string|callable  $abstract
     * @param  array  $parameters
     * @return mixed
     *
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function make(Callable|String $abstract, array $parameters = []);

    /**
     * Register a binding with the container.
     *
     * @param  string  $abstract
     * @param  \Closure|string  $concrete
     * 
     * @return void
     */
    public function bind(String $abstract, Closure|String $concrete);

}