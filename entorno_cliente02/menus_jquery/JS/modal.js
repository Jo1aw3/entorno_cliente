$(document).ready(function () {

    $("#elemVolver").on('click', function() {
        window.location.href = "index.html"
    });

    var url = window.location.search;
    if (url.includes('platos')) {
        $('#comboMenus').hide();
        $('#titulo').html("PLATOS");
    } else {
        $('#comboMenus').show();
    }

    $.getJSON('/JSON/datosPlatos.json', function (data) {
        const json = data;
        onload(json);
    })
        .fail(function (error) {
            console.error('error al cargar el archivo json: '+ error)
        });

    function onload(platos) {
        loadPlatos(platos);
        
        $('#comboMenus').change(function () {
            let menu = $(this).val();
            $('.card').hide();
            if (menu == 'especial') {
                $('.card[data-especial=true]').show();
            }
            if (menu == 'basico') {
                $('.card[data-basico=true]').show();
            }
        });

        var suma = 0;
        $('#elemCompra').click(funtion (event) {
            event.preventDefault();
            let ul = document.createElement('ul');
            $('.classCheckBox:checked').each(function () {

            });
        });

    }

});