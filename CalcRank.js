let balance = balanceVictories(100,35)
let level

function balanceVictories(vict,defe){
   let bv = vict - defe
   return bv
}

if (balance < 10) { 
    level = "Ferro"
}

else if (balance >= 10 && balance < 20) { 
    level = "Bronze"
}

else if (balance >= 20 && balance < 50) {
    level = "Prata"
}

else if (balance >= 50 && balance < 80) {
    level = "Ouro"
}

else if (balance >= 80 && balance < 90) { 
    level = "Diamante"
}

else if (balance >= 90 && balance < 100) { 
    level = "Lendário"
}

else { 
    level = "Imortal"
}

console.log("O Herói tem saldo de " + balance + " e está no nível " + level)
