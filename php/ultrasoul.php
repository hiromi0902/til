<?php

$str_list     = array("ウル" , "トラ" , "ソウル");
$last_string  = "ハイ！";
$random_str   = $str_list[array_rand($str_list)];

echo $random_str;

if ($random_str !== $str_list[0]) {

    return $random_str;

}elseif ($random_str == $str_list[0]) {
    
    if ($random_str == $str_list[1]) {
        
        echo $str_list[1];

    }elseif ($random_str == $str_list[2]) {
        
        echo $last_string;
    }

    }else{
        return $random_str;

    }
?>
