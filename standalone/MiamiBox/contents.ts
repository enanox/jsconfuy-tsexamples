"strict mode";

/// <reference path="./miamiboxapp.ts"/>

module MiamiBox {
	export class Contents implements SortAsReceived {
		constructor(public list: string[]) {}
		sort (unsortedList: string[]): void {}
		toString(): string {
			return this.list.join(",");
		}
	}	
	export interface SortAsReceived {
		sort (unsortedList: string[]);
	}
}