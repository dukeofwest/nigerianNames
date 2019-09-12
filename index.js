var names = ["Obi", "Onyeka", "Ovie", "Ugo", "Onome", "Ighomena", "Emuejevoke", "Ochuko", "Femi", "Niyi", "Oyeleke", "Okoro", "Rukevwe", "Temisan", "Afoke", "Edafe", "Ufuoma", "Ediri", "Osas", "Onioriode", "Abiola", "Ese", "Efe"];

var NigerianNames = randomNigerianNames(names);

function randomNigerianNames(arr) {
    var min = 0;
    var max = (arr.length - 1);
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex];

}

module.exports = NigerianNames;