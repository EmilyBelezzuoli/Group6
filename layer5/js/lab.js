$(document).ready(function() {
    $('.key').on('click', function() {
        var value = $(this).text();
        if (this.id === 'clear') {
            $('#code').val('');
        } else if (this.id === 'enter') {
            alert('Entered Code: ' + $('#code').val());
            $('#code').val('');
        } else {
            $('#code').val($('#code').val() + value);
        }
    });
});

