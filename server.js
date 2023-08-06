const express = require('express');
const bodyparser = require('body-parser');

let secret_key = "sk_test_51Nc4VSSC6xz6SA3OT47oUZbb41DzpkuQz4FKLQZsw8Xm0e1LblIB6fXBOGgtpn22yMTJWSHjRDHTm5E61ML8fFfY00rV2D95aY";
const stripe = require('stripe')(secret_key);

const app = express();

app.set("view engine","ejs");

let publishable_key = "pk_test_51Nc4VSSC6xz6SA3O2vQeOxHOcbYBTlkyzCNJLfa9yxWIGvBdLQE06tumnffu40FAegnbCQoOLDJ6WRA4Y3GFkbzb0042ElsUEn";

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//middleware bodyparser

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.render('Home',{
        key: publishable_key
    });
});

app.post("/payment", (req, res) => {
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Baleashvar'
    }).then((customer) => {
        return stripe.charges.create({
            amount: 7000,
            description: 'web development product',
            currency: 'USD',
            customer: customer.id
        });
    }).then((charge) => {
        res.send('Success');
    }).catch((err) => {
        res.send(err);
    }); // Add this closing bracket
});