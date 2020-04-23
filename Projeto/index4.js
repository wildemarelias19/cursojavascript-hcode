let calc =  (x1, x2,op)=>{
    return eval(`${x1} ${op} ${x2}`);
}

let resultado = calc(1,2,"*");

console.log(`A Soma é: ${resultado} reais`);
alert(`A Soma é: ${resultado} reais`);