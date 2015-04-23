"strict mode"
/// <reference path="./miamiboxapp.ts">
/// <reference path="./contents.ts">

module MiamiBox {
	export class Shipment {
		constructor (private trackingCode: string, private contents?: Contents) {}
		populateContents (items: string[]): void {
			this.contents = new Contents(items);
		}
        get shipmentContents(): Contents {
            return this.contents;
        }
	}
}