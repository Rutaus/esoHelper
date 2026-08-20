
// ==============================
//  Pots and foods functions: 
// ==============================

// for the category buttons:

// buttons vars:
const foodButton = document.getElementById("food-button");
const drinkButton = document.getElementById("drink-button");
const potionButton = document.getElementById("potion-button");
// the section they represents vats:
const foodSection = document.getElementById("food-section");
const drinkSection = document.getElementById("drink-section");
const potionSection = document.getElementById("potion-section");

// food button function:
foodButton.addEventListener("click", function () {
    hideAllRecipeResults();
    foodSection.classList.remove("d-none");
    drinkSection.classList.add("d-none");
    potionSection.classList.add("d-none");

});

// drink button function:
drinkButton.addEventListener("click", function () {
    hideAllRecipeResults();
    foodSection.classList.add("d-none");
    drinkSection.classList.remove("d-none");
    potionSection.classList.add("d-none");

});

// potion button function:
potionButton.addEventListener("click", function () {
    hideAllRecipeResults();
    foodSection.classList.add("d-none");
    drinkSection.classList.add("d-none");
    potionSection.classList.remove("d-none");

});

// for the foods buttons:

// button vars:
const lavaFootButton = document.getElementById("lava-foot-button");
const jewelsButton = document.getElementById("jewels-button");
const artaeumButton = document.getElementById("artaeum-button");
const sugarSkullsButton = document.getElementById("sugar-skulls-button");
// the food they represents vars:
const recipeResult = document.getElementById("recipe-result");
const jewelsResult = document.getElementById("jewels-result");
const artaeumResult = document.getElementById("artaeum-result");
const sugarSkullsResult = document.getElementById("sugar-skulls-result");

//  hide all category results:
function hideAllRecipeResults() {
    // Food
    recipeResult.classList.add("d-none");
    jewelsResult.classList.add("d-none");
    artaeumResult.classList.add("d-none");
    sugarSkullsResult.classList.add("d-none");
    // Drinks
    ghastlyResult.classList.add("d-none");
    dubiousResult.classList.add("d-none");
    witchmotherResult.classList.add("d-none");
    // Potions
    essenceHealthResult.classList.add("d-none");
    essenceWeaponPowerResult.classList.add("d-none");
    essenceSpellPowerResult.classList.add("d-none");
    essenceHealth2Result.classList.add("d-none");
    essenceImmovabilityResult.classList.add("d-none");
}

// lava foot function:
lavaFootButton.addEventListener("click", function () {
    hideAllRecipeResults();
    recipeResult.classList.remove("d-none");
});

// jewels of misrule function:
jewelsButton.addEventListener("click", function () {
    hideAllRecipeResults();
    jewelsResult.classList.remove("d-none");
});

// artaeum pickled fish bowls function:
artaeumButton.addEventListener("click", function () {
    hideAllRecipeResults();
    artaeumResult.classList.remove("d-none");
});

// bewitched sugar skulls function:
sugarSkullsButton.addEventListener("click", function () {
    hideAllRecipeResults();
    sugarSkullsResult.classList.remove("d-none");
});

// for the drinks buttons:

// button vars:
const ghastlyButton = document.getElementById("ghastly-button");
const dubiousButton = document.getElementById("dubious-button");
const witchmotherButton = document.getElementById("witchmother-button");
// the drinks they represent vars:
const ghastlyResult = document.getElementById("ghastly-result");
const dubiousResult = document.getElementById("dubious-result");
const witchmotherResult = document.getElementById("witchmother-result");

// Ghastly Eye Bowl function:
ghastlyButton.addEventListener("click", function () {
    hideAllRecipeResults();
    ghastlyResult.classList.remove("d-none");
});

// Dubious Camoran Throne function:
dubiousButton.addEventListener("click", function () {
    hideAllRecipeResults();
    dubiousResult.classList.remove("d-none");
});

// Witchmother's Potent Brew function:
witchmotherButton.addEventListener("click", function () {
    hideAllRecipeResults();
    witchmotherResult.classList.remove("d-none");
});

// for the potions buttons:

// button vars:
const essenceHealthButton = document.getElementById("essence-health-button");
const essenceWeaponPowerButton = document.getElementById("essence-weapon-power-button");
const essenceSpellPowerButton = document.getElementById("essence-spell-power-button");
const essenceHealth2Button = document.getElementById("essence-health-2-button");
const essenceImmovabilityButton = document.getElementById("essence-immovability-button");


// the potions they represent vars:
const essenceHealthResult = document.getElementById("essence-health-result");
const essenceWeaponPowerResult = document.getElementById("essence-weapon-power-result");
const essenceSpellPowerResult = document.getElementById("essence-spell-power-result");
const essenceHealth2Result = document.getElementById("essence-health-2-result");
const essenceImmovabilityResult = document.getElementById("essence-immovability-result");


// Essence of Health function:
essenceHealthButton.addEventListener("click", function () {
    hideAllRecipeResults();
    essenceHealthResult.classList.remove("d-none");
});

// Essence of Weapon Power function:
essenceWeaponPowerButton.addEventListener("click", function () {
    hideAllRecipeResults();
    essenceWeaponPowerResult.classList.remove("d-none");
});

// Essence of Spell Power function:
essenceSpellPowerButton.addEventListener("click", function () {
    hideAllRecipeResults();
    essenceSpellPowerResult.classList.remove("d-none");
});

// Essence Health function:
essenceHealth2Button.addEventListener("click", function () {
    hideAllRecipeResults();
    essenceHealth2Result.classList.remove("d-none");
});

// Essence Immovability function:
essenceImmovabilityButton.addEventListener("click", function () {
    hideAllRecipeResults();
    essenceImmovabilityResult.classList.remove("d-none");
});