// Typed parameters
// ==========================================

function angle (value: number, toRad: boolean) {
   return toRad ? value * (Math.PI / 180) : value * (180 / Math.PI);
}

var degrees = angle(2, false);
console.log("Typed parameters:", degrees);

function angleFix (value: number, toRad?: boolean) {
   return toRad ? value * (Math.PI / 180) : value * (180 / Math.PI);
}

var degreeFix = angleFix(2);
console.log("Typed parameters (fix):", degreeFix, "\n\n");

// Default parameters
// ==========================================

function sum (terms: number[], start = 0, end = terms.length) {
   var total = 0;


   for (var i = start; i < end; i++) {
       total += terms[i];   
   }
   return total;
}

var total = sum([1, 2, 3, 4, 5]);
var partialTotal = sum([1, 2, 3, 4, 5], 1, 3);
console.log("Default parameters sum:", total);
console.log("Default parameters partial sum:", partialTotal, "\n\n");

// Rest parameters
// ==========================================

function translateTexts(view: HTMLElement, language: string = "ES", ...literals: string[]) {
    if (view && literals) {
        var translatableElements = view.querySelectorAll("span[data-translate]");    

        if (translatableElements.length >= literals.length) {
            for (var i = 0; i < literals.length; i++) {
                var element = <HTMLElement> translatableElements[i];
                element.innerHTML = literals[i];
            }
        }
    }
}

// Usage: Assuming the following structure
// <html>
//   <head></head>
//   <body>
//     <header>
//       <span data-translate="" class="back"></span>
//       <span data-translate="" class="title"></span>
//       <span data-translate="" class="contact_us"></span>
//     </header>
//   </body>
// </html>

// var header: HTMLElement = document.getElementById("header");
// translateTexts(header, "EN", "Back to top", "Title", "Contact us");

// Overloads
// ==========================================

function rectangleArea (a: number, b: number): number;
function rectangleArea (a: string, b: string): number;
function rectangleArea (a: any, b: any): number {
   return parseInt(a, 10) * parseInt(b, 10);
}
var area1 = rectangleArea(4, 2);
var area2 = rectangleArea("4", "2");

console.log("Overloads: Area1 =", area1, " Area 2 =", area2, "\n\n");

// Specialized overload signatures
// ==========================================

function customRectangleArea (a: number, b: number): number;
function customRectangleArea (a: string, b: string): number;
function customRectangleArea (a: "2x2 Square"): number;
function customRectangleArea (a: any, b?: any): number {
   return a == "2x2 Square" ? 4 : parseInt(a, 10) * parseInt(b, 10);
}

console.log("SpecializedOverloads 2*3 =", customRectangleArea(2, 3), " Square 2*2 =", customRectangleArea("2x2 Square"), "\n\n");

// Arrow functions
// ==========================================

var Logger = {
   id: "Logger",
   badLog: function () {
       setTimeout(function () {
           console.log(this.id + " is not logging. BAD " + this.id);       
       }, 1);
   },
   log: function () {
    setTimeout(() => {            
        console.log(this.id + " is logging");
    },1);
   }
};

console.log("Arrow functions");
Logger.badLog();
Logger.log();
