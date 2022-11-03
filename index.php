<?php
#this is for netlify
$contents = scandir('.');
$folders = glob(".", GLOB_ONLYDIR);

foreach ($contents as &$item) {
    echo($item);
}

?>