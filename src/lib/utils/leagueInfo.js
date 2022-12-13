/*   STEP 1   */
export const leagueID = "786635113353039872"; // your league ID
export const leagueName = "Mainzer Dynasty League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Gegründet im Jahre 2016 als eine 6-Team League mit den Gründungsmitgliedern Chris, Bö, Maggi, Ecki, Hembes und Marcus. Zuerst waren wir auf der Plattform ESPN vertreten. Dort spielten wir bis 2019, als schließlich der Wechsel auf die Plattform Sleeper vollzogen wurde.</p>
  <p>Jedes Jahr wettstreiten die Manager um den begehrten Pokal unserer Liga zu erhalten und natürlich um den Toiletten-Pokal zu verhindern.</p>
  <p>Im Jahr 2017 erweiterte sich die Liga durch die Aufnahme von Mehrfeld und Lars auf eine 8-Team League. Und direkt im Jahr 2018 durch die neuen Mitglieder David Schwarz und Nico auf eine 10-Team League.</p>
  <p>Erst im Jahr 2021 wurden wir dann zu einer 12-Team League. Die neuen Manager waren Marten und Janosch. Leider verließ uns Lars nach dieser Saison und wir nahmen 2022 Manu in unsere Mitte auf. </p>
  <p>Jedes Jahr wettstreiten die Manager um den begehrten Pokal unserer Liga zu erhalten und natürlich um den Toiletten-Pokal zu verhindern</p>
  <p>Viele Manager begannen ihre Karriere mit überraschenden Siegen und Platzierungen, viele warten bis heute noch auf den große Coup. Viele Manager haben große Siege geholt, andere wirklich peinliche Punktausbeuten - häufig gezeichnet durch große Verletzungssorgen.</p>
  <p>Aber man merkt jedem von uns an, dieses Spiel ernst zu nehmen und ein Teil seines Privatlebens dafür jeden Tag zu opfern.</p>
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
       "name": "DopieDopeMan",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
   //    "bio": "Seit Anfang an dabei. Eines der Gründungsmitglieder und der Gott-Commissioner.",
       "photo": "/managers/Marcus.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Chris", // Can be anything (usually your rival's name)
   //      link: 1, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/Chris.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
       "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Glück ist alles.",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "chrizinger",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
       "bio": "Entweder Finale oder Loser",
       "photo": "/managers/Chris.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Maggi", // Can be anything (usually your rival's name)
  //       link: 4, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/Maggi.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
       "favoritePlayer": 947, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Stay Water",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "bronconick72",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
       "photo": "/managers/Niko.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
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
    //   "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
   {
       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "biggmag",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
       "bio": "Back-to-back Sieger der Liga Jeden verdammten Sonntag im Fantasy Football",
       "photo": "/managers/Maggi.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
 //     "mode": "last", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
 //      "rival": {
 //        name: "Chris", // Can be anything (usually your rival's name)
 //        link: 1, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/Chris.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
       "favoritePlayer": 4663, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Ich spiele um zu gewinnen", // (optional)
       "tradingScale": 4, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
   {
       "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "David247",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
    //   "bio": "Lorem ipsum...",
       "photo": "/managers/David M.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
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
    //   "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
   {
       "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Cheesehead32",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
    //   "bio": "Unterschätzter Underdog, der den Pokal fest im Blick hat. Egal, welchen!",
    //   "photo": "/managers/David S.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
     //    name: "Marcus", // Can be anything (usually your rival's name)
     //    link: 0, // manager array number within this array, or null to link back to all managers page
     //    image: "/managers/Marcus.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
       "favoritePlayer": 4098, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Man kann nie genug Defenses haben!", // (optional)
       "tradingScale": 6, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
   {
       "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "ChopBlockPukki",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/Manu.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
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
    //   "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  {
       "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "boesen",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Wiesbaden", // (optional)
       "bio": "GOAT",
       "photo": "/managers/Boe.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
 //      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Alle", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Alles geht, nix muss.", // (optional)
       "tradingScale": 4, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
   {
       "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "TeamBayPackers",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Waldalgesheim", // (optional)
    //   "bio": "Lorem ipsum...",
       "photo": "/managers/Hembes.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
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
    //   "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ecki",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
  //     "bio": "Back-to-back Sieger der Liga Jeden verdammten Sonntag im Fantasy Football",
       "photo": "/managers/Ecki.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "12", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Chris", // Can be anything (usually your rival's name)
  //       link: 1, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/Chris.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
 //      },
 //      "favoritePlayer": 4663, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Ich spiele um zu gewinnen",
   //    "tradingScale": 4, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
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
