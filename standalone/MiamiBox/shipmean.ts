"use strict";

/**
 * Describe the list of available options on how to send a package.
 */
export enum Mean {
	Chaski = 1,
	AirMail,
	PriorityMail
};

/**
 * Retrieves the fees for each {@link Mean}.
 */
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

/**
 * Calculates the rates for the product price, the weight of the package and the calculated
 * mean fee.
 * 
 * @param {number} productFee - The product price.
 * @param {number} weight - The combinated weight of the contents of the package.
 * @param {Mean} shipmentMean - The used transport mean.
 */
export function getRates(productFee: number, weight: number, shipmentMean: Mean) {
	return meanFee(shipmentMean) * weight * productFee;
}