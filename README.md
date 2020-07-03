<h1>React Ecommerce Platform</h1>

<i>28/6/2020</i>

A react application I'm building, that is going to be a functioning ecommerce platform.

I'm planning on implementing features for adding to cart, deleting from cart, registering and logging in new users as well as making use of the stripe api to handle payments.

<i>30/6/2020</i>

Now done with the basic layout, routing and product pages. I still need to fix minor routing issues with React Router (mostly experimenting with the 'exact'-attribute). Now I need to set up authentication with Firebase, as well as finishing a shopping cart-component, and Stripe API.


<i>1/7/2020</i>

Sign-in logic and styling done, as well as reusable form and button-components. Still need a shopping cart, individual product page, register component as well as the stripe api and firebase authentication

<i>1/7/2020</i>

All of authentication and database management with firebase is done. Users are now able to sign up with google, or email and password, as well as signing in with either email and password, or google. Added components to accomodate for everything. 

Contemplating on wether or not I should use Redux.

<i>2/7/2020</i>

Added redux, as I had som prop-drilling in the application. Seemed like the most logical choice at the time, but regretted it for a short while, as I forgot how much of a pain setting up redux is. Added first reducers for current-user-management, as well as redirecting. If a current user exists in our state (not null), the user gets redirected if they try to access the /signin route. Still, I think it will make state management easier in the long run, as i still have more state-dependent components to add. 

<i>2/7/2020</i>

Now added a shopping cart, as well as conditional rendering based on the hidden-property of the state of cart component. Also added a cart-reducer.

<i>3/7/2020</i>

Starting the morning with adding a new action-type in my cart reducer, so that the cart, in addition to knowing wether it is hidden or not, has an array with items that we add to cart. Added a new property to it as well, so that if an item (searched by id) already exist in the cart-items array, we update the quantity of it, instead of adding it as a new index entry in the array.


<i>3/7/2020</i>

Added the reselect library to enhance performance, no need for redux to rerender everything when unrelated props change. implemented it for the cart, so that it does not have to rerender if the user logs in, or anything else for that matter. 

<i>3/7/2020</i>

Added a component that renders each item in the cart-item array inside of the cart on our page. Added a checkout page that renders all of the cart items, as well as a total amount. Changed all of the state and prop functions in redux to use the reselect library. Refactored some things here and there. 

Debugged a lot as well, and made a mental note of checking style-compability across browsers before checking it off my todo list. 
