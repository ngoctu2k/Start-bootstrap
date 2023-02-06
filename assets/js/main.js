$(document).ready(function() {

    const $input = $("input[type=text][name=size]");
    const listSize = $(".size-item");


    const changeSize = function(size) {
        listSize.each(function(index) {
            $(this).removeClass('bg-secondary')
            if (index < size) {
                $(this).addClass('bg-secondary');
            }
        });
    }

    listSize.click(function() {
        $input.val(parseInt($(this).text()));
        $input.change();
        changeSize(parseInt($(this).text()));
    });

    $('.size-minus').click(function() {
        const sizeVal = parseInt($input.val());
        if (sizeVal == 1) return;
        $input.val(sizeVal - 1);
        $input.change();
        changeSize(sizeVal - 1);
        return false;
    });

    $('.size-plus').click(function() {
        const sizeVal = parseInt($input.val());
        if (sizeVal == 12) return;
        $input.val(sizeVal + 1);
        $input.change();
        changeSize(sizeVal + 1);
        return false;
    });


});