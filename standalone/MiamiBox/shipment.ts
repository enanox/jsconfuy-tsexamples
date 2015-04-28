"use strict";

/// <reference path="contents.ts" />
import sContents = require("./contents");

export class Shipment {
	constructor (private trackingCode: string, private contents?: sContents.Contents) {}
	populateContents (items: string[]): void {
		this.contents = new sContents.Contents(items);
	}
    get shipmentContents(): sContents.Contents {
        return this.contents;
    }
}