// Объявление модуля
var myModule = (function () {

  // Инициализирует наш модуль
  var init = function () {
    _setUpListners();
  };

  // Прослушивает события
  var _setUpListners = function () {
    $('#add-new-item').on('click', _showModal); //открыть модальное окно
    $('#b-close, #popup-overlay').on('click', _hideModal);
    $(document).on('keydown', function(event) { if (event.keyCode == 27) {_hideModal()}});
    $('.file-field').on('change', _getFileName);
    $('#new-project-popup').on('submit', _addProject);

  };

  // Вызывает popup
  var _showModal = function(event) {
       event.preventDefault();
    $('#popup-overlay').fadeIn(400,
      function() {
      $('#new-project-popup').css('display', 'block').animate
        ({opacity: 1, top: '50%'}, 200);
      });
  };

  // Скрывает popup
  var _hideModal = function() {
      // $('.formtextstyle').removeClass('emptyField');
      $('#new-project-popup').animate({opacity: 0, top: '40%'}, 200,
      function(){
      $(this).css('display', 'none');
      $('#popup-overlay').fadeOut(400);});
      $('#new-project-form').trigger('reset');
    };

  // Получаем имя файла из пути к нему
  var _getFileName = function(){
        var name = $(this).val();
          $('#text-change').html(name.substr(name.lastIndexOf('\\')+1));
          $('#text-change').css({'color': '#959aa8', 'font-size': '15px'});
  };

  var _addProject = function (e) {
    console.log('добаление проекта');
    e.preventDefault();

    var form = $(this),
    url = 'addproject.php',
    defObj = _ajaxForm (form, url);


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
myModule.init();
