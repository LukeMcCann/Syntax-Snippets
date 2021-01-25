<?php 

final class QueryBuilder 
{
    private $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function selectAll(string $table, string $intoClass) 
    {
        $statement = $this->pdo->prepare("SELECT * FROM {$table}");

        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_CLASS, $intoClass);
    }
}