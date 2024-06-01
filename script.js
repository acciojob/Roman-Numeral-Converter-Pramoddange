function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let str=""
	while(num!=0){
		if(num>1000){
			str+=M;
			num-=1000;
		}else if(num>500){
			str+=D
			num-=500;
		}else if(num>100){
			str+=C
			num-=100;
		}else if(num>50){
			str+=L
			num-=50;
		}else if(num>10){
			str+=X;
			num-=10;
		}else if(num>5){
			str+=V;
			num-=5;
		}else{
			if(num==4){
				str+=IX;
				num-=4;
			}else if(num==3){
				str+=III;
				num-=3;
			}else if(num==2){
				str+=II;
				num-=2;
			}else{
				str+=I;
				num-=1;
			}
		}
	}
	return str;

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

//console.log(convertToRoman(36));


// do not edit below this line
module.exports = convertToRoman
