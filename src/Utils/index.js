/**
 * This function calculates the total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price 
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach((product) => sum += product.price);
    sum = sum.toFixed(2);
    return sum;
}