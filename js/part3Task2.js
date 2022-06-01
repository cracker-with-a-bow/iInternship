function randomArray(count, n, m) {
  let array = [];
  let max = Math.max(n, m);
  let min = Math.min(n, m);
  for (let i = 0; i < count; ++i) {
    array[i] = [];
    for (let j = 0; j < count; ++j) {
      let randomNumber = Math.random() * (Math.max(n, m) - Math.min(n, m)) + Math.min(n, m);
      randomNumber = Math.round(randomNumber);
      if (randomNumber <= max && randomNumber >= min) {
        array[i][j] = randomNumber;
      }
     
    }
  }
  console.log(array);
  /* почему-то не меняет первый элемент*/
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      if (i = j) {
        if (array[i][j]<0) {
          array[i][j] = 0;
        } else {
          array [i][j] = 1;
        }
      }
    }
  }
  console.log(array);

  
  return array;
}

randomArray(5, -10, 10);

