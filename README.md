# HW04A  Keeping Track of Time
I want to make a 24-hour clock. I use the position of three circles of different sizes and colors to represent hours, minutes, and seconds. To convert time to position, I used map(), which maps time to distance. It's interesting to observe how the circles overlap differently because of the time!

## Pseudocode
1.Setting the time variable
2.Mapping time lengths to distance lengths
3.Draw circles of different sizes and colors according to the length of the distance



# HW04B   
I made two attempts, one to draw origin-to-mouse rectangles based on where the mouse was dragged (in the hidden section "//"), and the other to draw circles of different sizes based on the time the mouse was pressed, both using color mapping, the closer to the right the redder it is, the closer to the left the bluer it is.

## Rect Pseudocode
1.mapping color
2.Use mousedragged() to draw a rectangle from the origin to the mouse position when the mouse is dragged
3.Use keyPressed()to clear the entire canvas

## Ellipse Pseudocode
1.mapping color
2.Use mousePressed() and millis() to record the initial mouse position.
3.Use mouseReleased() to record the end mouse position.
4.Calculate the time difference and map the time difference to the diameter of the circle.
5.Drawing Circles
6.Use keyPressed()to clear the entire canvas


