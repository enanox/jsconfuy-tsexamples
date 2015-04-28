"use strict";

/// <reference path="miamibox.ts" />
/// <reference path="shipmean.ts" />
/// <reference path="shipment.ts" />

import shipmentModule = require("./shipment");
import shipmeanModule = require("./shipmean");

export module MiamiBoxApp {
    export class Main {
        static bootstrap (): void {
            var shipment: shipmentModule.Shipment = new shipmentModule.Shipment("AAA111");
            shipment.populateContents(['hoverboard', 'flux condenser', 'uranium']);

            console.log("Contents: ", shipment.shipmentContents);
            console.log("Full shipment info", shipment);
            console.log("How much?: ", shipmeanModule.getRates(150.25, 17.5, shipmeanModule.Mean.Chaski).toString());
        }
    }
}

MiamiBoxApp.Main.bootstrap();