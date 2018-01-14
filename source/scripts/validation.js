(function() {
    var Validation = (function() {
        var _this;

        function Validation(form) {
            _this = this;
            if (!!form) {
                this.ValidationObject = form;
            } else {
                this.ValidationObject = document.querySelector('form');
            }
        }

        Validation.prototype.ValidateForm = function() {
            var requiredFields = _this.ValidationObject.querySelectorAll('[required]');
            var emailValue = _this.ValidationObject.querySelector('[type="email"]').value;
            var numberValue = _this.ValidationObject.querySelector('[type="tel"]').value;
            if (!_this.isAllCompleted(requiredFields)) {
                console.log('Заполните пожалуйста все необходимые поля');
                return false;
            } else if (!_this.isEmail(emailValue)) {
                console.log('Не верный email');
                return false;
            } else if (!_this.isNumber(numberValue)) {
                console.log('Не верный номер');
                return false;
            }
            return true;
        };

        Validation.prototype.isAllCompleted = function(data) {
            var result = true;

            for (var i = 0; i < data.length; i++) {
                if (!_this.isNotEmpty(data[i].value)) {
                    result = false;
                    break;
                }
            }

            return result;
        };
        Validation.prototype.isEmail = function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        };
        Validation.prototype.isNumber = function(number) {
            var re = /^\d+$/;
            return re.test(number);
        };
        Validation.prototype.isNotEmpty = function(str) {
            return Boolean(str);
        };
        return Validation;
    })();
    LandingApp.Validation = Validation;
})();