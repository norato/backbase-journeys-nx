import { ProductSummaryHttpServiceMocksProvider } from '@backbase/data-ang/arrangements';
import { ContactsHttpServiceMocksProvider } from '@backbase/data-ang/contact-manager';
import { TransactionClientHttpServiceMocksProvider } from '@backbase/data-ang/transactions';
import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

// import { ExchangeHttpServiceMocksProvider } from 'exchange-rates-api';

export const mockProviders = [
  createMocksInterceptor(),
  ProductSummaryHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  ContactsHttpServiceMocksProvider,
  // ExchangeHttpServiceMocksProvider,
];

export const environment = {
  production: false,
  mockProviders,
};
