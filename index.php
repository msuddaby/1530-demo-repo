<?php
#this is for netlify
$contents = scandir('.');
$folders = glob(".", GLOB_ONLYDIR);

printf($folders);

?>