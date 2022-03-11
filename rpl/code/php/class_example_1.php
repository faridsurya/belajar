<?php
class Rectangle{
    public $width;
    public $height;

    public function calculateArea()
    {
        return ($this->width*$this->height);
    }
}
$myRect = new Rectangle();
$myRect->width = 10;
$myRect->height = 9;
echo $myRect->calculateArea();
?>