<?php 

class Post 
{
    private $title;
    private $body;

    public function __construct(string $title, string $body)
    {
        $this->title = $title;
        $this->body = $body;
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