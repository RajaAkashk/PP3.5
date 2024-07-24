//1
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const firstThree = words.map((str)=> str.slice(0,3))
console.log(firstThree)

//2
const nums = [1, 2, 3, 4, 5];
const cubeOfnumber = nums.map((num)=> num*num*num)
console.log(cubeOfnumber)

//3
const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];
const removeFirst3 = fruitsArray.map((str)=> str.slice(2,str.length))
console.log(removeFirst3)

//4
const salaries = [5000, 7500, 12000, 3000, 9000];
const PercentBonus = salaries.map((num)=> (num*0.1)+num )
console.log(PercentBonus)

//5
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const greeting = names.map((name)=> "Hello,"+name)
console.log(greeting)

//6
const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."];
const lengthOfStr = sentences.map((str)=> str.length)
console.log(lengthOfStr)

//7
const temperaturesCelsius = [0, 20, 37, -5, 10];
const tempInFahrenheit = temperaturesCelsius.map((num)=> ((num*9/5)+32) );
console.log(tempInFahrenheit)

//8
const prices = [50, 75, 120, 30, 90];
const discountPrice = prices.map((num)=> num-(num*0.1) )
console.log(discountPrice)

//9
const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789];
const twoPointDecimals = decimalNumbers.map((num)=> Math.round(num*100)/100)
console.log(twoPointDecimals)

//10
const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];
const newArr = namesArray.map((name)=> name+name.length)
console.log(newArr)
