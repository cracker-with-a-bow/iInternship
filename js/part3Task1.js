function randomArray(count, n, m) {
  let array = [];
  let max = Math.max(n, m);
  let min = Math.min(n, m);
  while (array.length < count) {
    let randomNumber = Math.random() * (Math.max(n, m) - Math.min(n, m)) + Math.min(n, m);
    randomNumber = Math.round(randomNumber);
    if (randomNumber <= max && randomNumber >= min) {
      array.push(randomNumber);
    }
  }
  console.log(array);
  maxNumber = Math.max.apply(null, array);
  minNymber = Math.min.apply(null, array);
  console.log('max number=', maxNumber);
  console.log('min number=', minNymber);

  let summ = 0;
  

  for (let i = 0; i <= array.length-1; ++i) {
    summ += array[i];
    if (array[i] % 2 ==1) {
      console.log(array[i]);
    }
  }
  
  let sredneeArifm = summ / (array.length-1);

  console.log('summa всех элементов массива=', summ);
  console.log('среднее арифметическое=', sredneeArifm);
  return array;
}

randomArray(5, 1, 10);

