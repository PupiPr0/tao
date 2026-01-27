$(document).ready(function () {

    $(".servers__slider-item-date").each(function () {
        let time = $(this).attr('data-time');
        tick(time, $(this));

        let $this = $(this);
        let item = setInterval(function () {
            tick(time, $this);
        }, 1000);
    });

    function tick(time, element) {
        let currentTime = Math.round(new Date().getTime() / 1000.0);
        let leftTime = Math.abs(time - currentTime);
        let date = convert(leftTime);

        if (leftTime > 0) {
            element.find('.servers__slider-item-date-days span').html(date.d);
            element.find('.servers__slider-item-date-hours span').html(date.h);
            element.find('.servers__slider-item-date-minutes span').html(date.m);
            element.find('.servers__slider-item-date-seconds span').html(date.s);
        } else {
            // Если сервер уже работает, показываем прошедшее время
            let elapsedTime = Math.abs(leftTime); // Вычисляем прошедшее время
            let elapsedDate = convert(elapsedTime);

            element.find('.servers__slider-item-date-days span').html(elapsedDate.d);
            element.find('.servers__slider-item-date-hours span').html(elapsedDate.h);
            element.find('.servers__slider-item-date-minutes span').html(elapsedDate.m);
            element.find('.servers__slider-item-date-seconds span').html(elapsedDate.s);
        }
    }

    function convert(time) {
        let d = time / (3600 * 24) ^ 0;
        let h = (time - d * 3600 * 24) / 3600 ^ 0;
        let m = (time - h * 3600 - d * 3600 * 24) / 60 ^ 0;
        let s = time - h * 3600 - d * 3600 * 24 - m * 60;
        if (d < 10) { d = '0' + d; }
        if (h < 10) { h = '0' + h; }
        if (m < 10) { m = '0' + m; }
        if (s < 10) { s = '0' + s; }
        return {
            d: d,
            h: h,
            m: m,
            s: s,
        };
    }
});
