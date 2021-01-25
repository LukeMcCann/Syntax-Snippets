<?php 

class Task {

    protected $description;

    protected $complete = false;


    public function __construct(string $description, bool $complete)
    {
        $this->description = $description;
        $this->complete = $complete;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription(string $description)
    {
        $this->description = $description;
    }

    public function complete() 
    {
        $this->complete = true;
    }

    public function isComplete() 
    {
        return $this->complete;
    }

}