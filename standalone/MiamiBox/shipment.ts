"use strict";

/// <reference path="contents.ts" />
import { Contents } from "./contents";

export class Shipment {
	constructor (private trackingCode: string, private contents?: Contents) {}
	populateContents (items: string[]): void {
		this.contents = new Contents(items);
	}
    get shipmentContents(): Contents {
        return this.contents;
    }
}