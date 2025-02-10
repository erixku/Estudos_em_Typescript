//1. Type guard
function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a+b);
    } else {
        console.log("Impossível realizar a soma");
    }
}

//2. Checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
    if(operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    } else {
        console.log("Por favor, defina uma operação")
    }
}

//3. Instance of