module.exports = {
    development: {
        port: process.env.PORT || 3000,
        databaseURL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@softuni-4mwlq.gcp.mongodb.net/Cubes?retryWrites=true&w=majority`
    },
    production: {}
};