<h1>React Ecommerce Platform</h1>

<b>It is now live over on http://maciejclothing.herokuapp.com/shop</b>

It's been a long week of hair-pulling and coffee drinking, but the project is now live on heroku! This is a first version of it, and i will most likely continue working on it, until I'm happy with it myself. 

Some focus areas are the styling, as well as maybe trying out hooks, haven't worked that much with them yet.

Read down below for the devlog.


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


<i>3/7/2020</i>

Final update of the day! Managed to include functionality for dynamically adding and removing items to the cart directly from the checkout page. The application is starting to come together nicely now. 

Think i will work on the nested routing of the different categories in in the shop (/shop/mens shows all of the items with type mens, etc..) tomorrow.

<i>4/7/2020</i>

Added redux-persist, so that our users dont't lose the things they have in their cart if they refresh or accidentaly close the tab. 

I only whitelisted the cart object in our state to be stored, as the current-user-session is handled directly by firebase. 


<i>4/7/2020</i>

Now added nested routing, so with individual category pages, that render based on the key in the data-object (hats goes to hats, etc..)

Moved the data out of the component and into the reducers for cleanliness sake. 

Way more work than these two paragraphs above show, as I ripped my hair out for half an hour, because I tried to map over an object. All solved itself when i added a new selector for the collection items, that uses the Object.keys() method, and managed to map as before based on that.


<i>4/7/2020</i>

Could call it complete now! Integrated stripe, as well as a stripe-checkout component. Changed title of the page. Ready to deploy.

<i>6/7/2020</i>

Uploaded shop data to firebase, preparing to storing it there and fetching asynchronously, instead of statically storing it in our application. Better for scalability, as well as it better reflects on a realistic scenario. 

<i>7/7/2020</i>

Now moved all of the data out of the application and over to firebase. As the initital state was static, I did not have to worry about it until i removed it completely from the application. This gave me some headache, as I  had to convert my reducers to work asynchronously, something that went alrigt. 

Added a higher-order-component that checks wether or not the data has come back from firestore yet, and displays a spinner until it does. 

Gave me some good practice with higher order components, but now have to put the asynchronous state in redux. 

<i>7/7/2020</i>

Finished all of the async api calls with redux thunk.  Need to work more with both redux and redux thunk, can make it work, but dont't quite master it yet to the point where I can say I am 100% comfortable with it. 


<i>8/7/2020</i>

Did a big review of the codebase today, noticed some things. 


1. Need to tweak the styling to better suit mobile users. Ditch pixel-values for percentages and vw/vh-values.
2. Need to clear the cart after payments are processed.
3. Need to redirect users to a thank you-page after when we get the confirmation token from stripe.
4. Need to remove the redux-logger from the production app.

Will work on fixing these, as well as some other projects this week. 


<i>12/7/2020</i>

Home from vacation now! Started off by updating the styling to be mobile responsive. 

Now need to make the thank-you page, as well as clearing the cart after the token comes back from stripe. 