const path = require('path');

module.exports = {
    // ... other webpack config options ...
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'app'),
        },
    },
};