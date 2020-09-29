let baseURL = 'https://ergast.com/api/f1/driverStandings/1.json';
let limit = '?limit=100';
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

let winnerList = document.querySelector('.yearResults');


searchForm.addEventListener('submit',fetchResults);


fetch(baseURL+limit)  
.then(function(drivers){
    //console.log(drivers);
    return drivers.json();
}).then(function(json){
    console.log('driver:',json);
    displayOptions(json);
    fetchResults(json);
   });



function displayOptions(json){
    let year = json.MRData.StandingsTable.StandingsLists;
    let dropdown = document.getElementById('dropdown');
    console.log('n:', year);
    
    for (let i=0; i<year.length; i++) {
        option=document.createElement('option');
        option.innerHTML = year[i].season;
        option.value = year[i].season;
        dropdown.add(option);
    }console.log('morgan',year);
  return year;
};

//? if year = info, then show familyName + givenName

function fetchResults(json) {
    console.log('bench',json);
    let info = json.MRData.StandingsTable.StandingsLists;
    console.log('rose',info);
       
        for (let j=0; j<info.length; j++) {
            let standings = info[j].DriverStandings; 
            console.log(standings);
            
            for(let k=0; k<standings.length; k++){
                console.log(standings[k].Driver.familyName);
               
                let heading = document.createElement('p');
                heading.innerHTML=`${standings[k].Driver.givenName} ${standings[k].Driver.familyName}`;
                winnerList.appendChild(heading);      
                
                
                
            }

} 


}
// function displayResults(json){
//     let champion = standings;
//     console.log('rijo',champion);
//     if(year==info);{
       
//     };
// }

// //? 1952 = MRData.StandingsTable.StandingsLists[2].DriverStandings[1].Driver.familyName + givenName
