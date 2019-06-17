// POP() написать функцию, которая удаляет последний элемент массива и возвращает его.
Array.prototype.pop2 = function() {
    const last = this[this.length - 1];
    this.length -= 1;
    return last;
}

// PUSH() написать функцию, которая добавляет в конец массива 1 элемент и возвращает нового массива

Array.prototype.push2 = function() {
    if (arguments.length === 0) {
        return;
    }
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}

//SHIFT() написать функцию, которая удаляет первый элемент массива и возвращает его

Array.prototype.shift2 = function() {
    const first = this[0];
    for (let i = 0, j = 1; i < this.length - 1; i++, j++) {
        this[i] = this[j];
    }
    this.length -= 1;
    return first;
}

// UNSHIFT() написать функцию, которая добавляет элемент 1 или более элементов в начало массива и возвращает длину нового массива

Array.prototype.unshift2 = function() {
    if (arguments.length === 0) {
        return;
    }
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i]
    }
}

//forEach() написать функцию, которая будет выполнять функцию коллбек для каждого эл-та массива

Array.prototype.forEach2 = function(callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this);
    }
}

//map() написать функцию, которая будет вовращать новый массив,
// элементами которого будут результаты вызова коллбек для каждого эл-та исходного массива

Array.prototype.map2 = function(callBack) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        let newItem = callBack(this[i], i, this);
        result[i] = newItem;
    }
    return result;
}

// filter написать функцию, которая вернет новый массив, в который войдут только те элементы,
// которые вернут true для функции коллбек

Array.prototype.filter2 = function(callBack) {
    const result = [];
    for (let i = 0, j = 0; i < this.length; i++) {
        if (callBack(this[i], i, this) === true) {
            result[j] = this[i];
            j++;
        }
        continue;
    }
    return result;
}

// join() написать функцию, которая получает аргументом разделитель и склеивает каждый элемент массива в строку 
// через разделитель

Array.prototype.join2 = function(separator) {
    let string = '';
    for (let i = 0; i < this.length; i++) {
        if (i < this.length - 1) {
            string += `${this[i]}${separator}`;
        } else {
            string += this[i];
        }
        
    }
    return string;
}

// reverse() написать фугкцию, которая меняет порядок индексов значений наоборот

Array.prototype.reverse2 = function() {
    for (let i = this.length - 1, j = 0; i >= 0; i--, j++) {
        if (j < i) {
            let start = this[j]
            this[j] = this[i];
            this[i] = start;
        }
    }
}

//some() написать функцию, которая вернет true, если вызов коллбек хотя бы для 1 эл-та массива вернет true

Array.prototype.some2 = function(callBack) {
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i, this) === true) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

// every() написать функцию, которая вернет true, если коллбек для всех эл-тов массива вернет true 

Array.prototype.every2 = function(callBack) {
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i, this) === true) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

// reduce() написать функцию, которая создает аккумулятор и поочередно применяя коллбек к каждому эл-ту массива
// накапливает результат выполнения в аккумуляторе

Array.prototype.reduce2 = function(callBack) {
    let accumulator = this[0];
    for (let i = 1; i < this.length; i++) {
        let currentValue = this[i];
        index = i;
        array = this;
        accumulator = callBack(accumulator, currentValue, index, array);
    }
    return accumulator;
}

// sort() написать функцию, которая будет сортировать массив на месте

Array.prototype.sort2 = function() {
    // дописать
}

const arr = [[1], [2], [3], [4], [5]];
console.log(arr.reduce2((a, b) => {
    console.log(`accumulator ${a}`);
    console.log(`current ${b}`);
    return a.concat(b);
}));
//console.log(arr);