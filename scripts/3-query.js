// select *  from customers where _id = 'sanas'
db.customers.find({
    _id: "sanas"
});

// select * from customers where name = 'Sanas Febriyan'
db.customers.find({
    name: "Sanas Febriyan"
});

// select * from products where price = 2000
db.products.find({
    price: 2000
});

// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});