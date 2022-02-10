import { InjectionToken } from '@angular/core';

export const EXCHANGE_RATES_BASE_PATH = new InjectionToken<string>('EXCHANGE_RATES_BASE_PATH');
export const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}
