/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer){
    if (timer === undefined){
        return "You forgot to set the timer.";
    }
    if (timer === 0){
        return "Lasagna is done.";
    }
    else {
        return "Not done, please wait.";
    }
}

export function preparationTime(layers, timePerLayer){
    return layers.length * (timePerLayer ?? 2);
}

/**
 * 
 * @param {String[]} products 
 * @returns {Object}
 */
export function quantities(products){
    return {
        noodles: products.filter((value) => value === 'noodles').length * 50,
        sauce: products.filter((value) => value === 'sauce').length * 0.2
    }
}

/**
 * 
 * @param {String[]} friendsList 
 * @param {String[]} myList 
 */
export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1]);
}

/**
 * 
 * @param {Record<string, number>} recipe 
 * @param {number} portionCount 
 */
export function scaleRecipe(recipe, portionCount){
    return Object.keys(recipe).reduce((object, key) => { 
        object[key] = recipe[key] * portionCount / 2;
        return object;                                
    }, {})
}