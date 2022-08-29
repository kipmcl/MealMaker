menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        let num = Math.floor(Math.random()*dishes.length);
        return dishes[num];
    },
    
    getRandomMeal()  {
        let appetizer = menu.getRandomDishFromCourse('appetizers');
        let main = menu.getRandomDishFromCourse('mains');
        let dessert = menu.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Your appetizer is ${appetizer['name']}, and your main plate is ${main['name']}, and the dessert is ${dessert['name']}, which comes to ${totalPrice} dollars.`
    }
}    

menu.addDishToCourse('appetizers', 'Onion Rings', 7);
menu.addDishToCourse('appetizers', 'Brunswick Stew', 9);
menu.addDishToCourse('appetizers', 'Corn Bread', 10);
menu.addDishToCourse('mains', 'Meat Loaf', 15);
menu.addDishToCourse('mains', 'Chicken and Waffles', 18);
menu.addDishToCourse('mains', 'Steak Tacos', 17);
menu.addDishToCourse('desserts', 'Apple Tart', 8);
menu.addDishToCourse('desserts', 'Lime Cheese Cake', 9);
menu.addDishToCourse('desserts', 'Salted Caramel Ice Cream', 9);

let meal = menu.getRandomMeal()
console.log(meal);
