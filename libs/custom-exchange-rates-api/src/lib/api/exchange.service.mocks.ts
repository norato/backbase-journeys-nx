import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';

/**
* Mocks provider for /serviceName/v1/exchange/currencies URL pattern
*/
export const ExchangeHttpServiceGetCurrenciesMocksProvider: Provider = createMocks([{
        urlPattern: "/serviceName/v1/exchange/currencies",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: [ {
  "code" : "EUR"
}, {
  "code" : "GBP"
}, {
  "code" : "USD"
} ]
                },
                {
                    status: 400,
                    body: {
  "message" : "Bad Request",
  "errors" : [ {
    "message" : "Value Exceeded. Must be between {min} and {max}.",
    "key" : "common.api.shoesize",
    "context" : {
      "max" : "50",
      "min" : "1"
    }
  } ]
}
                },
                {
                    status: 500,
                    body: {
  "message" : "Description of error"
}
                },
    ]
}]);
/**
* Mocks provider for /serviceName/v1/exchange/rates URL pattern
*/
export const ExchangeHttpServiceGetRatesMocksProvider: Provider = createMocks([{
        urlPattern: "/serviceName/v1/exchange/rates",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: [ {
  "rate" : 1.1279,
  "source" : "EUR",
  "target" : "USD",
  "time" : "2019-03-13T00:00:00+0000"
}, {
  "rate" : 1.12504,
  "source" : "EUR",
  "target" : "USD",
  "time" : "2019-03-12T00:00:00+0000"
}, {
  "rate" : 1.12235,
  "source" : "EUR",
  "target" : "USD",
  "time" : "2019-03-11T00:00:00+0000"
}, {
  "rate" : 1.12341,
  "source" : "EUR",
  "target" : "USD",
  "time" : "2019-03-10T00:00:00+0000"
} ]
                },
                {
                    status: 400,
                    body: {
  "message" : "Bad Request",
  "errors" : [ {
    "message" : "Value Exceeded. Must be between {min} and {max}.",
    "key" : "common.api.shoesize",
    "context" : {
      "max" : "50",
      "min" : "1"
    }
  } ]
}
                },
                {
                    status: 500,
                    body: {
  "message" : "Description of error"
}
                },
    ]
}]);

export const ExchangeHttpServiceMocksProvider: Provider = createMocks(
    [
    {
        urlPattern: "/serviceName/v1/exchange/currencies",
        method: "GET",
        responses: [

            {
                status: 200,
                body: [ {
  "code" : "EUR"
}, {
  "code" : "GBP"
}, {
  "code" : "USD"
} ]
            },

            {
                status: 400,
                body: {
  "message" : "Bad Request",
  "errors" : [ {
    "message" : "Value Exceeded. Must be between {min} and {max}.",
    "key" : "common.api.shoesize",
    "context" : {
      "max" : "50",
      "min" : "1"
    }
  } ]
}
            },

            {
                status: 500,
                body: {
  "message" : "Description of error"
}
            },
    ]
},
    {
        urlPattern: "/serviceName/v1/exchange/rates",
        method: "GET",
        responses: [

            {
                status: 200,
                body: [ {
  "rate" : 1.1279,
  "source" : "EUR",
  "target" : "USD",
  "time" : "2019-03-13T00:00:00+0000"
}, {
  "rate" : 1.12504,
  "source" : "EUR",
  "target" : "USD",
  "time" : "2019-03-12T00:00:00+0000"
}, {
  "rate" : 1.12235,
  "source" : "EUR",
  "target" : "USD",
  "time" : "2019-03-11T00:00:00+0000"
}, {
  "rate" : 1.12341,
  "source" : "EUR",
  "target" : "USD",
  "time" : "2019-03-10T00:00:00+0000"
} ]
            },

            {
                status: 400,
                body: {
  "message" : "Bad Request",
  "errors" : [ {
    "message" : "Value Exceeded. Must be between {min} and {max}.",
    "key" : "common.api.shoesize",
    "context" : {
      "max" : "50",
      "min" : "1"
    }
  } ]
}
            },

            {
                status: 500,
                body: {
  "message" : "Description of error"
}
            },
    ]
},
]
);


