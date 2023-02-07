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

    // Bold
    const $bold = $("input[type=text][name=bold]");

    const changeBold = function(action) {
        let boldVal = parseInt($bold.val());

        if (action == 'plus') {
            if (boldVal == 3) return;
            boldVal = boldVal + 1;
            $bold.val(boldVal);
        } else {
            if (boldVal == 1) return;
            boldVal = boldVal - 1
            $bold.val(boldVal);
        }

        const $progressBarBold = $("#progress-bar-bold");
        if (boldVal == 1) {
            $progressBarBold.css("width", "0%");
        } else if (boldVal == 2) {
            $progressBarBold.css("width", "50%");
        } else {
            $progressBarBold.css("width", "100%");
        }
    }

    $('.bold-minus').click(function() {
        changeBold('minus');
    });

    $('.bold-plus').click(function() {
        changeBold('plus');
    });

});