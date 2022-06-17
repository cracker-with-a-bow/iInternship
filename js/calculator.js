document.addEventListener('DOMContentLoaded', function () {
  let rub1 = 1; //цена за см
  let listPanels = document.querySelector('.price-parametr');
  let inputPanel = document.querySelector('.input-panel-size');
  inputPanel.addEventListener('input', changeItogo);
  let arrayOfValuePanelSizes = []; //значения инпутов с размерами
  let countPanels = 0; //количество панелей
  let summSizesPanels = 0;  //подсчет суммы размеров панелей
  let btnToBook = document.querySelector('.btn-to-book'); //кнопка заказать скинали
  //btnToBook.addEventListener('click', part3Task2); //клик по кнопке заказать скинали

  function changeItogo() {
    summSizesPanels = 0;
    for (let key in arrayOfValuePanelSizes) {
      delete arrayOfValuePanelSizes[key];
    }
    let inputsSizesPanels = document.querySelectorAll('input.input-panel-size'); //объект, где все инпуты с размерами

    // количество панелей и запись значений инпутов в объект
    for (let elem of inputsSizesPanels) {
      countPanels++;
      arrayOfValuePanelSizes.push(elem.value);
    }

    //подсчет суммы размеров панелей

    for (let arrElem of Object.values(arrayOfValuePanelSizes)) {
      summSizesPanels += parseInt(arrElem);
    }

    console.log(countPanels);
    console.log(arrayOfValuePanelSizes);
    console.log(summSizesPanels);
  }
})