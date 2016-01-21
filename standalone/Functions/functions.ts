/**
 * ## Typed parameters example
 * 
 * This calculates the conversion of the angle in degrees to radians,
 * or keeps the angle in degrees.
 * 
 * This example shows that every parameter must be fulfilled.
 * 
 * @param {number} value - The angle in degrees.
 * @param {boolean} toRad - Convert the angle to radians.
 */
function angle (value: number, toRad: boolean) {
    return toRad ? value * (Math.PI / 180) : value;
}

let degrees = angle(2, false);
console.log("Typed parameters:", degrees);

/**
 * ## Optional parameters example 
 * 
 * This calculates the same conversion as `angle`, with the 
 * difference that the `toRad` parameter is optional.
 * @param {number} value - The angle in degrees.
 * @param {boolean} toRad - Whether to calculate or not the conversion.   
 */
function angleFix (value: number, toRad?: boolean) {
    return toRad ? value * (Math.PI / 180) : value;
}

let degreeFix = angleFix(2);
console.log("Typed parameters (fix):", degreeFix, "\n\n");

/**
 * ## Default parameters example
 * 
 * Calculates the sum of a number array, allowing the partial sum of the
 * given start and end array positions. Provided they were not passed,
 * default start is the initial position, and default end is the array length.
 * @param {number[]} terms - The number array to sum.
 * @param {number=0} start - The start position to extract the array.
 * @param {number=terms.length} - The end position to extract the array.
 */
function sum (terms: number[], start = 0, end = terms.length) {
   let total = 0;

   for (let i = start; i < end; i++) {
       total += terms[i];   
   }
   return total;
}

let total = sum([1, 2, 3, 4, 5]);
let partialTotal = sum([1, 2, 3, 4, 5], 1, 3);
console.log("Default parameters sum:", total);
console.log("Default parameters partial sum:", partialTotal, "\n\n");

/**
 * ## Rest parameters example
 * 
 * Assuming a hypotetical given HTML structure, parses and sets the translated
 * texts on the elements that have the `data-translate` attribute.
 * 
 * @param {HTMLElement} view - The view to apply the translations
 * @param {string="ES"} language - The language to use (default `"ES"`)
 * @param {string[]} literals - The rest of the parameters to add ordered on the view.
 * 
 * ### Example
 * Usage: Assuming the following structure
 * ```html
 * <html>
 *   <head></head>
 *   <body>
 *     <header>
 *       <span data-translate="" class="back"></span>
 *       <span data-translate="" class="title"></span>
 *       <span data-translate="" class="contact_us"></span>
 *     </header>
 *   </body>
 * </html>
 * ```
 * 
 * ```typescript
 * let header: HTMLElement = document.getElementById("header");
 * translateTexts(header, "EN", "Back to top", "Title", "Contact us");
 * ```
 */
function translateTexts(view: HTMLElement, language: string = "ES", ...literals: string[]) {
    if (view && literals) {
        let translatableElements = view.querySelectorAll("span[data-translate]");    

        if (translatableElements.length >= literals.length) {
            for (let i = 0; i < literals.length; i++) {
                let element = <HTMLElement>translatableElements[i];
                element.innerHTML = literals[i];
            }
        }
    }
}

/**
 * ## Overloaded signatures example
 * 
 * Calculates the area of a rectangle, using different parameter types.
 * 
 * @param {number} a - The first dimension
 * @param {number} b - The second dimension
 */
function rectangleArea (a: number, b: number): number;
/**
 * ## Overloaded signatures example
 * 
 * Calculates the area of a rectangle, using different parameter types.
 * 
 * @param {string} a - The first dimension
 * @param {string} b - The second dimension
 */
function rectangleArea (a: string, b: string): number;
/**
 * ## Overloaded signatures example
 * 
 * Calculates the area of a rectangle, using different parameter types.
 * Fallback overload.
 * 
 * @param {any} a - The first dimension
 * @param {any} b - The second dimension
 */
function rectangleArea (a: any, b: any): number {
    return parseInt(a, 10) * parseInt(b, 10);
}

let area1 = rectangleArea(4, 2);
let area2 = rectangleArea("4", "2");

console.log("Overloads: Area1 =", area1, " Area 2 =", area2, "\n\n");

/**
 * ## Specialized overload signatures example.
 * 
 * Calculates the custom rectangle area. The same as {@member rectangleArea},
 * except that you could calculate the area of a 2x2 square passing it as the
 * single parameter.
 * 
 * @param {number} a - The first dimension.
 * @param {number} b - The second dimension.
 */
function customRectangleArea (a: number, b: number): number;
/**
 * ## Specialized overload signatures example.
 * 
 * Calculates the custom rectangle area. The same as {@member rectangleArea},
 * except that you could calculate the area of a 2x2 square passing it as the
 * single parameter.
 * 
 * @param {string} a - The first dimension.
 * @param {string} b - The second dimension.
 */
function customRectangleArea (a: string, b: string): number;
/**
 * ## Specialized overload signatures example.
 * 
 * Calculates the custom rectangle area. The same as {@member rectangleArea},
 * except that you could calculate the area of a 2x2 square passing it as the
 * single parameter.
 * 
 * @param {string="2x2 Square"} a - The custom calculation string.
 */
function customRectangleArea (a: "2x2 Square"): number;
/**
 * ## Specialized overload signatures example.
 * 
 * Calculates the custom rectangle area. The same as {@member rectangleArea},
 * except that you could calculate the area of a 2x2 square passing it as the
 * single parameter.
 * Fallback overload.
 * 
 * @param {any} a - The first dimension.
 * @param {any} b - The second dimension.
 */
function customRectangleArea (a: any, b?: any): number {
    return a == "2x2 Square" ? 4 : parseInt(a, 10) * parseInt(b, 10);
}

console.log("SpecializedOverloads 2*3 =", customRectangleArea(2, 3), " Square 2*2 =", customRectangleArea("2x2 Square"), "\n\n");

/**
 * ## Arrow functions example
 * 
 * The follwing object act as a helper, and shows the legacy and broken
 * way of trying to access the context from a callback function, and the
 * fixed way to do it using arrow functions.
 */
let Logger = {
    /**
     * Logger id.
     */
    id: "Logger",
    /**
     * The incorrect way to preserve context.
     */
    badLog: function () {
        setTimeout(function () {
            console.log(this.id + " is not logging. BAD " + this.id);       
        }, 1);
    },
    /**
     * The correct way of logging, using the correct context preservation.
     */
    log: function () {
        setTimeout(() => {            
            console.log(this.id + " is logging");
        },1);
    }
};

console.log("Arrow functions");
Logger.badLog();
Logger.log();
