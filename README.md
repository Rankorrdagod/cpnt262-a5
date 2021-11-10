# cpnt262-a5
- https://evancpnt262-a5.herokuapp.com/
- https://github.com/Rankorrdagod/cpnt262-a5

## Get requests
```js
https://evancpnt262-a5.herokuapp.com/api/locations
```
```js
https://evancpnt262-a5.herokuapp.com/api/locations/4
```
```js
https://evancpnt262-a5.herokuapp.com/whatever
```

## Issues
- For some reason having the schema and db code in different .js files isnt working, schema always comes back as undefined... going to try to add to api.js too see if it fixes it.
- Added everything to the api.js and it seemed to work! Going toplug along for now and see if anything else breaks.
- Have tried deploying to heroku a couple of times, compiles fine but then breaks, usually cannot find my files correctly.
- Heroku is trying to read an old path that doesnt even exist, cannot find ./models/Places.... not sure how to fix.
- Fixed it either through luck or black magic, or maybe it was whitelisting 0.0.0.0.0
- Lots of problems when troubleshooting heroku and mongoDB connections
- Forgot that I have to redeploy to make sure my changes are working on Heroku ie 404 page.
- Setting up keyframe animations, forgot how timers work...
- Trouble sorting out which .js file needs which requirements.


## Attributions
- [Image 1](https://pixabay.com/photos/city-buildings-architecture-towers-336708/)
- [Image 2](https://pixabay.com/photos/canal-venice-italy-water-river-1209808/)
- [Image 3](https://pixabay.com/photos/santorini-greece-buildings-houses-416136/)
- [Image 4](https://pixabay.com/photos/vaulted-cellar-tunnel-arches-keller-24739/)
- [Image 5](https://pixabay.com/photos/mosque-abu-dhabi-to-travel-white-615415/)
- [Image 6](https://pixabay.com/photos/street-architecture-city-road-3453557/) 
- [Image 7](https://pixabay.com/photos/palace-london-parliament-big-ben-530055/)
- [Image 8](https://pixabay.com/photos/greece-parthenon-temple-ruins-1594689/)
- [Image 9](https://pixabay.com/photos/pedestrians-crossing-traffic-1853552/)
- The Venerable [Tony Grimes](https://github.com/sait-wbdv/in-class/tree/main/cpnt262)
- [Icah Vega](https://github.com/Icahpv) for troubleshooting ideas, thank you.
- [Tech Endeavor](https://www.youtube.com/watch?v=DBFIp1kIqMs&ab_channel=TechEndeavor) Helping understand routes.
- [Web Dev Simplified](https://www.youtube.com/watch?v=fgTGADljAeg&ab_channel=WebDevSimplified) Working with express and mongoDB.
- [Mosh](https://www.youtube.com/watch?v=pKd0Rpw7O48&t=915s&ab_channel=ProgrammingwithMosh)