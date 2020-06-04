
const uniqid = require('uniqid');
const fs = require("fs");
const path = require("path");

const databasePath = "./config/database.json";
class Cube {
    constructor(name, description, imageURL, difficulty) {
        this.id = uniqid();
        this.name = name || "No Name";
        this.description = description;
        this.imageURL = imageURL;
        this.difficulty = difficulty || "0";
    }

    save() {
        const dataToAdd = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageURL: this.imageURL,
            difficulty: this.difficulty,
        };
        fs.readFile(databasePath, (err, data) => {
            if (err) {
                console.log(err);
            }
            const cubes = JSON.parse(data);
            
            cubes.push(dataToAdd);

            fs.writeFile(databasePath, JSON.stringify(cubes), (err) => {
                if (err) {
                    console.log(err)
                }
                console.log("Succesfully added");
            })
        });

    }

}
const newCube = new Cube("a", "malko", "w", "2");


module.exports = Cube;