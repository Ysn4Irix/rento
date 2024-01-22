<?php
if( !function_exists('random_bytes') )
{
    function random_bytes($length)
    {
        $characters = '0123456789';
        $characters_length = strlen($characters);
        $output = '';
        for ($i = 0; $i < $length; $i++)
            $output .= $characters[rand(0, $characters_length - 1)];

        return $output;
    }
}