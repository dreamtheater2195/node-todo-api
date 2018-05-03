const { SHA256 } = require('crypto-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$kSa8ts5F76Hyzg8GxufW9Omb6BpOY75WZIDNQzAbBDLMxRUgCFSxa';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})
// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// const data = {
//     id: 4
// };

// const token = {
//     data,
//     hash = SHA256(JSON.stringify(data)).toString()
// }

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }