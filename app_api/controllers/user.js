import {sendResJSON} from '../utilities/utilities';

export const getUser = (req, res) => {
	sendResJSON(res, 200, {
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

