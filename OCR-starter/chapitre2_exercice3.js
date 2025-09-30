// Permutation de variables

// Solution classique utilisant une variable temporaire
let a= 3;
let b;

b = a;
a = b;

// Solution alternative valable uniquement pour des nombres
/*
// Échange de nombre1 et nombre2 sans variable temporaire
*/
let c = 16;
let d = 9;
[c,d] = [d,c];