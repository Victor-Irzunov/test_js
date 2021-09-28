// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'Javascript')
// console.log(typeof undefined)  //undefined
// console.log(typeof Math) //object

// console.log(typeof Symbol('JS')) //Symbol
// console.log(Symbol("foo")) //Symbol(foo)
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// alert(id1 == id2); // false
// Символ (symbol) – примитивный тип данных, использующийся для создания уникальных идентификаторов.
// Символы создаются вызовом функции Symbol(), в которую можно передать описание (имя) символа.
// Даже если символы имеют одно и то же имя, это – разные символы. 

// console.log(typeof null) //object
// console.log(typeof function() {}) //function
// console.log(typeof NaN) //
// let i = 'gogi ' + NaN 
// console.log(i)  //'gogi NaN'
// console.log(typeof i) //string
// let i = 'gogi ' + undefined 
// console.log(i) //gogi undefined
// console.log(typeof i) // string




// '', 0, null, undefined, NaN, false
// console.log(Boolean('')) //false
// console.log(Boolean('Hello')) //true
// console.log(Boolean(' ')) //true
// console.log(Boolean('0')) //true
// console.log(Boolean(0)) //false
// console.log(Boolean(null)) //false
// console.log(Boolean(undefined)) //false
// console.log(Boolean([])) //true
// console.log(Boolean({})) //true
// console.log(Boolean(function(){})) //true

// Строки и числа
// let s = 1 + '2'
// console.log(typeof s) // string 12
// console.log('' + 1 + 0) //10
// let n = '' - 1 + 0 // -1
// console.log(typeof n) //number
// console.log('3' * '8') // number
// console.log(4 + 10 + 'px') //14px
// console.log('px' + 5 + 10) // string px510
// console.log('42' - 40) //2
// console.log('42px' - 2) //NaN
// console.log(null + 2) //2
// console.log(undefined + 42) //NaN




// == vs ===
// console.log(2 == '2') //true
// console.log(2 === '2')  //false

// console.log(undefined == null) //true
// При нестрогом равенстве ==
// Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.

// console.log(undefined === null) //false
// Эти значения различны, так как различны их типы.

// console.log('0' == false) //true
// console.log(typeof false) //bollean
// console.log('0' == 0) //true
// console.log(0 == 0) //true

// !При использовании математических операторов и других операторов сравнения < > <= >=
// !Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.

// =====
// console.log(false == '') //true
// Это происходит из-за того, что операнды разных типов преобразуются оператором == к числу. В итоге, и пустая строка, и false становятся нулём.
// console.log(false == []) //false
// console.log([]) //true
// console.log(false == {}) //false
// console.log('' == 0) //true
// console.log(Boolean('')) //false
// console.log(Boolean(0)) //false
// console.log(Boolean([])) //true
// console.log('' == []) //true
// console.log('' == {}) //false
// console.log(0 == []) //true
// console.log(0 == {}) false
// console.log(0 == null) //false
// нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.
//_______________________________________

// let a = 42
// let b = a
// b++
// console.log('a', a) //42
// console.log('b', b) //43

// function bracket(str) {
// 	const stack = []
// 	for (let i = 0; i < str.length; i++){
// 		let c = str[i]
// 		if (c === '(') stack.push(c)
// 		else {
// 			let f = stack.pop()
// 			if (!f) return false
// 		}
// 	}
// 	if (stack.length !== 0) return false
// 	return true
// }
// const h = bracket('((())))')
// console.log('h: ', h)

// const f = [1, 2, 1, 4, 2, 4]
// const g = [...new Set(f)]
// console.log("🚀  _ file: js.js _ line 95 _ g", g)

// const n = f.filter((item, idx)=> f.indexOf(item) === idx)
// console.log("🚀  _ file: js.js _ line 98 _ n", n)


const arr = [1, 1, 2, 3, 2, 4]
function f1(array) {
	const a = []
	for (let i = 0; i < array.length; i++){
		let h = array[i]
		let count = 0
		for (let j = 0; j < array.length; j++){
			if(h === array[j]) {
				count++
			}
		}
		if (count === 1) {
			a.push(h)
		}
	}
	return a
}
//если повтряется то count=2 иначе count=1
// console.log('f1: ', f1(arr))

