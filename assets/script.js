let products;
let totalPaid = 0;
let remainingBalance = 0;
let cart = [];

let product1 = 
{
  name: "Cherry",
  price: 1,
  quantity: 0,
  productId: 100,
  image: "images/cherry.jpg"
};
let product2 = 
{
  name: "Orange",
  price: 3,
  quantity: 0,
  productId: 200,
  image: "images/orange.jpg"
};
let product3 = 
{
  name: "Strawberry",
  price: 2,
  quantity: 0,
  productId: 300,
  image: "images/strawberry.jpg"
};

products = [product1, product2, product3];

//add a product to the cart function
function addProductToCart(id)
{
  for(let i = 0;i < products.length;i++)
  {
    if(products[i].productId === id)
    {
      if(products[i].quantity === 0)
      {
      cart.push(products[i]);
      products[i].quantity++;
      }
      else
      {
      products[i].quantity++;
      }
      break;
    }
  }
}
//inceasing the quantity of a product in the cart
function increaseQuantity(id)
{
  for(let i = 0;i<cart.length;i++)
  {
    if(cart[i].productId === id)
    {
      cart[i].quantity++;
      break;
    }
  }
}
//decreasing the quantity of a product in the cart
function decreaseQuantity(id)
{
  for(let i = 0;i < cart.length;i++)
  {
    if(cart[i].productId===id)
    {
      cart[i].quantity--;
      if(cart[i].quantity === 0)
      {
        cart.splice(i,1);
      }
      break;
    }
  }
}
//removing a product from the cart
function removeProductFromCart(id)
{
  for(let i = 0;i < cart.length;i++)
  {
    if(cart[i].productId === id)
    {
      cart[i].quantity = 0
      cart.splice(i,1);
      break;
    }
  }
}
//finding the total price of products in cart
function cartTotal(){
  let sum = 0;
  for(let i = 0;i < cart.length;i++)
  {
    sum = sum + (cart[i].price * cart[i].quantity);
  }
  return sum;
}
//to empty the cart from products
function emptyCart()
{
  for(let i = 0;i < cart.length;i++)
  {
    cart[i].quantity = 0;
  }
  cart = [];
}
//to calculate the remaing money
function pay(money) 
{
  let cashRetuned = 0;
  totalPaid += money;
  remainingBalance = totalPaid - cartTotal();
  if(totalPaid < cartTotal())
  {
    return remainingBalance;
  }
  else
  {
    cashRetuned = totalPaid - cartTotal();
    totalPaid = 0;
    emptyCart();
    return cashRetuned;
  }
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}