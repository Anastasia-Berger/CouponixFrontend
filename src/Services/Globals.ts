class Globals {
}

class DevelopmentGlobals extends Globals {
    public urls = {
        // coupons: 'https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/coupons'
        coupons: 'http://localhost:8080/api/coupons'
    }
}

class ProductionGlobals extends Globals {
    public urls = {
        // coupons: 'https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/coupons'
        coupons: 'http://localhost:8080/api/coupons'

    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;