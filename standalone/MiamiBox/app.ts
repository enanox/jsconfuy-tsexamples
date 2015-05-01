"use strict";

/// <reference path="miamibox.ts" />
/// <reference path="shipmean.ts" />
/// <reference path="shipment.ts" />

import { getRates } from "./shipmean";
import { Mean } from "./shipmean";
import { Shipment } from "./shipment";

export module MiamiBoxApp {
    export class Main {
        static bootstrap (): void {
            var shipment: Shipment = new Shipment("AAA111");
            shipment.populateContents(['hoverboard', 'flux condenser', 'uranium']);

            console.log("Contents: ", shipment.shipmentContents);
            console.log("Full shipment info", shipment);
            console.log("How much?: ", getRates(150.25, 17.5, Mean.Chaski).toString());
        }
    }
}

MiamiBoxApp.Main.bootstrap();