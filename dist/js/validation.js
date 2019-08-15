$(document).ready(function () {
  $('#phone').mask("8(999)999-99-99",{placeholder:""});
  $('#brif__phone').mask("8(999)999-99-99",{placeholder:""});
  $('#modal__phone').mask("8(999)999-99-99",{placeholder:""});
  $('#brif-form').validate({     
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      username: {
        required: "Укажите ваше имя",
        minlength: "Минимальная длина 2 символа",
        maxlength: "Максимальная длина 15 символов"
      },
      email: {
        required: "Укажите ваш email",
        email: "Введите корректный email"
      },
      phone: {
        required: "Укажите ваш телефон"
      }
    }
  });


  $('#offer-form').validate({     
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      username: {
        required: "Укажите ваше имя",
        minlength: "Минимальная длина 2 символа",
        maxlength: "Максимальная длина 15 символов"
      },
      email: {
        required: "Укажите ваш email",
        email: "Введите корректный email"
      },
      phone: {
        required: "Укажите ваш телефон"
      }
    }
  });

  $('#box-call').validate({     
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      username: {
        required: "Укажите ваше имя",
        minlength: "Минимальная длина 2 символа",
        maxlength: "Максимальная длина 15 символов"
      },
      email: {
        required: "Укажите ваш email",
        email: "Введите корректный email"
      },
      phone: {
        required: "Укажите ваш телефон"
      }
    }
  });
});