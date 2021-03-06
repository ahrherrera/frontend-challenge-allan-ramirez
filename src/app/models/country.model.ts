export class CountryResponse{
    public countries: Country[];

    constructor(countries: Country[]){
        this.countries = countries;
    }
}

export function loadLocalData() {
    const data: Country[] = [
        {
            "code": "AR",
            "name": "Argentina"
        },
        {
            "code": "AU",
            "name": "Australia"
        },
        {
            "code": "BR",
            "name": "Brazil"
        },
        {
            "code": "CA",
            "name": "Canada"
        },
        {
            "code": "CH",
            "name": "Switzerland"
        },
        {
            "code": "CL",
            "name": "Chile"
        },
        {
            "code": "CN",
            "name": "China"
        },
        {
            "code": "CO",
            "name": "Colombia"
        },
        {
            "code": "DE",
            "name": "Germany"
        },
        {
            "code": "DK",
            "name": "Denmark"
        },
        {
            "code": "ES",
            "name": "Spain"
        },
        {
            "code": "FR",
            "name": "France"
        },
        {
            "code": "GB",
            "name": "United Kingdom"
        },
        {
            "code": "HU",
            "name": "Hungary"
        },
        {
            "code": "IT",
            "name": "Italy"
        },
        {
            "code": "JP",
            "name": "Japan"
        },
        {
            "code": "KR",
            "name": "South Korea"
        },
        {
            "code": "MX",
            "name": "Mexico"
        },
        {
            "code": "SG",
            "name": "Singapore"
        },
        {
            "code": "US",
            "name": "United States"
        },
        {
            "code": "ZA",
            "name": "South Africa"
        }
    ];

    return data;
}

export class Country {
    public code: string;
    public name: string;

    constructor(code: string, name: string){
        this.code = code;
        this.name = name;
    }
}