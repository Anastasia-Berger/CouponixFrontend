class Globals {
}

class DevelopmentGlobals extends Globals {
    public urls = {
        users : 'http://localhost:8080/api/users/',
        companies: 'http://localhost:9090/company/',

        coupons: 'https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/coupons'
        // coupons: 'http://localhost:9090/coupons'
    }
}

class ProductionGlobals extends Globals {
    public urls = {
        users : 'http://localhost:8080/api/users/',
        companies: 'http://localhost:8080/api/company/',

        coupons: 'https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/coupons'
        // coupons: 'http://localhost:9090/coupons'

    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;