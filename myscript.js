

for (let i = 1; i < 101; i++) {
    let numero = i;

    if ((numero % 5 == 0) && (numero % 3 == 0)) {
        console.log("FizzBuzz")  
    } else if (numero % 5 == 0){
        console.log("Buzz")
    } else if (numero % 3 == 0 ){
        console.log("Fizz")
    } else {
        console.log(numero)
    }
}