import { IBitcoinPriceIndexTime } from "./BitcoinPriceIndexTime"
import { IBitcoinPriceIndexBPI } from "./BitcoinPriceIndexBPI"
import { IBitcoinPriceIndexBPIUSD } from "./BitcoinPriceIndexBPIUSD" 

export interface IBitcoinPriceIndex{
    time: IBitcoinPriceIndexTime,
    disclaimer: string,
    chartName: string,
    bpi: IBitcoinPriceIndexBPI,
}