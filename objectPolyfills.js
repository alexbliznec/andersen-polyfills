
// keys() написать функцию, которая массив элементтами которого являются ключи собственных свойств объекта
Object.keys2 = function(obj) {
    let result = [];
    let index = 0;
    for (let key in obj) {
        result[index] = key;
        index++;
    }
    return result;
}

// create() написать функцию, которая будет создавать объект, прототипом которого станет 1-ый аргумент функции,
// свойствами станут св-ва переданные во втором аргументе функции

Object.create2 = function(proto, properties) {
    let result = {};
    result.__proto__ = proto;
    for (let key in properties) {
     result[key] = properties[key].value;
    }
    return result;
}

// freeze() написать функцию, которая изменить свойства объекта 

Object.freeze2 = function(obj) {
    let descriptor = {
        configurable: false,
        writable: false
    }
    for (let key in obj) {
        Object.defineProperty(obj, key, descriptor);
    }
}



