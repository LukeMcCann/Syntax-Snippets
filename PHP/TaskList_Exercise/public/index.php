<?php 

    class Task {

        protected $description;

        protected $completed = false;

        public function __construct(string $description)
        {
            $this->description = $description;
        }

        public function isComplete() 
        {
            return $this->completed;
        }

        public function complete()
        {
            $this->completed = true;
        }

        public function getDescription() 
        {
            return $this->description;
        }
    }

    $tasks = [
        new Task('Complete assignment'),
        new Task('Finish a project')
    ];

    $tasks[0]->complete();

    require_once 'index.view.php';