(function() {
    var form = (function() {
        var _this;

        function Form() {
            _this = this;
            this.formBlock = document.querySelector('.form-container');
            this.frm = this.formBlock.querySelector('.form');
            this.openButton = document.querySelector('.arrow-down');
            this.closeButton = this.formBlock.querySelector('.form__close-button');
            this.init();
        }

        Form.prototype.init = function() {

            if (!_this.formBlock) {
                throw "Form container does not exists";

            }

            if (!_this.frm) {
                throw "Form does not exists";
            }
            _this.frm.addEventListener('submit', function(e) {

                if (_this.isValid()) {
                    console.log('All good');
                } else {
                    e.preventDefault();
                    console.log('Is not valid');
                }

            })

            if (!!_this.openButton) {
                _this.openButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    _this.open();
                });
            }
        };
        Form.prototype.close = function() {
            _this.formBlock.classList.add('is-hidden');
        };

        Form.prototype.onClose = function() {
            _this.close();
            _this.closeButton.removeEventListener('click', _this.onClose);
        };
        Form.prototype.open = function() {
            if (_this.formBlock.classList.contains('is-hidden')) {
                _this.formBlock.classList.remove('is-hidden');
            }

            if (!!_this.closeButton) {
                _this.closeButton.addEventListener('click', _this.onClose);
            }
        };
        Form.prototype.isValid = function() {
            var validation = new LandingApp.Validation(_this.frm);
            return validation.ValidateForm();
        };
        return Form;
    })();
    LandingApp.Form = form
})();