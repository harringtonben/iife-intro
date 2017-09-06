var SolarSystem = (function(oldSolarSystem) {
	const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
	
	oldSolarSystem.getPlanets = function() {
		return planets;
	};

	oldSolarSystem.setPlanet = function(newPlanet) {
		planets.push(newPlanet);
	};

	return oldSolarSystem;
})(SolarSystem || {});

