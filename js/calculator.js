document.addEventListener('DOMContentLoaded', function () {
  let panel1 = 0.0031; //цена за см панели

  let ITOGO = document.querySelector('.value-ITOGO');

  let listPanels = document.querySelectorAll('.price-parametr');
  let panelsPrice = 0;

  let socketInput = document.getElementById('rozetka'); //вырез под розетку
  socketInput.addEventListener('change', changeItogoSocket);
  let socket1 = 5; //цена за 1 розетку
  let socketPrice = 0;

  let glass = document.querySelector('.select-glass'); // стекло
  glass.addEventListener('change', changeItogoGlass);
  let glassPrice = 10; //цена за обычное стекло

  let illumination = document.querySelector('.illumination'); // подсветка
  illumination.addEventListener('change', changeItogoIllumination);
  let illuminationPrice = 0; //цена за подсветку

  let UVprint = document.querySelector('.UV-print-class'); //УФ-печать
  UVprint.addEventListener('change', changeItogoUVprint);
  let UVprintPrice = 0;

  let distanceInput = document.getElementById('distance'); //расстояние за город
  distanceInput.addEventListener('change', changeItogoDistance);
  let distancePrice = 0;
  let km1 = 1; // цена 1 км

  let holesInput = document.getElementById('holes'); //Отверстия
  holesInput.addEventListener('change', changeItogoHoles);
  let holesPrice = 0;
  let hole1 = 1; // цена за 1 отверстие

  let countPanels = 0; //количество панелей
  let summSizesPanels = 0;  //подсчет суммы размеров панелей

  let summItogo = 0;


  // вывод в правую часть

  let pricePanelPrint = document.querySelector('.price-panel');
  let illuminationPrint = document.querySelector('.illumination-print');
  let montazhPrint = document.querySelector('.montazh');
  let montazh = 100; //монтаж, стоимость
  montazhPrint.textContent = montazh + ' руб';

  let btnToBook = document.querySelector('.btn-to-book'); //кнопка заказать скинали
  //btnToBook.addEventListener('click', part3Task2); //клик по кнопке заказать скинали

  let btnAddPanel = document.querySelector('.addPanel');
  btnAddPanel.addEventListener('click', addNewPanel);
 
  function changeAllInputPanels() {
    let inputsSizesPanels = document.querySelectorAll('input.input-panel-size'); //объект, где все инпуты с размерами
    //повесить событие на все инпуты с размерами
    for (let elem of inputsSizesPanels) {
      inputsSizesPanels = document.querySelectorAll('input.input-panel-size'); //объект, где все инпуты с размерами
      elem.addEventListener('change', changeItogoPanels);
    }
  }
  changeAllInputPanels();

  function addNewPanel() {
    listOfAllPanels = document.querySelector('.list-panels');
    let newPanel = document.createElement('li');
    newPanel.className = 'calculator__item';
    newPanel.innerHTML = '<div class="div-for-item-title"><label class="calculator__item-title">Следующая панель</label></div><span class="price-parametr"><input type="number" class="input-panel input-panel-size" value="0"> <span class="small-text">x</span><input type="number" class="input-panel input-panel-size" value="0"> <span class="small-text">см</span></span>'
    listOfAllPanels.append(newPanel);
    changeAllInputPanels();
    itogoValue();
  }

  function changeItogoHoles() {
    if (parseInt(holesInput.value) < 0) {
      holesPrice = 0;
    } else {
    holesPrice = parseInt(holesInput.value) * hole1;
    }
    itogoValue();
  }

  function changeItogoDistance() {
    if (parseInt(distanceInput.value) < 0) {
      distancePrice = 0;
    } else {
    distancePrice = parseInt(distanceInput.value) * km1;
    }
    itogoValue();
  }


  function changeItogoUVprint() {
    if (UVprint.checked == true) {
      UVprintPrice = 100;
    } else if (UVprint.checked == false) {
      UVprintPrice = 0;
    }
    itogoValue();
  }

  function changeItogoIllumination() {
    if (illumination.value == 'no') {
      illuminationPrice = 0; // 0 руб за за подсветку
    } else if (illumination.value == 'yes') {
      illuminationPrice = 100;
    }
    illuminationPrint.textContent = illuminationPrice + ' руб';
    itogoValue();
  }

  function changeItogoGlass() {
    if (glass.value == 'glass-obuchnoe') {
      glassPrice = 10; // 10 руб за обычное стекло
    } else if (glass.value == 'glass-osvetl') {
      glassPrice = 15;
    }
    itogoValue();
  }

  function changeItogoPanels() {
    summSizesPanels = 0;
    listPanels = document.querySelectorAll('.price-parametr'); 
    for (let key of listPanels) {
      countPanels++;
      if ((parseInt(key.children[0].value) > 0) & (parseInt(key.children[2].value)) > 0) {
      summSizesPanels += (parseInt(key.children[0].value) * parseInt(key.children[2].value));
      }
      console.log(key)
    }
    panelsPrice = summSizesPanels * panel1;
    pricePanelPrint.textContent = (panelsPrice.toFixed(2)) + ' руб';
    itogoValue();
  }

  function changeItogoSocket() {
    let socketValue = parseInt(socketInput.value);
    if (socketValue > 0) {
      socketPrice = socketValue * socket1;
    } else {
      socketPrice = 0;
    }
    itogoValue();
  }

  function itogoValue() {
    summItogo = montazh + holesPrice + distancePrice + UVprintPrice + illuminationPrice + glassPrice + panelsPrice + socketPrice;
    ITOGO.textContent = (summItogo.toFixed(2));
  }

  summItogo = montazh + holesPrice + distancePrice + UVprintPrice + illuminationPrice + glassPrice + panelsPrice + socketPrice;
  ITOGO.textContent = (summItogo.toFixed(2));


})