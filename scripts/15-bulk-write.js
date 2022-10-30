db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "sanas",
                full_name: "Sanas"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "febriyan",
                full_name: "Febriyan"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["sanas", "febriyan", "hmos9c"]
                }
            },
            update: {
                $set: {
                    full_name: "Sanas Febriyan hmos9c"
                }
            }
        }
    }
])