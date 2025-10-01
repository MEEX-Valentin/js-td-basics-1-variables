/*****************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.
console.log(13 * 54 / 9 + 78);

// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.
console.log(13 * 54 / (43 + 78));
console.log(13 * 54 / 43 + 78);

// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.
const x = 5, y = 10;
console.log(`"La valeur de x est ${x} et la valeur de y est ${y}"`);

// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.
const a = 23;
const b = 28;

// ">" c'est la supériorité stricte
console.log(a > b);

// "<" c'est l'infériorité stricte
console.log(a < b);

// "===" c'est l'égalité
console.log(a === b);

// "!==" c'est l'inégalité
console.log(a !== b);

// ">=" c'est la supériorité
console.log(a >= b);

// "<=" c'est l'infériorité
console.log(a <= b);

// "!" devant la parenthèse c'est la négation
console.log(!(a > b));

// "&&" c'est truthy ou falsy
console.log(a && b);

// "&&" c'est truthy
console.log(a > 12 && b > 34);

// "||" c'est le "ou"
console.log(a > 12 || b > 34);

