//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if(!formation.length) {
    return null;
  }
  return {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let result = []
  window.players.forEach((player) => {
    if(player.debut == year) {
      result.push(player)
    }
  })
  return result
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let result = []
  window.players.forEach((player) => {
    if(player.position == position) {
      result.push(player)
    }
  })
  return result
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let result = []
  window.players.forEach((player) => {
    player.awards.forEach((award) => {
      if(award.name == awardName) {
        result.push(player)
        return
      }
    })
  })
  return result
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let result = []
  window.players.forEach((player) => {
    count = 0
    player.awards.forEach((award) => {
      if(award.name == awardName) {
        count++
      }
    })
    if(count == noOfTimes) {
      result.push(player)
    }
  })
  return result
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let result = []
  window.players.forEach((player) => {
    if(player.country == country) {
      player.awards.forEach((award) => {
        if(award.name == awardName) {
          result.push(player)
          return
        }
      })      
    }
  })
  return result
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let result = []
  window.players.forEach((player) => {
    if(player.awards.length >= noOfAwards && player.team == team && player.age < age) {
      result.push(player)
    }
  })
  return result
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order