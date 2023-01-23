let aqi = document.getElementById("aqi");

const main = document.querySelector("main");

const healthConcern = document.getElementById("healthConcern");

const healthEffect = document.getElementById("healthEffect");

function checkAirQuality(){
    const input = aqi.value;
    let outputConcern ="";
    let outputEffect ="";

    if (input >50 && input <= 100){
        outputConcern = "Moderate";
        outputEffect= "Acceptable quality";
        main.style.backgroundColor ="yellow";
    } else if ( input >100 && input <= 150 ){
        outputConcern = "Unhealthy for sensitive groups";
        outputEffect = "Generable publics not likely affected";
        main.style.backgroundColor ="red";
    }else{
    outputConcern = "Good";
    outputEffect = "Little or no risk";
    main.style.backgroundColor ="green";
    }

    healthConcern.innerHTML = "Level of health concern: " + outputConcern;
    healthEffect.innerHTML = "Level of health effect: " + outputEffect;
}