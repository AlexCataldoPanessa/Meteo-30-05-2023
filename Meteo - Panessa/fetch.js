let jsonData = {};

fetch('https://api.open-meteo.com/v1/forecast?latitude=45.07&longitude=7.69&current_weather=true&hourly=weathercode&timezone=CET&daily=weathercode')
  .then(response => response.json())
  .then(json => {

    tempoCorrente = json.current_weather;
    giorno = json.daily;

    mostraTempo(tempoCorrente);
    mostraGiorno(giorno);
    mostraTempoFuturo(giorno);
    mostraGiornoFuturo(giorno);


  })




function mostraTempo(tempoCorrente) {
  let contenitore = document.getElementById("contenitoreTempo");


  let p = document.createElement("p");
  p.className = "tempo";

  switch (tempoCorrente.weathercode) {
    case 0:
      p.className += " wi wi-day-sunny";
      break;

    case 1:
    case 2:
    case 3:
      p.className += " wi wi-day-cloudy";
      break;

    case 45:
    case 48:
      p.className += " wi wi-day-fog";
      break;

    case 51:
    case 53:
    case 55:
      p.className += " wi wi-raindrops";
      break;

    case 56:
    case 57:
      p.className += " wi wi-day-rain-mix";
      break;

    case 61:
    case 63:
    case 65:
      p.className += " wi wi-day-rain";
      break;

    case 66:
    case 67:
      p.className += " wi wi-day-sleet";
      break;

    case 71:
    case 73:
    case 75:
      p.className += " wi wi-day-snow";
      break;

    case 77:
      p.className += " wi wi-stars";
      break;

    case 80:
    case 81:
    case 82:
      p.className += " wi wi-day-showers";
      break;

    case 85:
    case 86:
      p.className += " wi wi-day-snow-wind";
      break;

    case 95:
      p.className += " wi wi-day-snow-thunderstorm";
      break;

    case 96:
    case 99:
      p.className += " wi wi-day-thunderstorm";
      break;

    default:
      p.className += " wi wi-day-sunny";
  }
  contenitore.appendChild(p);

}


function mostraGiorno(giorno) {
  let contenitore = document.getElementById("contenitoreTempo");
  let h5 = document.createElement("h5");
  let invertiData = giorno.time[0].split('-').reverse().join('/');

  h5.className = "giornoHtml"

  h5.innerHTML = invertiData;
  contenitore.appendChild(h5);

}

function mostraGiornoFuturo(giorno) {
  let contatore = 1;


  for (dataCompleta of giorno.time) {

    let contenitore = document.getElementById("contenitoreTempoFuturo" + contatore);
    console.log(contenitore);
    let h5 = document.createElement("h5");
    let invertiData = giorno.time[contatore].split('-').reverse().join('/');

    h5.className = "giornoHtml" + contatore
    let pId = document.getElementById("giornoHtml" + contatore);
    pId.appendChild(h5);
    
    contatore++;
  }

}


function mostraTempoFuturo(giorno) {
  
  let cont = 1;
  let contenitore = document.getElementById("contenitoreTempoFuturo"+cont);




  for (code of giorno.weathercode) {
    let p = document.createElement("p");

    
    p.className = "tempoFuturo" + cont;

    switch (code) {
      case 0:
        p.className += " wi wi-day-sunny";
        break;

      case 1:
      case 2:
      case 3:
        p.className += " wi wi-day-cloudy";
        break;

      case 45:
      case 48:
        p.className += " wi wi-day-fog";
        break;

      case 51:
      case 53:
      case 55:
        p.className += " wi wi-raindrops";
        break;

      case 56:
      case 57:
        p.className += " wi wi-day-rain-mix";
        break;

      case 61:
      case 63:
      case 65:
        p.className += " wi wi-day-rain";
        break;

      case 66:
      case 67:
        p.className += " wi wi-day-sleet";
        break;

      case 71:
      case 73:
      case 75:
        p.className += " wi wi-day-snow";
        break;

      case 77:
        p.className += " wi wi-stars";
        break;

      case 80:
      case 81:
      case 82:
        p.className += " wi wi-day-showers";
        break;

      case 85:
      case 86:
        p.className += " wi wi-day-snow-wind";
        break;

      case 95:
        p.className += " wi wi-day-snow-thunderstorm";
        break;

      case 96:
      case 99:
        p.className += " wi wi-day-thunderstorm";
        break;

      default:
        p.className += " wi wi-day-sunny";
    }

    let pId = document.getElementById("tempoFuturo" + cont);
    pId.appendChild(p);



    cont++;

  }


}

