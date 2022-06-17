document.addEventListener('DOMContentLoaded', function () {

  let btn1 = document.querySelector('.btn1');
  btn1.addEventListener('click', task1Part1);
  let btn2 = document.querySelector('.btn2');
  btn2.addEventListener('click', part1Task2);
  let btn3 = document.querySelector('.btn3');
  btn3.addEventListener('click', part1Task3);
  let btn4 = document.querySelector('.btn4');
  btn4.addEventListener('click', part2Task1);
  let btn5 = document.querySelector('.btn5');
  btn5.addEventListener('click', part2Task2);
  let btn6 = document.querySelector('.btn6');
  btn6.addEventListener('click', part3Task1);
  let btn7 = document.querySelector('.btn7');
  btn7.addEventListener('click', part3Task2);

  function task1Part1() {
    let inputX = document.querySelector('.part1Task1X');
    let x = parseInt(inputX.value);
    let inputY = document.querySelector('.part1Task1Y');
    let y = parseInt(inputY.value);
    let inputZ = document.querySelector('.part1Task1Z');
    let z = parseInt(inputZ.value);

    let part1Task1Answer1 = document.querySelector('.part1Task1Answer1');
    let part1Task1Answer2 = document.querySelector('.part1Task1Answer2');
    let part1Task1Answer3 = document.querySelector('.part1Task1Answer3');
    let part1Task1Answer4 = document.querySelector('.part1Task1Answer4');
    let part1Task1Answer5 = document.querySelector('.part1Task1Answer5');

    part1Task1Answer1.textContent = task1();
    part1Task1Answer2.textContent = task2();
    part1Task1Answer3.textContent = task3();;
    part1Task1Answer4.textContent = task4();;
    part1Task1Answer5.textContent = task5();;


    function task1() {
      let x1 = x;
      let y1 = y;
      let z1 = z;
      let answer = (x1 += y1 - ++x1 * z1);
      return answer;
    }

    function task2() {
      let x1 = x;
      let y1 = y;
      let z1 = z;
      z1 = --x1 - y1 * 5;
      let answer = z1;
      return answer;
    }


    function task3() {
      let x1 = x;
      let y1 = y;
      let z1 = z;
      y1 /= x1 + 5 % z1;
      let answer = y1;
      return answer;
    }


    function task4() {
      let x1 = x;
      let y1 = y;
      let z1 = z;
      z1 = ++x1 + y1 * 5;
      let answer = z1;
      return answer;
    }


    function task5() {
      let x1 = x;
      let y1 = y;
      let z1 = z;
      x1 = y1 - ++x1 * z1;
      let answer = x1;
      return answer;
    }
  }
  function part1Task2() {
    let inputA = document.querySelector('.part1Task2A');
    let a = parseInt(inputA.value);
    let inputB = document.querySelector('.part1Task2B');
    let b = parseInt(inputB.value);
    let inputC = document.querySelector('.part1Task2C');
    let c = parseInt(inputC.value);
    let part1Task2Answer = document.querySelector('.part1Task2Answer');
    let result = Math.round((a + b + c) / 3);
    part1Task2Answer.textContent = result;
  }

  function part1Task3() {
    let inputR = document.querySelector('.part1Task3R');
    let r = parseInt(inputR.value);
    let inputH = document.querySelector('.part1Task3H');
    let h = parseInt(inputH.value);
    let part1Task3Answer1 = document.querySelector('.part1Task3Answer1');
    let part1Task3Answer2 = document.querySelector('.part1Task3Answer2');
    let volume = Math.PI * r * 2 * h;
    let s = 2 * Math.PI * r * (r + h);
    /* не знаю нужно округление или нет */
    part1Task3Answer1.textContent = Math.round(volume);
    part1Task3Answer2.textContent = Math.round(s);
  }

  function part2Task1() {
    let inputA = document.querySelector('.part2Task1A');
    let a = parseInt(inputA.value);
    let inputB = document.querySelector('.part2Task1B');
    let b = parseInt(inputB.value);
    let part2Task1Answer1 = document.querySelector('.part2Task1Answer1');
    let part2Task1Answer2 = document.querySelector('.part2Task1Answer2');

    console.log('a=', a, 'b=', b);
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let summOfNumbersFromAtoB = 0;
    let str = '';

    for (let i = min; i <= max; ++i) {
      summOfNumbersFromAtoB += i;
      if (i % 2 == 1) {
        str += (i) + ',';
      }
    }
    console.log(str);
    part2Task1Answer1.textContent = str;
    part2Task1Answer2.textContent = summOfNumbersFromAtoB;
    console.log('сумма чисел от А до В=', summOfNumbersFromAtoB);
  }

  function part2Task2() {
    function pryamoygolnik() {
      let star = '*';
      let whitespace = ' ';
      let dlina = 10;
      let shirina = 5;
      let str;

      for (let i = 0; i < shirina; ++i) {
        str = '';

        if (i == 0 || i == shirina - 1) {
          for (let j = 0; j < dlina; ++j) {
            str += star;
          }
        } else {
          str = star;
          for (let j = 0; j < dlina - 2; ++j) {
            str += whitespace;
          }
          str += star;
        }
        console.log(str);
      }

    }

    pryamoygolnik();


    function treygolnik() {
      let star = '*';
      let whitespace = ' ';
      let dlina = 10;
      let shirina = 5;
      let str2 = '';

      for (let i = 0; i < shirina; ++i) {
        str2 += star;
        console.log(str2);
      }

    }

    treygolnik();

    function treygolnik2() {
      let dlina = 5;

      for (let i = -dlina; i <= 0; ++i) {
        let stroka = '';
        for (let j = -dlina; j <= dlina; ++j) {
          if (Math.abs(i) + Math.abs(j) == dlina) {
            stroka += '*';
          } else if (i == 0) {
            stroka += '*';
          } else {
            stroka += ' ';
          }

        }

        console.log(stroka);
      }
    }

    treygolnik2();

    function romb() {
      let dlina = 5;

      for (let i = -dlina; i <= dlina; i++) {
        let stroka = '';
        for (let j = -dlina; j <= dlina; j++) {

          if (Math.abs(i) + Math.abs(j) == dlina) {
            stroka += '*';
          } else {
            stroka += ' ';
          }
        }
        console.log(stroka);
      }
    }

    romb();
  }

  function part3Task1() {
    let inputCount = document.querySelector('.part3Task1Count');
    let count = parseInt(inputCount.value);
    let inputN = document.querySelector('.part3Task1N');
    let n = parseInt(inputN.value);
    let inputM = document.querySelector('.part3Task1M');
    let m = parseInt(inputM.value);
    let part3Task1Answer1 = document.querySelector('.part3Task1Answer1');
    let part3Task1Answer2 = document.querySelector('.part3Task1Answer2');
    let part3Task1Answer3 = document.querySelector('.part3Task1Answer3');
    let part3Task1Answer4 = document.querySelector('.part3Task1Answer4');
    let part3Task1Answer5 = document.querySelector('.part3Task1Answer5');
    let array = [];
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    //заполнение массива
    while (array.length < count) {
      let randomNumber = Math.random() * (Math.max(n, m) - Math.min(n, m)) + Math.min(n, m);
      randomNumber = Math.round(randomNumber);
      if (randomNumber <= max && randomNumber >= min) {
        array.push(randomNumber);
      }
    }

    maxNumber = Math.max.apply(null, array);
    minNymber = Math.min.apply(null, array);

    let summ = 0;
    let str = '';

    for (let i = 0; i <= array.length - 1; ++i) {
      summ += array[i];
      if (array[i] % 2 == 1) {
        str += array[i] + ',';
      }
    }

    let sredneeArifm = summ / (array.length);

    part3Task1Answer2.textContent = minNymber;
    part3Task1Answer1.textContent = maxNumber;
    part3Task1Answer3.textContent = summ;
    part3Task1Answer4.textContent = sredneeArifm;
    part3Task1Answer5.textContent = str;

    return array;
  }

  function part3Task2() {
    let inputCount = document.querySelector('.part3Task2Count');
    let count = parseInt(inputCount.value);
    let inputN = document.querySelector('.part3Task2N');
    let n = parseInt(inputN.value);
    let inputM = document.querySelector('.part3Task2M');
    let m = parseInt(inputM.value);
    let array = [];
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    let table = document.getElementById("table1");

    for (let i = 0; i < count; ++i) {
      array[i] = [];
      let tr = document.createElement("tr");
      for (let j = 0; j < count; ++j) {
        let randomNumber = Math.random() * (Math.max(n, m) - Math.min(n, m)) + Math.min(n, m);
        randomNumber = Math.round(randomNumber);
        if (randomNumber <= max && randomNumber >= min) {
          array[i][j] = randomNumber;
        }
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
      }
      table.append(tr);
    }



    console.log(array);
    let table2 = document.getElementById("table2");

    /* почему-то не меняет первый элемент*/
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        if (i = j) {
          if (array[i][j] < 0) {
            array[i][j] = 0;
          } else {
            array[i][j] = 1;
          }
        }
      }
    }

    if (array[0][0] < 0) {
      array[0][0] = 0;
    } else {
      array[0][0] = 1;
    }
  

  for (let i = 0; i < count; i++) {
    let tr2 = document.createElement("tr");
    for (let j = 0; j < count; j++) {
      let td2 = document.createElement("td");
      td2.textContent = array[i][j];
      tr2.append(td2);
    }
    table2.append(tr2);
  }
  console.log(array);


  return array;
}
  
})
