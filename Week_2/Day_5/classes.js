class Pizza {
  constructor(size, crust) {
    this._size = size;
    this._crust = crust;
    this.toppings = ["cheese"];
    this.price;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  set size(size) {
    const sizes = ["small", "medium", "large"];
    if (sizes.includes(size)) {
      this._size = size;
    } else throw error;
  }

  set crust(crust) {
    this.crust = crust;
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 1;
    return basePrice + this.toppings.length * toppingPrice;
  }

  orderReceived() {
    console.log(
      `Order received. One ${this._size} ${
        this._crust
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

console.log(pizza1._size, pizza1._crust, pizza1.price);
