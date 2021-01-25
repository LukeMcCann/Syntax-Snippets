<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tasks</title>
</head>

<body>
    <h1>Tasks</h1>
    <ul>
        <?php foreach ($tasks as $task) : ?>
            <?php if ($task->isComplete()) : ?>
                <strike>
                    <li><?= $task->getDescription() ?></li>
                </strike>
            <?php else: ?>
                    <li><?= $task->getDescription() ?></li>
            <?php endif; ?>
        <?php endforeach; ?>
    </ul>
</body>

</html>