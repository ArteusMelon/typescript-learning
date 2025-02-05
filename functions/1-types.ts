// ----------- FONCTIONS ET PARAMETRES -----------
//  Plus d'informations sur les types primitifs utilisable pour les paramètres : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

/**
 * Fonction qui prend en paramètre une chaîne de caractère correspondant à un nom et qui retourne une chaîne saluant l'utilisateur.
 * 
 * Exemple : nom passé en paramètre -> "Bob"
 * Retour attendu : "Hello Bob"
 * 
 * @param name Le nom à utiliser
 */
export function getGreeting(name: string): string {
    return `Hello ${name}`;
}

/**
* Fonction qui concatène plusieurs nom pour obtenir le nom complet.
 * 
 * Exemple :
 * getFullName("Ada", "Lovelace") doit retourner "Ada Lovelace"
 * 
 * @param firstName Prénom
 * @param lastName Nom
 * @returns Le nom complet
 */
export function getFullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}

/**
 * Fonction qui retourne la somme de deux nombres.
 */
export function addNumbers(a: number, b: number): number {
    return a + b;
}

// ----------- PARAMETRES OPTIONNELS -----------

/**
 * Calcule la somme de deux ou trois nombres.
 * 
 * Les deux premiers nombres sont obligatoires et le dernier optionnel.
 * 
 * Plus d'informations sur les paramètres optionnels : https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/
 *  
 * @param a 1er nomnre, obligatoire
 * @param b 2ème nombre, obligatoire
 * @param c 3ème nombre, optionnel
 */
export function sumNumbers(a: number, b: number, c?: number): number {
    return c ? a + b + c : a + b;
}

/**
* Retourne une chaîne de caractères correspondant au nom complet de l'utilisateur.
 * 
 * Exemple :
 * greetFullName("Ada", "Lovelace", "Augusta") doit retourner "Hello Ada Augusta Lovelace"
 *  
 * @param firstName Prénom
 * @param lastName Nom
 * @param middleName "middle name" (optionnel)
 */
export function greetFullName(firstName: string, lastName: string, middleName?: string): string {
    return middleName ? "Hello "+ firstName + " " + middleName + " " + lastName : "Hello "+firstName + " " + lastName;

}

// ----------- UNIONS -----------

/**
 * Additionne les valeurs de deux paramètres qui peuvent être des nombre OU des chaînes de caractères
 * 
 * Dans le cas de chaîne de caractère il faudra les transformer en nombre.
 * 
 * Pour vérifier le type d'une variable il est possible d'utiliser "typeof" comme présenté par la réponse stackoverflow suivante : https://stackoverflow.com/a/35546468
 * 
 * Documentation : https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
 */
export function addNumbersOrStrings(a:string|number,b:string|number): number {
   if(typeof(a)=="string"){
    a=parseInt(a);
   }
   if(typeof(b)=="string"){
    b=parseInt(b);
   }
   return a+b;

}

/** Alias pouvant être utilisé pour la fonction "addNumbersOrStringsAlias" */
type StringOrNumber = string | number

/**
 * Reprenez la fonction fonction précédente et utilisez un alias en tant que type des paramètres.
 */

export function addNumbersOrStringsAlias(a:StringOrNumber,b:StringOrNumber): number {
    if(typeof(a)=="string"){
        a=parseInt(a);
       }
       if(typeof(b)=="string"){
        b=parseInt(b);
       }
       return a+b;
}

/**
 * Fonction fizzbuzz qui prend un nombre en paramètre.
 * 
 * Si le nombre en paramètre est divisible par 3, retourne "fizz"
 * Si le nombre en paramètre est divisible par 5, retourne "buzz"
 * Si le nombre en paramètre est divisible par 3 ET 5, retourne "fizzbuzz"
 * Si aucune des condition n'est atteinte, retourne le nombre original (et pas une chaîne de caractères)
 *  
 * @param a La valeur sur laquelle fizzbuzz va se baser.
 * @returns Le résultat attendu
 */
export function fizzbuzz(a:number): StringOrNumber {
    if(a%3==0 && a%5==0){
        return "fizzbuzz"
    }else if(a%3==0){
        return "fizz"
    }else if (a%5==0){
        return "buzz"
    }
        return a;
    
}
