let a = 0;
let b = 1;

let fibonacci = a + ", " + b;

for (let i = 2; i < 10; i++) {
    let c = a + b;
    fibonacci += ", " + c;
    a = b;
    b = c;
}

alert("Os primeiros 10 numeros da sequência de Fibonacci sao: " + fibonacci);
