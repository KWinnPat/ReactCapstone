const ShowCart = () => {
  return (
    <div>
      <h1>Cart</h1>
      <p>Items in your cart will be displayed here.</p>
    </div>
  );
};
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product, quantity = 1) {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
  }

  saveCart();
}

export default ShowCart;
export { addToCart };
