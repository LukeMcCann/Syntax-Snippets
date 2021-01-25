<?php 

class Post 
{
    private $title;
    private $body;

    public function __construct()
    {
    }

    public function getTitle() 
    {
        return $this->title;
    }

    public function setTitle(string $title) 
    {
        $this->title = $title;
    }

    public function getBody() 
    {
        return $this->body;
    }

    public function setBody(string $body) 
    {
        $this->body = $body;
    }
}