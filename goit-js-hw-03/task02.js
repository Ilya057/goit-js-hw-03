// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
//  Функция возвращает число - количество свойств.

const countProps = function(obj) {
    console.log(Object.keys(obj).length);
  };

  // твой код


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
countProps({}); // 0

countProps({ name: 'Mango', age: 2 }); // 2

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3

