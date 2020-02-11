# portel-puzzle-solver

https://portel.ee/pusle/014  

![Unsolved puzzle](static/puzzle.png "Unsolved puzzle")

## What are the number of possible combinations?

Possible rotations for 3x3 board is 4<sup>9</sup>  
Possible permutations for board P<sub>9</sub> = 9!

P<sub>9</sub> * 4<sup>9</sup> = 9! * 4<sup>9</sup> = 95126814720

## Requirements
* nodejs and npm

## How to run 
* ```npm install```
* ```npm run solve```

## Solution

* Solver run time ~ 34 minutes (i7-8650U)  
* Solver result:  
```
15.91%
finished solving at solution  15135911075
using permutation  [ 1, 4, 5, 2, 0, 8, 3, 6, 7 ]
solution is:
label:2;up:flag label:5;up:bird label:6;up:bird
label:3;up:bird label:1;up:fish label:9;up:fish
label:4;up:fish label:7;up:bird label:8;up:bird

```

See [static directory](static) folder for pieces and their corresponding labels.
