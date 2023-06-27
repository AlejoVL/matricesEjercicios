let a = [3,5,7,8];
let b = [1,2,3,4];

console.log("Suma de los vectores\n");
vectorN = [];
for (let i = 0; i < a.length; i++){    
    for(let j = 0; j < b[a].length; j++){
        vectorN.push(a[i] + b[j]);
    }
}

console.log(vectorN)