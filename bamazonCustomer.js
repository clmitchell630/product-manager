var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "3Dpotatocode",
    database: "bamazon_db"
});

connection.connect((err) => {
    if (err) throw err;

    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.table(res);
        purchasePrompt();
    });

});


function purchasePrompt() {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the id of the item you would like to buy?",
            validate: (value) => {
                return !isNaN(value);
            }
        }, {
            name: "units",
            type: "input",
            message: "How many units of this product would you like to buy?",
            validate: (value) => {
                return !isNaN(value);
            }
        }
    ]).then((answer) => {

        connection.query(
            `SELECT * FROM products WHERE item_id=${answer.id}`,
            (err, res) => {
                if (err) throw err;

                console.table(res);

                if (answer.units <= res[0].stock_quantity) {

                    var maths = res[0].stock_quantity - answer.units;
                    var priceMaths = res[0].price * answer.units;
                    connection.query(
                        `UPDATE products SET ? WHERE ?`,
                        [
                            {
                                stock_quantity: maths
                            }, {
                                item_id: answer.id
                            }
                        ],
                        (err) => {
                            if (err) throw err;

                            console.log(`Purchasing ${answer.units} units of ${res[0].product_name} for $${priceMaths}! Thank you for your purchase!`);

                        }
                    );
                } else {
                    connection.end();
                    return console.log(`Insufficient quantity!`);
                    
                }

                connection.end();

            }
        );

    });
}