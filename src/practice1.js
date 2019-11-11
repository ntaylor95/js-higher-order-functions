const globalVars = require('./global');

const pickIngredients = (isVegan) => {
    const { ingredients } = globalVars;

    const tacoIngredients = ingredients.filter(function (ingredient) {
        if (isVegan === true) {
            return (ingredient.isVegan);
        }

        return true;
    });

    return tacoIngredients;
}

console.log(`Taco Ingredients for a Vegan Taco are`);
console.log(pickIngredients(true));

console.log(`Taco Ingredients for an All out awesome Taco are`);
console.log(pickIngredients(false));