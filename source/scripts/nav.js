(function() {
    var NavBar = (function() {
        var _this;

        function NavBar() {
            _this = this;
            this.nav = document.querySelector('.nav');
            this.links = this.nav.querySelectorAll('.nav__link');
            this.animateTime = 0.4;
            this.init();
        }

        NavBar.prototype.init = function() {
            if (!!_this.nav) {
                _this.nav.addEventListener('click', function(e) {
                    var target = e.target;

                    if (target.tagName.toLowerCase() !== 'a') {
                        return;
                    }

                    e.preventDefault();
                    _this.goToActiveLink(target);
                });
            }
        };
        NavBar.prototype.goToActiveLink = function(target) {
            if (!!_this.links) {
                var showedSection = target.dataset.link;

                for (var i = 0; i < _this.links.length; i++) {
                    if (_this.links[i].classList.contains('nav__link--active')) {
                        _this.links[i].classList.remove('nav__link--active');
                    }
                }
                target.classList.add('nav__link--active');
                _this.scrollToActiveSection(showedSection);
            }
        };
        NavBar.prototype.scrollToActiveSection = function(showedSection) {
            var section = document.querySelector('.' + showedSection);
            var coords = section.getBoundingClientRect();
            AnimateScroll(coords.top, 10, _this.animateTime);
        };
        return NavBar;
    })();

    LandingApp.NavBar = NavBar;
})();