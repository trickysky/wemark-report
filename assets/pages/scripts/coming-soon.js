var ComingSoon = function () {

    return {
        //main function to initiate the module
        init: function () {
            var austDay = new Date();
            austDay = new Date(2016, 0, 0);
            $('#defaultCountdown').countdown({until: austDay});
            $('#year').text(austDay.getFullYear());

            $.backstretch([
                "../assets/pages/media/bg/1.jpg",
                "../assets/pages/media/bg/2.jpg",
                "../assets/pages/media/bg/3.jpg",
                "../assets/pages/media/bg/4.jpg"
            ], {
                fade: 1000,
                duration: 10000
            });
        }

    };

}();

jQuery(document).ready(function () {
    ComingSoon.init();
});