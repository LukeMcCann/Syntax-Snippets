<?php 

class User {

    // Get a user profile
    public function profile()
    {
       // simulate null return from sql
       return null;
    }
  
}


class Profile {

    public function employment() 
    {
        return 'web developer';
    }
}

$user = new User;

// Traditionally
// $profile = User->$profile();
// if ($profile) { 
//    echo $profile->employment();
// } else {
//    echo "User not found";
// }

// PHP8 
echo $user->profile()?->employment();
