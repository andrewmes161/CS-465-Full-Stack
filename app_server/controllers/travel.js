const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET Traveler view */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
}

module.exports = {
    travel
};

// Module 5 update Part 2 //
// ---------------------- //

// const request = require('request');
// const apiOptions = {
//     server: 'http://localhost:3000'
// }

// /* render travel list view */ 
// const renderTravelList = (req, res, responseBody) => {
//     let message = null;
//     let pageTitle = process.env.npm_package_description + ' - Travel';

//     if (!(responseBody instanceof Array)) { // if not an array...
//         message = 'API lookup error';
//         responseBody = []; // set response body to empty array
//     } else {
//         if (!responseBody.length) { // if responseBody is empty
//             message = 'no trips exist in database!';
//         }
//     }
    
//     res.render('travel', {
//         title: pageTitle,
//         trips: responseBody,
//         message
//     });
// }

// /* GET travel list view */
// const travelList = (req, res) => {
//     const path = '/api/trips';
//     const requestOptions = {
//         url: `${apiOtions.server}${path}`, // these are '' rather `` found at the ~ key
//         method: 'GET',
//         json: {}
//     };

//     console.info('>> travelController.travelList calling ' + requestOptions.url);

//     request(
//         requestOptions,
//         (err, { statusCode }, body) => {
//             if (err) {
//                 console.error(err);
//             }
//             renderTravelList(req, res, body);
//         }
//     )
// }

// module.exports = {
//     travelList
// };