console.log("Saudações, digite o nome de seu Herói");

let nomeheroi = "Adamastor"
let xpheroi = 8008
let rankheroi = "Rank"

if (xpheroi < 1000) rankheroi = "Ferro"
else if (xpheroi >= 1001 && xpheroi <= 2000) rankheroi = "Bronze"
else if (xpheroi >= 2001 && xpheroi <= 5000) rankheroi = "Prata"
else if (xpheroi >= 5001 && xpheroi <= 7000) rankheroi = "Ouro"
else if (xpheroi >= 7001 && xpheroi <= 8000) rankheroi = "Platina"
else if (xpheroi >= 8001 && xpheroi <= 9000) rankheroi = "Ascendente"
else if (xpheroi >= 9001 && xpheroi <= 10000) rankheroi = "Imortal"
else if (xpheroi >= 10001) rankheroi = "Radiante"

console.log ("Saudações " + nomeheroi + ", seu rank atual é de: " + rankheroi)
