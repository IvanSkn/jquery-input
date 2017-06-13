# jquery-input
Простой плагин для созданий формы с полями input

Настраиваемые опции:

    url: 'send.php', // адрес отправки формы
    formClass: 'form-class', // класс формы
    inputs: {'name': ['text', 'firstname', 'Имя'], 'telephone': ['text', 'telephone', 'Телефон']},
    // создаваемые поля id : [type, name, label(placeholder)]
    inputClass: 'form-control', // класс для input-ов
    buttonText: 'Отправить', // текст кнопки
    buttonClass: 'btn' // класс кнопки
