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
      } else if (i==0) {
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