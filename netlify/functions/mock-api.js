const data = require('../../public/db.json')

exports.handler = async (event, context) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.log(error)
    }
};