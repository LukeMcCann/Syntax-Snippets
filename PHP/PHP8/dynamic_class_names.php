<?php

class Conversation
{
}

$obj = new Conversation();

// Traditionally
// switch (get_class($obj::class)) {
//     case 'Conversation':
//         $type = 'started_conversation';
//         break;

//     case 'Reply':
//         $type = 'replied_to_conversation';
//         break;

//     case 'Comment':
//         $type = 'commented_on_conversation'; 
//         break;
// }

// PHP8
$type = match (get_class($obj::class)) {
    'Conversation' => 'started_conversation',
    'Reply' => 'replied_to_conversation',
    'Comment' => 'commented_on_conversation',
};

echo $type;
