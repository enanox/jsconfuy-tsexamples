"use strict";

/// <reference path="contents.ts" />
import { Contents } from "./contents";

/**
 * Tracks the consolidated and shipped package.
 */
export class Shipment {
    /**
     * Creates a nee instance of the package.
     * @param {string} trackingCode - The assigned code to the shipment.
     * @param {Contents} contents - The list of the shipment contents.
     */
	constructor (private trackingCode: string, private contents?: Contents) {}
    
    /**
     * Loads the contents of the package.
     * @param {string[]} items - The item list to add as contents.
     */
	populateContents (items: string[]): void {
		this.contents = new Contents(items);
	}
    
    /**
     * The package contents.
     */
    get shipmentContents(): Contents {
        return this.contents;
    }
}