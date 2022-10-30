// membuat wildcard index
db.customers.createIndex({
    "customFields.$**" : 1
});

// Insert many customers
db.customers.insertMany([
    {
        _id: "akmal",
        full_name: "Akmal",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "ardi",
        full_name: "Ardi",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "alwin",
        full_name: "Alwin",
        customFields: {
            motherName: "Tini",
            passion: "Entepreneur"
        }
    }
])

// Debug wildcard index
db.customers.find({
    "customFields.passion": "Enterpreneur"
}).explain();
db.customers.find({
    "customFields.ipk": 3.2
}).explain();
db.customers.find({
    "customFields.hobby": "Gaming"
}).explain();