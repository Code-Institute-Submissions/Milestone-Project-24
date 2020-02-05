## André's memory game!
In this project I created a memory game based on my knowledge of HTML5, CSS3, and JavaScript.
During the creation of this project, I encountered several problems and new concepts that I have learned a lot from.
I had to look up numerous new things that I had not previously experienced with, but I am happy with the result and it taught me a lot of new things (like the arrow function to name one).

I hope you enjoy playing my game. My intention when creating this game was to make a game that can help you train your brain and I think this does that very well as it is very difficult to keep track on which card is where while playing.
The goal is to find all the matching cards with the least amount of flips!

# UX

This game is for anyone that is interested in wanting to improve their memory or just to enjoy the game (and the beautiful pictures).

# Features

My game is pretty straight forward. Once you load the game, you can just click on any card with the leaf on it and then
try to remember where it is and thereafter find its' pair. (I included a litte description in the game itself aswell)

# Techonologies used
- HTML5 (https://en.wikipedia.org/wiki/HTML5)
- CSS3 (https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)
- JavaScript (https://en.wikipedia.org/wiki/JavaScript)

I used HTML5 to structure the webpage.
I then used CSS3 to style the webpage.
Lastly I used JavaScript to implement logic to my game so that it would work correctly.

# Testing

During the creation of my project I came across several problems that I had to solve. 
One of them was that if I clicked to cards to quickly after the previous two that were click, the first two cards
would stay flipped (as a pair) regardless if they were a pair or not. To solve this I used the lockBoard function and set a timer on it
so that new cards could not be clicked before the current ones were determined a pair or not, in which they would flip back and let me try again.

Another thing was that I noticed that the cards were always in the same order. To solve this I had to do a little research on how to
shuffle the cards using the Math.random function, which I made work.. Eventually.
I also came across a lot of new and useful properties that I made us of, like the transform: scale() and perspective.

# Deployment
Had some trouble with deploying because I didn't specify the right repository in the beginning, so it 
was a little bit of a hassle to connect to a new one, but I managed and I am pleased with the result.

# Credits

# Media
The photos used in this site were obtained from pexels.com

# Acknowledgements
I received for this project from Code Institute's Milestone Project 2 ideas. I was struggling for a long time on
where to go with my project, but the suggestions from the course really helped me settle at a memory game.