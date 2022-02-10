import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { ExchangeRatesConfiguration, CONFIG_TOKEN } from './configuration';
import { HttpClient } from '@angular/common/http';

import { DataModulesManager } from "@backbase/foundation-ang/data-http";

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers:    []
})
export class ExchangeRatesApiModule {
    public static forRoot(configurationFactory: () => ExchangeRatesConfiguration): ModuleWithProviders<ExchangeRatesApiModule> {
        return {
            ngModule: ExchangeRatesApiModule,
            providers: [ { provide: ExchangeRatesConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ExchangeRatesApiModule,
                 @Optional() http: HttpClient,
                 @Optional() dataModulesManager: DataModulesManager | null,
                 config: ExchangeRatesConfiguration,

        ) {
        if (parentModule) {
            throw new Error('ExchangeRatesApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }

        if (dataModulesManager) {
            dataModulesManager.setModuleConfig(CONFIG_TOKEN, {
                apiRoot: '',
                servicePath: config.basePath || '',
                headers: {},
            });
        }
    }
}
