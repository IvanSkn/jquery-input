;(function($){
 
    var defaults = {
        url: 'send.php',
        formClass: 'form-class',
        inputs: {'name': ['text', 'firstname', 'Имя'], 'telephone': ['text', 'telephone', 'Телефон']},
        inputClass: 'form-control',
        buttonText: 'Отправить',
        buttonClass: 'btn'
    };

    function NewForm(element, options) {
        var widget = this;
        widget.config = $.extend({}, defaults, options);
        widget.element = element;

        widget.element.on('submit', function(e) {
            e.preventDefault();
            
            $.ajax({
                type: 'POST',
                url: widget.config.url,
                data: widget.element.find('form').serialize(),
                dataType: 'json'
            }).done(function(data) {
                console.log(data.message);
            })
        });

        widget.element.on('change', function(e) {
            widget.element.find('input')
        })

        widget.init();
    }

    NewForm.prototype.init = function() {

        var form = $('<form/>', {
            class: this.config.formClass
        }).appendTo(this.element);

        var i,
            x = Object.keys(this.config.inputs),
            inputCount = x.length;
        for(i = 0; i < inputCount; i++) {
            var div = $('<div/>', {
                class: 'form-group'
            }).appendTo(form);

            $('<label/>', {
                text: this.config.inputs[x[i]][2],
                'for': x[i]
            }).appendTo(div);

            $('<input/>', {
                type: this.config.inputs[x[i]][0],
                class: this.config.inputClass,
                id: x[i],
                name: this.config.inputs[x[i]][1],
                'placeholder': this.config.inputs[x[i]][2]
            }).appendTo(div)
        }

        $('<button/>', {
            text: this.config.buttonText,
            class: this.config.buttonClass
        }).appendTo(form)
    }

    $.fn.newPlugin = function(options) {
        new NewForm(this.first(), options);
        return this.first();
    };
})(jQuery);