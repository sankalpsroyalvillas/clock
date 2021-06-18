var hr = document.getElementById('hr')
var mn = document.getElementById('mn')
var sc = document.getElementById('sc')



function timeAlgo() {
    d = new Date()
    var getH = d.getHours()
    var getM = d.getMinutes()
    var getS = d.getSeconds()
    var rotateH = getH * 30 + getM / 2
    var rotateM = 6 * getM
    var rotateS = 6 * getS
    hr.style.transform = `rotateZ(${(rotateH) + (rotateM / 12)}deg)`
    mn.style.transform = `rotateZ(${rotateM}deg)`
    sc.style.transform = `rotateZ(${rotateS}deg)`
}

setInterval(timeAlgo, 1000)