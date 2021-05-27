const { User } = require('../models');

const userData = [
    {
        username: 'ItsEvdok',
        email: 'filler@gmail.com',
        password: 'Tinklywinkly'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;