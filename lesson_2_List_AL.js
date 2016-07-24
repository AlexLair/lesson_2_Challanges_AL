var list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
var cart = [];

list.push('fruit loops');
list[4] = 'fair trade coffee';
list.splice(2,2,'rice','beans');

x = list.pop();
cart.push(x);

x = list.shift();
cart.push(x);

while (list.length > 0) {
  x=list.pop();
  cart.push(x)
}

cart.sort();
cart.reverse();

console.log(cart);
