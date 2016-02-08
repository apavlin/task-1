// Объявление модуля
var contactMe = (function () {

  // Инициализирует наш модуль
  var init = function () {
    _setUpListners();
  };

  // Прослушивает события
  var _setUpListners = function () {
    $('#contactMeForm').on('submit', _submitForm);


  };

  var _submitForm = function(ev) {
    ev.preventDefault();

    var form = $(this),
        url = 'contactme.php',
        defObj = _ajaxForm(form, url);

        // чт-то будем делать с ответом с сервера defObj
  };

  var _ajaxForm = function(form, url){
    if (!validation.validateForm(form)) return false;
    // false значит что код ниже не будет выполняться
  }

  // Возвращаем объект (публичные методы)
  return {
    init: init
  };

})();

// Вызов модуля
contactMe.init();
