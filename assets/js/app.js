$('.scrollto').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 600,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

$('.modal__btn-active').on('click', function() {
    $('.modal').addClass('active');
    $('.body').addClass('active');
});

$('.close__btn, .modal__bg').on('click', function() {
    $('.modal').removeClass('active');
    $('.body').removeClass('active');
});

$('.btn__nav, .link__nav').on('click', function() {
    $('.nav').toggleClass('active');
    $('.btn__nav').toggleClass('active');
    $('.head__btn').toggleClass('active');
    $('.header').toggleClass('active');
    $('.section__prew').toggleClass('active');
    $('.body').toggleClass('active');
});


$('.link__nav').on('click', function() {
    $('.nav, .btn__nav, .head__btn, .header, .section__prew, .body').removeClass('active');
});



// Form sending handler
$('form').on('submit', function (e) {
    // decline default submit action
    e.preventDefault();

    let form = $(this);

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function() {
        // Вот тут обрабатывается успешная отправка формы
        
        let div = document.createElement('div');
        let alert = '<div class="modal__bg-a"></div><div class="modal__content"><div class="close__btn btn__alert"></div><h1 class="modal__title-a">Заявка отправлена, скоро мы с вами свяжемся</h1><button class="button modal__btn btn__alert">Супер</button></div></div>'
        div.className = "alert";
        div.innerHTML = alert;
        document.body.append(div);
        $('.modal').removeClass('active');
        $('.body').removeClass('active');
        $('.btn__alert, .modal__bg-a').on('click', function(){
            $('.alert').addClass('active');
        });
    }).fail(function() {
        // Тут обрабатываются ошибки при отправке
        
        let div = document.createElement('div');
        let alert = '<div class="modal__bg-a"></div><div class="modal__content"><div class="close__btn btn__alert"></div><h1 class="modal__title-a">Что-то пошло не так, но мы уже начали это чинить</h1><button class="button modal__btn btn__alert">Супер</button></div></div>'
        div.className = "alert";
        div.innerHTML = alert;
        document.body.append(div);
        $('.modal').removeClass('active');
        $('.body').removeClass('active');
        $('.btn__alert, .modal__bg-a').on('click', function(){
            $('.alert').remove();
        });
    });
});

