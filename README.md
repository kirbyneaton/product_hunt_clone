# Product Fish
Product Fish is a single page app clone of Product Hunt--a site that curates a listing of hot new tech products from growing startups. In Product Fish, however, the users are bears and the products are fish. Product Fish was built using React, Redux, and Ruby on Rails.

[Live Site](https://product-fish.herokuapp.com/#/)

# Products
In Product Fish, the "products" are fish, each with a title, subtitle, description, and image. The homepage of the site is primarily the products index page, where users can view all products, regardless of whether they are logged in or not. Upon, clicking an individual product, the product show page opens in a modal, allowing for an in-depth look at the particular fish without having to navigate away from the homepage--creating a frictionless user experience. The Modal is rendered by updating the "ui" slice of state with a key value that corresponds to the product id (e.g., for Product 1, state would be: ui: {modal: 1}). When the modal is closed, state is updated to {modal: null}.

# Users
In Product Fish, the users are bears (presumably searching for a tasty fish). The sign up/sign in buttons in the nav bar also present the user with a modal similar to the product show modal, however, this time the modal points to "Login" rather than the value of the product id.

# Product Discussion (Comments)
Comments are associated with each individual product and render only in that product's show page. State is updated to include the comments only when the product modal is open, fetching all the comments associated with that particual product.

# Future Directions
- Add search for users/products
- Integrate AWS to store user and product images
- Add likes for products
