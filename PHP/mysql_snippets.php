// Connect to DB
$mysqli = mysqli_connect('localhost', 'DATABASE_USER', 'DATABASE_PASS', 'DATABASE_NAME');

// Check Connection Errors
if (mysqli_connect_errno()) {
	die('Failed to connect to MySQL: ' . mysqli_connect_error());
}

// Connect and Display Results
$result = $mysqli->query('SELECT * FROM students');
while ($row = $result->fetch_assoc()) {
	echo $row['name'] . '<br>';
}

// Check Num Rows
$result->num_rows;

// Escape Special Chars
$mysqli->real_escape_string($user_input_text);

// Prepare SQL Statements
$name = 'David';
$limit = 1;
$stmt = $mysqli->prepare('SELECT * FROM students WHERE name = ? LIMIT ?');
$stmt->bind_param('si', $name, $limit);
$stmt->execute();
// etc...
$result = $stmt->get_result();

// Close query and DB Connection
$stmt->close();
$mysqli->close();
