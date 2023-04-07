# Flappy-Kirby
WIP. Kirby zooming through pipes!

Project was last updated on: 7 Apr 2023

**This game is still a WIP. Though it is playable because functionality already works, link in description**

## Program information

This game implements a version of the game "Flappy Bird" using HTML canvas and JavaScript. The game involves controlling a bird, Kirby, to navigate through pipes by using a flying star hoverboard while avoiding collisions. The game also includes particle effects and tracks the player's score.


https://user-images.githubusercontent.com/115472181/230606832-ddc8842e-cbec-4824-bc28-5bf5740c53ac.mp4


**A basic rundown of how it works**

> The player controls Kirby by holding down and releasing the spacebar to avoid colliding with obstacles (pipes) and collecting points.

> The code defines the Kirby class with properties such as position, dimensions, and weight, and methods to update the bird's position, draw the bird on the canvas, and adjust its vertical speed when the player presses the spacebar.

> The code defines the obst class with properties such as position, dimensions, and color, and methods to update the obstacle's position based on the game's speed and draw the obstacle on the canvas.

> The handleObstacles function creates new obstacles at regular intervals and updates and removes existing obstacles as necessary.

> The Particle class represents particle effects in the game, with properties such as position, size, and color, and methods to update and draw particles on the canvas. The handleParticles function creates new particles and updates and removes existing particles as necessary.

> The game loop continuously updates and draws the bird, obstacles, and particles on the canvas, and checks for collisions between the bird and obstacles to determine the game's outcome.

> The game keeps track of the player's score and displays it on the canvas.


Key takeaways from this project: learning to use canvas and Math.random on js

I've also included an extra javascript file called xtraparticles.js for extra particles (I only have circle ones in it for now, but I'll add more in the future). Currently the one in the particles code has a star/sparkle particle. But there's alot of room for imagination. Almost everything in the code is easily editable, in the most convenient way possible (particle color, pipe images, gamespeed, pipe spacing, pipe width, background, bird image, etc)
