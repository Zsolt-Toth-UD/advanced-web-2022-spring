### REST API

#### Software Architectures
 - Monolithic
 - Component Based Development
 - Client Server
 - NTier
 - __Distributed Systems__
 - __Micro Services__

#### Principles
 - KISS
 - DRY
 - Separation of Concerns
 - SOLID

##### Parts of URL
```
schema://host[:port]/path[?query][#fragment]
http://localhost:3000/cars?branc=bmw#2
```

1) Schema: http, ssh, ftp, ...
2) Host: localhost, 127.0.0.1, ...
3) Port: number
4) Path: resource
5) Query: key-value, string
6) Fragment

#### REST API
- Stateless
- Resources 
- URL Patterns
  - nouns
  - plural
  - hierarchy
- CRUD Methods
  - Create: POST
  - Read: GET
  - Update: PUT, PATCH
  - Delete: DELETE


``` 
GET /cars
[ { plateNo: '...', brand: '...', ...},
{ plateNo: '...', brand: '...', ...},
...
]
```

``` 
GET /cars?brand=bmw
[ { plateNo: '...', brand: 'bmw ...},
{ plateNo: '...', brand: 'bmw ...},
...
]
```

``` 
GET /cars/abc123
{ plateNo: 'abc123', brand: '...', ...}
```

``` 
GET /cars/abc123/brand
{ brand: '...'}
```

``` 
GET /cars/unknonwPlateNo
HTTP 404 Not Found
```

``` 
POST /cars
{ 
    plateNo: '...',
    brand: '...',
    ...
}

HTTP 200 OK
{cars}

HTTP 400 Bad Requet
[ {error} ]

HTTP 500 Server Error
{ message: 'Already Exists' }
 
```
