const postcssjitprops = require
("postcss-jit-props"); 

module.exports = {
    plugins: [
        postcssjitprops(OpenProps),
        require('autoprfixer')
    ]
};