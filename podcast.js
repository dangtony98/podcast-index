const axios = require('axios');
require('dotenv').config();
var crypto = require('crypto');

// ======== Hash them to get the Authorization token ======== 
var apiHeaderTime = Math.floor(Date.now()/1000);
var sha1Algorithm = "sha1"; 
var sha1Hash = crypto.createHash(sha1Algorithm);
var data4Hash = process.env.API_KEY + process.env.API_SECRET + apiHeaderTime.toString();
sha1Hash.update(data4Hash); 
var hash4Header = sha1Hash.digest('hex'); 

// arbitrary search
// (async () => {
//     const SEARCH_TERM = 'daily';
//     let data;
//     try {
//         data = await axios.get(
//             `https://api.podcastindex.org/api/1.0/search/byterm?q=${SEARCH_TERM}`,
//             {
//               headers: {
//                 "User-Agent": `Auledge/1.8.7`,
//                 "X-Auth-Key": process.env.API_KEY,
//                 "X-Auth-Date": apiHeaderTime,
//                 "Authorization": hash4Header
//               },
//             }
//           );
//     } catch (err) {
//         console.log(err);
//     }
    
//     console.log('data');
//     console.log(data.data.feeds);
// })();

// search for specific podcast matching ID
(async () => {
    const ID = 743229; // The Daily
    let data;
    try {
        data = await axios.get(
            `https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=${ID}&pretty`,
            {
              headers: {
                "User-Agent": `Auledge/1.8.7`,
                "X-Auth-Key": process.env.API_KEY,
                "X-Auth-Date": apiHeaderTime,
                "Authorization": hash4Header
              },
            }
          );
    } catch (err) {
        console.log(err);
    }
    
    // console.log('data');
    // console.log(data.data.items);
})();