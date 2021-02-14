# Development notes

This is a translation of the airport challenge from week 1 into javascript.

## User stories:

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

## Developement notes:

* So as usual the first step is going to be setting up a test for the plane class
* Plane class added.
* All tests green
* Now to add an airport spec
* Add airport class
* Add spec for hangar property
* Pass spec for hangar
* Add test for landing a plane
* Add land plane function to airport
* All tests green
* Add spec for taking plane off
* Adding a take off function was much harder in javascript. Had to add a a 'name' property for planes. This is so you can actually match the plane passed into takeOff function with the plane in the array.
* All tests green.
* Add spec to ensure takeOff only removes the correct plane
* All tests green
* Add spec for maximum capacity for airport hangar
* Add maximum capacity in constructor{} for airport class
* All tests green
* Accidentally completed user story for overriding hangar capacity at the same time
* Add spec to ensure this is the case
* All tests green
* Now to add a weather class
* Weather class spec added
* weather class added
* All tests green
* Add isStormy? spec
* All tests green
* Add guard condition to land method so that planes can not land when it is stormy
* Add spec for takeOff to prevent takeOff when weather is stormy
