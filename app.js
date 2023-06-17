(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let del = document.querySelector('.btn-delete');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e) {
        if(screen.value === '') {
            screen.value = "Please Enter a Value!";
        } else {
            let result = eval(screen.value);
            screen.value = result;
        }
    });

    clear.addEventListener('click', function(e){
        screen.value = "";

    })
    del.addEventListener('click', function(e){
        screen.value = "";

    })



})();