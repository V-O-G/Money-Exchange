// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var answer = {};
      if (currency<1){return answer}
      if (currency>10000){return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency>=50){
      answer['H']=Math.floor(currency/50);
      currency = currency%50;
  }
  if(currency>=25){
      answer['Q']=Math.floor(currency/25);
      currency = currency%25;
  }
  if(currency>=10){
      answer['D']=Math.floor(currency/10);
      currency = currency%10;
  }
  if(currency>=5){
      answer['N']=Math.floor(currency/5);
      currency = currency%5;
  }
  if(currency>=1){
      answer['P']=Math.floor(currency/1);
      currency = currency%1;
  }
return answer;
}
