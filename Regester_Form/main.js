// Đối tượng Validator
function Validator(options) {

    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rule và ktra
        //Nếu có lỗi dừng việc ktra
        for( let i = 0 ; i < rules.length; ++i){
            errorMessage = rules[i](inputElement.value)
            if(errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }

        return !errorMessage
    }

    //Lấy element của form 
    var formElement = document.querySelector(options.form)

    if (formElement) {
        //Khi submit form
        formElement.onsubmit = function(){
            e.preventDefault();

            var isFormVlaid = true; 

            // Lặp qua từng rules và validate
            options.rules.forEach(function(rule){
                var inputElement =  formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule)
                
                if(!isValid){
                    isFormVlaid = false;
                }
            });
            if(isFormVlaid){
                console.log("Không có lỗi");
                
            }else{
                console.log("Có lỗi");
                
            }
        }

        //Lặp qua mỗi rule và xử lí
        options.rules.forEach(function (rule) {
            // Lưu rules trong mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            // selectorRules[rule.selector] = rule.test;

            var inputElement = formElement.querySelector(rule.selector);

            // console.log(inputElement);
            if (inputElement) {
                //Xử lí trường học blur ra ngoài input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }


                //Xử lí mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }

        });
        console.log(selectorRules);
        
    }
}


//Định nghĩa rules 
//Nguyên tắc chung
/*
1. Khi có lỗi => message lỗi
2. Ko trả gì cả
*/

//trim() loại bỏ khoảng cách (space) 2 bên đầu của chuỗi
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || "Vui lòng nhập thông tin"
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là Email'
        }
    }
}

Validator.minlength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirmed = function (selector, getConfimValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfimValue() ? undefined : message || "Nhập sai mật khẩu"
        }
    }
}



