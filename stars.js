var SolarSystem = (function(oldSolarSystem) {
	const constellations = ["Orion's Belt", "Big Dipper", "Little Dipper"];

	oldSolarSystem.getConstellations = function() {
		return constellations;
	};

	oldSolarSystem.setConstellations = function(newConstellation) {
		constellations.push(newConstellation);
	};

	oldSolarSystem.constipatedConstellations = function(newSpaceCraft) {
		alert(`You're as backed up as the ${constellations[1]}`)
	};

	return oldSolarSystem;
})(SolarSystem || {});