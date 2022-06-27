/*   STEP 1   */
export const leagueID = "785514233025708032"; // your league ID
export const leagueName = "Dotasource + rJ Dynasty Fantasy Football"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  { 
  "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Alex791",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Würzburg", // (optional)
     "bio": "",
     "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
       name: "Riebl", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 6813, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Stay young and healthy",
     "tradingScale": 4, // 1 - 10
     "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "muh",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Kalbe", // (optional)
     "bio": "",
     "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
       name: "Alle aus Division B", // Can be anything (usually your rival's name)
       link: null, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1264, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Win now, worry later",
     "tradingScale": 6, // 1 - 10
     "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "riebl",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Leipzig", // (optional)
     "bio": "",
     "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
       name: "Eric Ebron", // Can be anything (usually your rival's name)
       link: null, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1233, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Trash in regular, Beast in Play-Offs",
     "tradingScale": 6, // 1 - 10
     "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
  {
     "roster": 4,  // ID of the roster that the manager manages
     "name": "nimbodjuhal",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Dresden",
     "bio": "",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2018, // when did the manager start playing fantasy football
     "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "muh", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1233, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "look like trash in regular, liek a beast in play-offs",
     "tradingScale": 5, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
     {
     "roster": 5,  // ID of the roster that the manager manages
     "name": "Apo",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Königreich Bayern",
     "bio": "",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2017, // when did the manager start playing fantasy football
     "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Gary aus Pokemon", // Can be anything (usually your rival's name)
       link: null, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 6763, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "TE", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Wer nicht tradet gewinnt auch nix",
     "tradingScale": 10, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
     {
     "roster": 6,  // ID of the roster that the manager manages
     "name": "Nase",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Berlin",
     "bio": "",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2017, // when did the manager start playing fantasy football
     "favoriteTeam": "bal", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Rebuild", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Cam Akers' ACL", // Can be anything (usually your rival's name)
       link: null, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 947, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Bitte bleibt gesund!",
     "tradingScale": 5, // 1 - 10
     "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
     {
     "roster": 7,  // ID of the roster that the manager manages
     "name": "Benny",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Dresden",
     "bio": "",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "muh", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1233, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "look like trash in regular, liek a beast in play-offs",
     "tradingScale": 5, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
     {
     "roster": 8,  // ID of the roster that the manager manages
     "name": "libsh",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Recklinghausen",
     "bio": "",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2017, // when did the manager start playing fantasy football
     "favoriteTeam": "sea", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Apo", // Can be anything (usually your rival's name)
       link: 5, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1234, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Always on top!",
     "tradingScale": 10, // 1 - 10
     "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
     {
     "roster": 9,  // ID of the roster that the manager manages
     "name": "Amroth",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Nürnberg",
     "bio": "",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2016, // when did the manager start playing fantasy football
     "favoriteTeam": "ari", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Rebuild", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Benny um 1.01", // Can be anything (usually your rival's name)
       link: 7, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 2391, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Es kommt die Zeit, in der das wünschen wieder hilft",
     "tradingScale": 10, // 1 - 10
     "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
     {
     "roster": 10,  // ID of the roster that the manager manages
     "name": "Skryzer",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Leipzig",
     "bio": "sdf",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2015, // when did the manager start playing fantasy football
     "favoriteTeam": "sea", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "muh", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1233, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "look like trash in regular, liek a beast in play-offs",
     "tradingScale": 5, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
       {
     "roster": 11,  // ID of the roster that the manager manages
     "name": "Red",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Leipzig",
     "bio": "sdfsdf",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2015, // when did the manager start playing fantasy football
     "favoriteTeam": "sea", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "muh", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1233, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "look like trash in regular, liek a beast in play-offs",
     "tradingScale": 5, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
       {
     "roster": 12,  // ID of the roster that the manager manages
     "name": "Kabuki",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Wien",
     "bio": "",
     "photo": "/managers/question.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "bal", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Alex", // Can be anything (usually your rival's name)
       link: 1, // manager array number within this array, or null to link back to all managers page
       image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 80, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Stream every position",
     "tradingScale": 4, // 1 - 10
     "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
   },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
