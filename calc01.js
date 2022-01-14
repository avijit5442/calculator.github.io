    function divide(){document.getElementById("result").innerText=Number(number1.value)/Number(number2.value)}
    function multi() {document.getElementById("result").innerText=Number(number1.value)*Number(number2.value)}
    function add() {document.getElementById('result').innerText=Number(number1.value)+Number(number2.value)}
    function sub(){document.getElementById("result").innerText=Number(number1.value)-Number(number2.value)}

    function mile(){document.getElementById("result2").innerHTML=Number(number3.value)*0.621 }
    function km(){document.getElementById("result2").innerHTML=Number(number4.value)*1.609 }

    function sqr(){document.getElementById("result3").innerHTML=Number(Math.pow(number5.value,2))}
    function cube(){document.getElementById("result3").innerHTML=Number(Math.pow(number5.value,3))}
    function sqrt(){document.getElementById("result3").innerHTML=Number(Math.sqrt(number5.value))}
    function sqc(){document.getElementById("result3").innerHTML=Number(Math.pow(number5.value,1/3))}
    function log(){document.getElementById("result3").innerHTML=Number(Math.log(number5.value))}

    function farenhite(){document.getElementById("r").innerText=Number((Temperatureinput.value-32)/1.8)}
    function celcius(){document.getElementById("r").innerText=Number((Temperatureinput.value*1.8)+32)}

    