# 1z8-server
Server build with express and typescript based on socket.io package

# Usage
The app is build to work with `1z8-front` and `1z8-gmpanel` projects.

Following command will start the server
```bash
npm run start
```
Server is created on port 3000.

## Setting up contestants list
Contestants list is a variable that will be modified and transmitted during usage of the apps.

To create a new 

## Listening for and emiting events
The app both listens for events that are send from `1z8-gmpanel`. These are events that will change the state of `contestants`.

List of events:
* `points` - receives `{id: number, score: number}` object. `id` corresponds to a `contestant` and `score` is a number by which should `contestant.score` should be modified. Used in gaining and deducting points.
* `setLife` - receives `{id: number, lives: number}` object. Works in the same way as `points`, but modifies `contestans.lives`.