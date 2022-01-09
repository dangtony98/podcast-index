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
//     const SEARCH_TERM = 'historypod';
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

// get list of podcast categories
// (async () => {
//     // const SEARCH_TERM = 'historypod';
//     let data;
//     try {
//         data = await axios.get(
//             `https://api.podcastindex.org/api/1.0/categories/list?pretty`,
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
//     // console.log(data.data.feeds);
// })();

// search for specific podcast episodes matching ID
// (async () => {
//     const ID = 743229; // The Daily
//     const ID2 = 414307; // Martiak Update 1
//     const ID3 = 4258139; // Martiak Update 2
//     let data;
//     try {
//         data = await axios.get(
//             `https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=${ID2}&pretty`,
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
//     console.log(data.data.items.length);
//     console.log(data.data.items);
// })();

// search for specific podcast episodes matching feed URL
// (async () => {
//     const URL = 'https://martiakmarketupdate.libsyn.com/rss';
//     let data;
//     try {
//         data = await axios.get(
//             `https://api.podcastindex.org/api/1.0/episodes/byfeedurl?url=${URL}&pretty`,
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
//     console.log(data);
//     console.log(data.data.items)
// })();

// search for specific podcast matching ID
// (async () => {
//     const ID = 743229; // The Daily
//     let data;
//     try {
//         data = await axios.get(
//             `https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=${ID}&pretty`,
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
//     console.log(data); // check by feed?.id if exists
// })();

// get recent feeds
// (async () => {
//     let data;
//     try {
//         data = await axios.get(
//             `https://api.podcastindex.org/api/1.0/recent/episodes?max=7&pretty`,
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
//     console.log(data.data.items); // check by feed?.id if exists
// })();