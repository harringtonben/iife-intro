var SolarSystem = (function(oldSolarSystem) {
	const spaceCrafts = ["Millenium Falcon", "Starship Enterprise", "The Death Star", "X-Wing", "Tie Fighter", "Star Destroyer"];

	oldSolarSystem.getSpaceCraft = function() {
		return spaceCrafts;
	};

	oldSolarSystem.setSpaceCraft = function(newSpaceCraft) {
		spaceCrafts.push(newSpaceCraft);
	};

	return oldSolarSystem;
})(SolarSystem || {});
