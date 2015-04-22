// Generic function
// ----------------------------------

function sort<T>(list: T[], compareFunction?: (a: any, b: any) => number): T[] {
   if (compareFunction) { 
       return list.sort(compareFunction); 
   }
   return list.sort(function(a: any, b: any) { 
       return a - b; 
   });
}

var sortedList = sort<number>([1,6,7,8,3,4]);
console.log("Generic functions");
console.log(sortedList.toString()); // [1, 3, 4, 6, 7, 8]

var sortedStringList = sort<string>(["dummy", "foo", "bar", "bazz"], function (a, b) {
    return a.length - b.length;
});
console.log(sortedStringList.toString(), "\n\n"); // ["foo", "bar", "bazz", "dummy"]

// Generic class
// ----------------------------------
class ManagedTask {
    constructor (protected assignee: string = "Me") {}
    toString() {
        return this.assignee;
    }
}

class CodingTask extends ManagedTask {
    constructor(private language: string = "TypeScript") {
        super();
    }
    toString() {
        return this.assignee + " in " + this.language;
    }
}

enum PhoneNumbers { 
    Home, 
    CellPhone
}

class PhoneTask extends ManagedTask {    
    constructor(private num: PhoneNumbers, private receiver: string) {
        super();
    }
    toString() {
        return this.assignee + " to call " + this.receiver + "´s " + (this.num == 1 ? "Home" : "Cell phone");
    }
}

class Task<T extends ManagedTask> {
    private internalSignature: string;
    private managedTask: T;
    constructor(private code: string, private name: string) {
        this.internalSignature = "[" + this.code + ": " + this.name + "]";
    }    
    set task(task: T) {
        this.managedTask = task;
        this.internalSignature = "[" + this.code + ": " + this.name + "] assigned to " + this.managedTask;
    }
    toString() {
        return this.internalSignature;
    }
}

var codeDB = new Task<CodingTask>("#1", "Code DB");
codeDB.task = new CodingTask();
var codeUI = new Task<CodingTask>("#2", "Code UI");
codeUI.task = new CodingTask("HTML");
var phoneJoe = new Task<PhoneTask>("#3", "Call Joe");
phoneJoe.task = new PhoneTask(PhoneNumbers.CellPhone, "Joe");

console.log("Generic classes");
console.log(codeDB.toString());
console.log(codeUI.toString());
console.log(phoneJoe.toString());