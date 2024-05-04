import {BaggageItem} from "./BaggageItem";
export class Baggage {
    private items: BaggageItem[] = [];
    constructor(private weightLimit: number) {} 
  
    addItem(item: BaggageItem): void {
      this.items.push(item);
    }
  
    getItems(): BaggageItem[] {
      return this.items;
    }
  
    getTotalWeight(): number {
      return this.items.reduce((total, item) => total + item.getWeight(), 0);
    }
  
    isWithinWeightLimit(): boolean {
      return this.getTotalWeight() <= this.weightLimit;
    }
  }