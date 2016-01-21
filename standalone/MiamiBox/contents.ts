"use strict";

/**
 * Describes the contents on a certain shipment.
 */
export class Contents implements SortAsReceived {
    /**
     * @param {string[]} list - The list of the contents to be added to the shipment.
     */
	constructor(public list: string[]) {}
    
    /**
     * Sorts the package contents.
     * @param {string[]} unsortedList - The unsorted list.
     */
	sort (unsortedList: string[]): void {}
    
    /**
     * Pretty prints the list of contents.
     */
	toString(): string {
		return this.list.join(",");
	}
}

/**
 * Provides the behavior on how to sort the contents of the shipment. 
 */	
export interface SortAsReceived {
	sort (unsortedList: string[]);
}