(function() {
    var isAnimate;
    window.AnimateScroll = function(y, step, interval) {
        var offset = 0;
        if (isAnimate) {
            return;
        }

        isAnimate = true;

        (function animate() {

            if (offset >= y) {
                offset = y;
                isAnimate = false;
            }

            window.scrollTo(0, offset);
            console.log(offset);
            offset += step;

            if (isAnimate) {
                setTimeout(animate, interval || 0.5);
            }
        }());
    }
}());