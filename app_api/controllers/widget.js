var utilities = require('../utilities/utilities.js');

module.exports.getWidgets = function(req, res) {
	utilities.sendResJSON(res, 200, {
        groups: [
            {
                title: 'HRM',
                link: 'http://example.com',
                logo: 'images/group-01.png'
            },
            {
                title: 'Marketing & Communicatie',
                link: 'http://example.com',
                logo: 'images/group-02.png'
            }
        ],
        news: [
            {
                thumb: 'images/thumb_01.png',
                date: '29/02/2016',
                title: 'Zorgmarathon',
                likes: 0
            },
            {
                thumb: 'images/thumb_02.png',
                date: '29/02/2016',
                title: 'VIO erkend als theoretisch goed',
                likes: 4
            },
            {
                thumb: 'images/thumb_03.png',
                date: '29/02/2016',
                title: 'Commissiebrief over nieuws Wiz',
                likes: 0
            },
        ],
        events: [
            {
                title: 'Zorgmarathon',
                date: '10/12/2016',
            },
            {
                title: 'Beurs',
                date: '12/12/2016',
            },
            {
                title: 'Onze zorgevenement',
                date: '30/12/2016',
            }
        ],
        qualityManual: [
            {
                title: 'Klachtenprocedure',
                date: '18-04-2016',
            },
            {
                title: 'Periodieke test gebruikersgroepen',
                date: '10-02-2016',
            },
            {
                title: 'Dienstrichtlijn tweede niveau',
                date: '09-05-2015',
            }
        ],
        myLinks: [
            {
                url: 'http://zorggroep.nl',
                title: 'zorggroep.nl',
            },
            {
                url: 'http://zorgvisie.com',
                title: 'zorgvisie',
            },
            {
                url: 'http://medicalfacts.nl',
                title: 'medicalfacts.nl',
            }
        ],
        directLinks: [
            {
                title: 'Youforce',
                link: 'http://example.com',
                logo: 'images/site-01.png'
            },
            {
                title: 'MIP-meldingen',
                link: 'http://example.com',
                logo: 'images/site-02.png'
            },
            {
                title: 'Topdesk',
                link: 'http://example.com',
                logo: 'images/site-03.png'
            },
        ],
        blog: {
            avatar: 'images/author-01.png',
            author: 'Jacob Cobijn',
            date: '12/04/2016',
            likes: 0,
            comments: 3
    
        }		
    });
}

