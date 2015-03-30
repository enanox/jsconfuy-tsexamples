"strict mode";
/// <reference path="./shipment.ts" />
/// <reference path="./shipmean.ts" />
/// <reference path="./miamiboxapp.ts" />

var shipment: MiamiBox.Shipment = new MiamiBox.Shipment("AAA111");
shipment.populateContents(['hoverboard', 'flux condenser', 'uranium']);

console.log(shipment);
console.log("How much?: ", MiamiBox.Payment.getRates(150.25, 17.5, MiamiBox.Payment.Mean.Chaski).toString());