<?php 

// Constructor promotion is a feature in PHP 8. Allowing
// us to write cleaner constructors. 

// PHP 7.4

class BlogPost {
 
    protected string $Title;
 
    protected string $Content;
 
    protected DateTimeImmutable $PostedDate;
 
 
    public function __construct(
        string $Title,
        string $Content,
        DateTimeImmutable $PostedDate) {
 
        $this -> Title = $Title;
        $this -> Content = $Content;
        $this -> PostedDate = $PostedDate;
    }
 
}

// PHP 8

class BlogPost {
    public function __construct(
        protected string $Title,
        protected string $Content,
        protected DateTimeImmutable $PostedDate) {}
}
