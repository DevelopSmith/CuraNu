var utilities = require('../utilities/utilities.js');

module.exports.getUser = function(req, res) {
	utilities.sendResJSON(res, 200, {
        notifications: [
            {
                content: 'HRM',
            },
            {
                content: 'Marketing & Communicatie',
            }
        ],
        user: {}
    });
}

