const { User } = require('../models');

const userData = [
    {
        username: "haha",
        email: "martin_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "jeje",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    }
   
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;