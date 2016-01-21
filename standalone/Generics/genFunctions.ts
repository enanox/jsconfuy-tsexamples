
/**
 * Sorts a list of items using a given method or using the default comparison.
 * @param {T[]} list - the generic list of items
 * @param {a: any, b: any} compareFunction - the method to compare the items.
 */
function sort<T>(list: T[], compareFunction?: (a: any, b: any) => number): T[] {
   if (compareFunction) { 
       return list.sort(compareFunction); 
   }
   return list.sort(function(a: any, b: any) { 
       return a - b; 
   });
}

export function genericSort() {
    var sortedList = sort<number>([1,6,7,8,3,4]);
    console.log("Generic functions");
    console.log("Sorted number list:", sortedList.toString()); // [1, 3, 4, 6, 7, 8]

    var sortedStringList = sort<string>(["dummy", "foo", "bar", "bazz"], function (a, b) {
        return a.length - b.length;
    });
    
    console.log("Sorted string list:", sortedStringList.toString(), "\n\n"); // ["foo", "bar", "bazz", "dummy"]   
}
