function SummVsehChiselandNechet (a, b) {
  console.log('a=', a, 'b=', b);
  let min = Math.min(a, b);
  let max = Math.max (a, b);
  let summOfNumbersFromAtoB = 0; 
  
  for (let i = min;i <= max; ++i) {
    summOfNumbersFromAtoB += i;
    if (i % 2 == 1) {
      console.log (i);
    }
  }

  console.log('сумма чисел от А до В=', summOfNumbersFromAtoB);
}

SummVsehChiselandNechet (1, 10);


