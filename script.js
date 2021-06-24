    var centesimos = 0;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;

    

    function iniciar () {
        control = setInterval(cronometro,10);
        document.getElementById("iniciar").disabled = true;
        document.getElementById("pausar").disabled = false;
        document.getElementById("continuar").disabled = true;
        document.getElementById("resetar").disabled = false;
    }

    function pausar () {
        clearInterval(control);
        document.getElementById("iniciar").disabled = true;
        document.getElementById("pausar").disabled = true;
        document.getElementById("continuar").disabled = false;
        document.getElementById("resetar").disabled = false;
    }

    function continuar () {
        control = setInterval(cronometro,10);
        document.getElementById("iniciar").disabled = true;
        document.getElementById("pausar").disabled = false;
        document.getElementById("continuar").disabled = true;
        document.getElementById("resetar").disabled = false;
    }

    function resetar () {
        clearInterval(control);
        centesimos = 0;
        segundos = 0;
        minutos = 0;
        horas = 0;
        Centesimos.innerHTML = ":00";
        Segundos.innerHTML = ":00";
        Minutos.innerHTML = ":00";
        Horas.innerHTML = "00";
        document.getElementById("iniciar").disabled = false;
        document.getElementById("pausar").disabled = true;
        document.getElementById("continuar").disabled = true;
        document.getElementById("resetar").disabled = true;
    }
    
    function cronometro () {
        if (centesimos < 99) {
            centesimos++;
            if (centesimos < 10) { centesimos = "0"+centesimos }
            Centesimos.innerHTML = ":"+centesimos;
        }
        if (centesimos == 99) {
            centesimos = -1;
        }
        if (centesimos == 0) {
            segundos ++;
            if (segundos < 10) { segundos = "0"+segundos }
            Segundos.innerHTML = ":"+segundos;
        }
        if (segundos == 59) {
            segundos = -1;
        }
        if ( (centesimos == 0)&&(segundos == 0) ) {
            minutos++;
            if (minutos < 10) { minutos = "0"+minutos }
            Minutos.innerHTML = ":"+minutos;
        }
        if (minutos == 59) {
            minutos = -1;
        }
        if ( (centesimos == 0)&&(segundos == 0)&&(minutos == 0) ) {
            horas ++;
            if (horas < 10) { horas = "0"+horas }
            Horas.innerHTML = horas;
        }
    }