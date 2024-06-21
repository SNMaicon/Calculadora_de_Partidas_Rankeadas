let rank = " "
let matchBalance = rankCalculator(150,300)


function rankCalculator (victories, defeats){
  let balance = victories - defeats
  return balance
}

if(matchBalance <= 10){
  rank = "Ferro"
}else if(matchBalance > 10 && matchBalance <= 20){
  rank = "Bronze"
}else if(matchBalance > 20 && matchBalance <= 50){
  rank = "Prata"
}else if(matchBalance > 50 && matchBalance <= 80){
  rank = "Ouro"
}else if(matchBalance > 80 && matchBalance <= 90){
  rank = "Diamante"
}else if(matchBalance > 90 && matchBalance <= 100){
  rank = "Lendário"
}else{
  rank = "Imortal"
}

console.log(`O Herói tem de saldo de ${matchBalance} está no nível de ${rank}`)