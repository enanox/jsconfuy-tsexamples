/**
 * Describes a task managed by someone (me by default).
 */
class ManagedTask {
    constructor (protected assignee: string = "Me") {}
    toString() {
        return this.assignee;
    }
}

/**
 * Defines a task that requires or consists of coding.
 */
class CodingTask extends ManagedTask {
    constructor(private language: string = "TypeScript") {
        super();
    }
    toString() {
        return this.assignee + " in " + this.language;
    }
}

/**
 * Lists the available phone numbers to be called.
 */
enum PhoneNumbers { 
    Home, 
    CellPhone
}

/**
 * Describes the behavior a task that requires to call someone.
 */
class PhoneTask extends ManagedTask {    
    constructor(private num: PhoneNumbers, private receiver: string) {
        super();
    }
    toString() {
        return this.assignee + " to call " + this.receiver + "´s " + (this.num == 1 ? "Home" : "Cell phone");
    }
}

/** 
 * Generic class to describe a task that will be managed by someone
 */
class Task<T extends ManagedTask> {
    private internalSignature: string;
    private managedTask: T;
    
    /**
     * Creates a {@link Task} instance.
     * @param {string} code - An internal task code.
     * @param {string} name - The task name.
     */
    constructor(private code: string, private name: string) {
        this.internalSignature = "[" + this.code + ": " + this.name + "]";
    }    
    
    /**
     * Register the managed task and the internal signature / description of the task.
     */
    set task(task: T) {
        this.managedTask = task;
        this.internalSignature = "[" + this.code + ": " + this.name + "] assigned to " + this.managedTask;
    }
    toString() {
        return this.internalSignature;
    }
}

export function genericClasses() {
    var codeBL = new Task<CodingTask>("#1", "Code BL");
    codeBL.task = new CodingTask("Java");
    var codeUI = new Task<CodingTask>("#2", "Code UI");
    codeUI.task = new CodingTask("HTML");
    var phoneJoe = new Task<PhoneTask>("#3", "Call Joe");
    phoneJoe.task = new PhoneTask(PhoneNumbers.CellPhone, "Joe");

    console.log("Generic classes");
    console.log(codeBL.toString());
    console.log(codeUI.toString());
    console.log(phoneJoe.toString());
}