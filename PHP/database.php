<?php 

class Database {
    private $host = 'mysql';
    private $user = 'root';
    private $pwd = 'root';
    private $dbname = 'app_db';

    private $dbh;
    private $error;
    private $stmt;

    public function __construct()
    { 
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname;
        $options = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        );

        try {
            $this->dbh = new PDO($dsn, $this->user, $this->pwd, $options);
        } catch(PDOException $e) {
            $this->error = $e->getMessage();
        }
    }

    public function query($query) 
    {
        $this->stmt = $this->dbh->prepare($query);
    }

    public function bind($param, $value, $type = null) 
    {
        if (is_null($type)) {
            switch (true) {
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                default: 
                    $type = PDO::PARAM_STR;
            }
        }
        $this->stmt->bindValue($param, $value, $type);
    }

    public function execute() 
    {
        return $this->stmt->execute();
    }

    public function resultset() 
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
