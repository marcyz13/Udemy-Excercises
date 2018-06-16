console.log("numbers between -10 and 19");
// var num1 = -10;

// while(num1 <= 19) {
// 	console.log(num1);
// 	num1 ++;
// }

for(var num = -10; num <= 19; num++){
	console.log(num);
}

console.log("even numbers betwen 10 and 40");
// var num2 = 10;

// while(num2 <= 40) {
// 	console.log(num2);
// 	num2 += 2;
// }

for(var num = 10; num <= 40; num+=2){
	console.log(num);
}

console.log("Odd numbers between 300 and 333");
// var num3 = 300;
// while(num3 <= 333) {
// 	if(num3 % 2 !== 0) {
// 		console.log(num3);
// 	}
// num3+=1;
// }

for(var num = 300; num <= 333;  num+=1){
	if(num % 2 !== 0) {
	console.log(num);
	}
}

console.log("Numbers divisible by 5 and 3 between 5 and 50")
// var num4 = 5
// while(num4 <= 50) {
// 	if(num4 % 3 === 0 && num4 % 5 === 0) {
// 		console.log(num4);
// 	}
// 	num4+=1
// }

for(var num = 5; num <= 50; num+=1) {
	if(num % 3 === 0 && num % 5 === 0) {
		console.log(num)
	}
}
