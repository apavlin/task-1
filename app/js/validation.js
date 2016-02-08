// Объявление модуля
var validation = (function () {

  // Инициализирует наш модуль
  var init = function () {
    _setUpListners();
  };

  // Прослушивает события
  var _setUpListners = function () {
    $('#new-project-form').on('submit', validateForm);
    $('#contactMeForm').on('submit', validateForm);
    $('form').on('click', '.emptyField', _removeHighLightRed);
    $('form').on('reset', _clearForm);

  };

  var _clearForm = function (form) {
    var form = $(this);
    form.find('input, textarea, .file-field').trigger('hideTooltip');
    // _removeHighLightRed(); почему то не работает
    form.find('.emptyField').removeClass('emptyField');
  };

 // Создает тултипы
  var _createQtip = function (element, position) {
    if (position === 'right') {
      position = {
        my:'left center', // стрелочка тултипа
        at:'right center' // тело  тултипа
      }
    }else{
      position = {
        my:'right center',
        at:'left center',
        adjust: {
          method: 'shift none'
        }
      }
    }

    element.qtip({
      content: {
        text: function() {
          return $(this).attr('qtip-content');
        }
      },
      show: {
        event: 'show'
      },
      hide: {
        event: 'click hideTooltip'
      },
      position: position,
      style: {
        classes: 'qtip-mystyle qtip-rounded qtip-red ',
        tip: {
          height: 10,
          width: 16
        }
      }
    }).trigger('show');
  };

  // Убирает красную заливку и тултип
  var _removeHighLightRed = function(){
       $(this).removeClass('emptyField');
  }

  var validateForm = function (form){
    var form = $(this),
        elements = form.find('input, textarea, .upload-file-style').not('input[type="file"]'),
        valid = true;

    // пройдемся по всем элементам формы
    $.each(elements, function(index, val) {
      var element = $(val),
      val = element.val(),
      pos = element.attr('qtip-position');

      if (val.length === 0) {
        element.addClass('emptyField')
        _createQtip(element, pos);
        valid = false;
      };

      if($('.file-field').val() != ''){
        $('.upload-file-style').val('fakevalue');

      };

    });

    return valid;
    };

  // Возвращаем объект (публичные методы)
  return {
    init: init,
    validateForm: validateForm
  };

})();

// Вызов модуля
validation.init();
