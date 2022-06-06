window.addEventListener('DOMContentLoaded', function () {

  // Choices

const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  allowHTML: true,
  dataSelectText: '',
});


//  Map

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.872185, 2.354224],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [48, 48],
    iconImageOffset: [-30, -40]
  });
  myMap.geoObjects.add(myPlacemark);
}



//  Mask

var selector = document.getElementById("tel");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);



//  Validation

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',

  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    fontSize: '12px',
    color: '#FF5C00',
  },
  focusInvalidField: true,
  lockForm: true,

  errorContainer: '.errors-container',
});

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Поле должно содержать не менее трех символов',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Поле должно содержать не более 15 символов',
    },
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Введите e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный e-mail',
    },
  ])

  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Введите телефон',
    },
    {
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Номер должен содержать 10 цифр',
    },
  ]);

      // Tooltip

      tippy('#marker', {
        content: "Глава 2, страница 176",
        animation: 'fade',
        maxWidth: 200,
      });


})
