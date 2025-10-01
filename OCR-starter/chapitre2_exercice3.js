// Permutation de variables

// Solution classique utilisant une variable temporaire
let a= 3;
let b=4 ;
let s = null;
console.log(a,b,s)

s = b;
b = a;
a = s;
console.log(a,b,s)

// Solution alternative valable uniquement pour des nombres
/*
// Échange de nombre1 et nombre2 sans variable temporaire
*/
let c = 16;
let d = 9;
[c,d] = [d,c];
