
export class BaggageItem {
    constructor(
      private type: string,
      private weight: number 
    ) {}
  
    getType(): string {
      return this.type;
    }
  
    getWeight(): number {
      return this.weight;
    }
  }