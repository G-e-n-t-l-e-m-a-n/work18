let loremArr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Commodi'];
let isLetterInTheWord = (arr, letter) => arr.filter((word) => word.indexOf(letter) > -1);                          //задание 1
				
console.log(isLetterInTheWord(loremArr, 'o'));


console.log("");


var d = new Date();
var curr_year = d.getFullYear();
var curr_month = d.getMonth();
var curr_date = d.getDate();
var curr_hours = d.getHours();
var curr_minutes = d.getMinutes();

console.log(curr_year + "-" + curr_month + "-" + curr_date + "_" + curr_hours + "-" + curr_minutes);    //задание 2


var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();
var curr_hours = d.getHours();
var curr_minutes = d.getMinutes();
var curr_seconds = d.getSeconds();

console.log(curr_date + "-" + curr_month + "-" + curr_year + "_" + curr_hours + "-" + curr_minutes + "-" + curr_seconds);


console.log("");


let getDay = (d) => {
	const date = new Date(d);
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];    // задание 3
	return days[date.getDay()];
}

console.log(getDay('2019-04-2'));


console.log("");


let getLocalDay = (d) => {
	const date = new Date(d);
  let day = date.getDay();

  if (day == 0) {
    day = 7;																				// задание 4
}
	return day;
}

console.log(getLocalDay('2019-04-2'));


console.log("");


function getDateAgo(date, days){
  var dateCopy = new Date(date);
	dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();                       // задание 5
}
var date = new Date(2019, 1, 2);

console.log(getDateAgo(date, 1)); 
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));