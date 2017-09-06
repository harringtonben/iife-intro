// let Something = (function(oldSomething) {
// 	const animals = ['cat', 'dog']
// 	oldSomething.niceFunction = function() {
// 		console.log('Im in a nice function')
// 	}

// 	return oldSomething;

// })(Something || {});

var SolarSystem = (function(oldSolarSystem) {
	const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
	const spaceCrafts = ["Millenium Falcon", "Starship Enterprise", "The Death Star", "X-Wing", "Tie Fighter", "Star Destroyer"];
	
	oldSolarSystem.getPlanets = function() {
		return planets;
	};

	oldSolarSystem.setPlanet = function(newPlanet) {
		planets.push(newPlanet);
	}

	oldSolarSystem.getSpaceCraft = function() {
		return spaceCrafts;
	}

	oldSolarSystem.setSpaceCraft = function(newSpaceCraft) {
		spaceCrafts.push(newSpaceCraft);
	}

	return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
console.log(myPlanets);
