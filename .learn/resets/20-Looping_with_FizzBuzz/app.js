function fizzBuzz() {  
	// Your code here
	for (let i = 1; i <= 100; i++) {
        
        // 1. Primero revisamos si es múltiplo de AMBOS (3 y 5)
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        // 2. Si no, revisamos si es múltiplo de 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        // 3. Si no, revisamos si es múltiplo de 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        // 4. Si no es ninguno de los anteriores, imprimimos el número
        else {
            console.log(i);
        }
    }
}

fizzBuzz();