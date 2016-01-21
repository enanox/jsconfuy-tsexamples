"use strict";

/// <reference path="miamibox.ts" />
/// <reference path="shipmean.ts" />
/// <reference path="shipment.ts" />

import { getRates, Mean } from "./shipmean";
import { Shipment } from "./shipment";

/**
 * This is the main entry point for the "MiamiBox" application.
 * 
 * It just gather a few products (hoverboard, flux condenser, uranium) and calculates
 * the total price with shipping fees using the selected {@link Mean}.
 */
export class Main {
    /**
     * Executes the calculations and prints some info. 
     */
    static bootstrap (): void {
        var shipment: Shipment = new Shipment("AAA111");
        shipment.populateContents(['hoverboard', 'flux condenser', 'uranium']);

        console.log("Contents: ", shipment.shipmentContents);
        console.log("Full shipment info", shipment);
        console.log("How much?: ", getRates(150.25, 17.5, Mean.Chaski).toString());
    }
}

Main.bootstrap();