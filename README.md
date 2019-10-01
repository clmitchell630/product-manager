# Bamazon!

This app utilizes CLI, Node.js, and mySQL to allow the user to view a list of available items, select which one they'd like to 'purchase', and select the quantity they'd like. Doing so will let the user know the quantity of the item they 'purchased' and the total price of the transaction.

## The app and how it works

As mentioned above, Bamazon utilizes CLI, Node.js, and mySQL as well as the mysql and inquirer node packages.

When the app is launched, it will display the items available for sale and ask you two questions:

*   What is the id of the item you would like to buy?
*   & How many units of this product would you like to buy?

First, select the id of the item you would like to purchase. The app will allow you to purchase from that stock. Then, select the amount of units you would like to buy. After answering these two questions, the app will tell you how many units of the item you bought and the total cost of your purchase.

The database will update with the new stock amount for that item.

## Watch the demo video!

[bamazon app demo video](https://youtu.be/vHZxqrzQhx4)

## How to use

1.  Start by entering the following arguments in the command line.
    ```
    node bamazonCustomer.js
    ```
    -   This will start the app and show you a table with all of the available items for purchase. 


![alt text](./images/launch.png "app at launch")


2.  Bamazon will ask two questions:
    1.  What is the item you would like to buy?
        -   Answer with a number that corresponds with the item_id of the item you would like to purchase.
    2.  After answering the above question, the app will ask, How many units of this product would you like to buy?
        -   Answer with the number that you would like to purchase.


![alt text](./images/questions.png "app questions")


3.  After answering the two questions, Bamazon will display what you have purchased.


![alt text](./images/purchased.png "app questions")