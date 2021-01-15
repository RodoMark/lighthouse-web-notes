class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  orderReceived() {
    console.log(
      `Order received. One ${this.size} ${
        this.crust
      } pizza with ${this.toppings.join(", ")} coming right up!`
    );
  }
}

const pizza1 = new Pizza("small", "deep dish");
const pizza2 = new Pizza("medium", "whole wheat");
const pizza3 = new Pizza("large", "thin");

pizza1.addTopping("mushrooms");
pizza2.addTopping("pepperoni");

const array = [pizza1, pizza2, pizza3];

for (const pizza of array) {
  pizza.orderReceived();
}
