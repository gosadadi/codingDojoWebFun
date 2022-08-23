function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
var deliciousPizza1 = pizzaOven("deep dish", "traditional", ["mozzarella", "Cheddar"], ["pepperoni", "sausage"]);
console.log(deliciousPizza1);
var deliciousPizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions", "tomatoes"]);
console.log(deliciousPizza2);
var deliciousPizza3 = pizzaOven("pan", "buffalo", ["Parmesan", "Classic mozzarella "], ["Mushrooms", "Onions", "Sausage", "Black Olives", "Pineapple"]);
console.log(deliciousPizza3);
var deliciousPizza4 = pizzaOven("Classic Crust", "barbecue", ["Gorgonzola", "Gorgonzola"], ["Green Peppers", "Pineapple", "chicken", "tomatoes", "onion"]);
console.log(deliciousPizza4);

