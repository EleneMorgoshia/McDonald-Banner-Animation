# McDonald's Banner Animation 

We had to create an animation which's total duration should be 12 seconds. In my HTML structure, I created one main section where I placed five divs(each with different background colors and durations for their display).

In my CSS file, I styled the elements (images and backgrounds) and created animations by using @keyframes. Each background has a different animation .

Since  using JavaScript would be an additional point I decided to create a function that would display the divs (different backgrounds) one by one for a specific duration. In my JavaScript code, I used an object constructor to create five objects, where one property would be the ID of my div (using document.getElementById()) and the other property would be the duration of the current div. 

Then I created five objects and placed them into an array called divsArray. After that I created a function called startAnimation() which has the main point of displaying the divs one by one  each for a specific duration.

before the function  I created a variable called currentDivsDuration  that has the value of  0. However, when the function starts, this variable is updated as we iterate through the divsArray .Each div's duration is added to currentDivsDuration to calculate the timing for its display and hide.

Then we use forEach to loop through each div in the divsArray. A setTimeout is set up for each div . setTimeout  activates the display of the div after the total duration has passed. Then, after the div is displayed another setTimeout is created to hide the div after its specific duration. The expression currentDivsDuration - div.duration calculates the delay for each div's display by subtracting the duration of the current div from the total time.

Responsive - I created a media.css file to make the design suitable for all screen sizes.


