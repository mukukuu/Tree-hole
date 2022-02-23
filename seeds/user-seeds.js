const { User } = require('../models');

const userData = [
    {
        username: "haha",
        email: "haha@gmail.com",
        password: "password1"
    },
    {
        username: "jeje",
        email: "jeje@gmail.com",
        password: "password1"
    }
   
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;