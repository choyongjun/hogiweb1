<?php

function echoJsInPath($path)
{
    $realPath = $_SERVER['DOCUMENT_ROOT'] . $path;
    
    if (! is_dir($realPath)) {
        return;
    }
    
    $h = opendir($realPath);
    
    while (false !== ($file = readdir($h))) {
        if ($file == '.' || $file == '..') {
            continue;
        }
        
        if (is_dir($realPath . $file)) {
            echoJsInPath($path . $file . '/');
            
            continue;
        }
        
        if (strpos($file, '.js') === false)
            continue;
        
        echo '<script src="' . $path . $file . '"></script>
';
    }
}