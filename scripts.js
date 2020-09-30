let baseURL = 'https://ergast.com/api/f1/driverStandings/1.json';
let limit = '?limit=100';
let select = document.querySelector('select');
let winnerList = document.querySelector('.yearResults');

//let selecetdropdown = document.addEventListener('change', displayResult);


fetch(baseURL+limit)
.then(function(drivers){
    return drivers.json();
}).then(function(json) {
    displayOptions(json);
    fetchResults(json);
    //displayResults(json);
    console.log(json);
});

//Populates Dropdown begin
function displayOptions(json){
    let year = json.MRData.StandingsTable.StandingsLists;
    console.log(year);
    let dropdown = document.getElementById('dropdown');
    console.log('n:', year);
    
    for (let i=0; i<year.length; i++) {
        option=document.createElement('option');
        option.innerHTML = year[i].season;
        option.value = year[i].season;
        dropdown.add(option);
        console.log('year',year);
    };
     return year;
};
//Populate Dropdown end

function fetchResults(json){
    let info = json.MRData.StandingsTable.StandingsLists;
        console.log('davis:',info);
       

    for (let j=0; j<info.length; j++){
        let standings = info[j].DriverStandings;
        console.log(standings);
       

        for (let k=0; k<standings.length; k++){
            //console.log('votto',standings[k].Driver.givenName);
            let champion = standings[k].Driver;
            console.log('bauer',champion);
                      
            
            let heading = document.createElement('ul');
            
            heading.innerHTML=`${standings[k].Driver.givenName} ${standings[k].Driver.familyName} <br> ${standings[k].Driver.nationality}`;
            winnerList.appendChild(heading); 
    }
        }       

                }
               
// function displayResult(year){
//     if(option.value===year.season){
//                     let heading = document.createElement('ul');
//                     heading.innerHTML=`${standings[k].Driver.givenName} ${standings[k].Driver.familyName} <br> ${standings[k].Driver.nationality}`;
//              winnerList.appendChild(heading); 
//              }};
        

    


