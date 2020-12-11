loadRandomCountries = (url) => {
  let data = []
  //Hämta data och spara ner response värdet i första for-loopen 
  getData(url).then(res => {

    for (let i = 0; i < 3; i++) {
      let randomNr = Math.floor(Math.random() * res.length);
      data.push(res[randomNr]);
    }

    //Här loopar vi igen för "cherry picka" det vi vill 
    //använda och skicka det till vår constructor som vi sedan kan hämta 
    //olika functioner som finns i construktorn
    for (let i = 0; i < data.length; i++) {

      let c = new CountryRestAPI(data[i].timezones[0], data[i].name, data[i].flag);

      //Bygger upp layouten här.
      const main = document.querySelector('main');
      let section = document.createElement('section');
      let img = document.createElement('img');
      let h1 = document.createElement('h1');
      let h3 = document.createElement('h3');

      main.appendChild(section);

      section.appendChild(img);
      img.src = c.displayFlag();

      section.appendChild(h1);
      h1.textContent = c.displayName();

      section.appendChild(h3);
      h3.textContent = c.displayTime() + ':00';
    }
    //Hämtar ifall det blir error någonstans
  }).catch(error => console.error(error))
}

async function getData(url) {
  let response = await fetch(url);
  return await response.json()
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//Vår constructor
function CountryRestAPI(time, name, flag) {
  this.time = time
  this.flag = flag;
  this.name = name;
}

CountryRestAPI.prototype.displayName = function () {
  return this.name;
}

CountryRestAPI.prototype.displayFlag = function () {
  return this.flag;
}

CountryRestAPI.prototype.displayTime = function () {
  //Tiden här var nog drygast att bygga upp.. hämta tid (new Date()) och cherryPicka ut text från tiden och convertera den till number.
  let newTime = []
  let newDate = new Date();
  let time = addZero(newDate.getUTCHours())
  let cherryPick = this.time;

  if (cherryPick === 'UTC') {
    cherryPick = '+00'
    newTime.push(time, cherryPick);
  }
  else {
    let cherryPickHour = cherryPick.substr(3, 3);
    newTime.push(time, cherryPickHour);
  }

  let parseToNumber = parseInt(newTime[1])
  let convertToNewUTCTime = newTime[0] + parseToNumber;

  //Efter vi har byggt ihop allt då retunerar vi det tillbaka tiden men först ska vi omvandla exempel: 9 till 09 med hjälp av addZero 
  return addZero(convertToNewUTCTime);
}

// vår start funktion.
loadRandomCountries('https://restcountries.eu/rest/v2/all');