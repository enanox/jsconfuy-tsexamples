"strict mode"
/// <reference path="./miamiboxapp.ts">

module MiamiBox.Payment {
	export enum Mean {
		Chaski = 1,
		AirMail,
		PriorityMail
	}
	function meanFee (which: Mean): number {
		switch (which) {
			case Mean.Chaski:
				return 145.54;
			case Mean.AirMail: 
				return 12.25;
			case Mean.PriorityMail: 
				return 2 * 12.25;
		}

		throw "Missing shipment mean";
	}
	export function getRates(productFee: number, weight: number, shipmentMean: Mean) {
		return meanFee(shipmentMean) * weight * productFee;
	}
}