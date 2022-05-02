    var sec = 60;
    var min = 59;
    var dia = 6;
    var hora = 23;
    
    setInterval(couter, 1000)
        function couter(){
            sec--
            if(sec == 0){
                min--
                sec = 59
            }

            if(min == 0){
                hora--
                min = 60
            }

            if(hora == 0){
                dia--
                hora = 23
            }

            if(sec.toString().length == 1)sec = "0" + sec
            if(min.toString().length == 1)min = "0" + min
            if(hora.toString().length == 1)hora = "0" + hora
            if(dia.toString().length == 1)dia = "0" + dia
    
            var textSec = document.querySelector("#segundo")
            textSec.innerHTML = sec
            var textMin = document.querySelector("#min")
            textMin.innerHTML = min
            var textHora = document.querySelector("#hora")
            textHora.innerHTML = hora
            var textDia = document.querySelector("#dia")
            textDia.innerHTML = dia
        }
