const calculating = require('./CalculatingwithFunctions')
describe("retourner les valeurs correspondante pour chaque function", () => {
    it("la function zero return  0", () => {
        expect(calculating.zero()).toStrictEqual(0);
    })
    it("la function one return  1", () => {
        expect(calculating.one()).toStrictEqual(1);
    })
})
describe("opérateur plus ", () => {

    it("Si on ajoute une function en  deuxieme argument la function zero doit retourner 1", () => {
        expect(calculating.zero(calculating.plus(calculating.one()))).toStrictEqual(1);
    })
    it("Si on ajoute une function en  deuxieme argument la function one doit retourner 2", () => {
        expect(calculating.one(calculating.plus(calculating.one()))).toStrictEqual(2);
    })

    it("Si on ajoute une function en  deuxieme argument la function seven() plus five() doit retourner 35", () => {
        expect(calculating.four(calculating.plus(calculating.nine()))).toStrictEqual(13);
    })

})

describe("opérateur - minus", () => {
    it(" la function seven() minus() five() doit retourner 2", () => {
        expect(calculating.seven(calculating.minus(calculating.five()))).toStrictEqual(2);
    })
    it(" la function eight() minus() three() doit retourner 5", () => {
        expect(calculating.eight(calculating.minus(calculating.three()))).toStrictEqual(5);
    })
})
describe("opérateur * times", () => {
    it(" la function three() times() three() doit retourner 9", () => {
        expect(calculating.three(calculating.times(calculating.three()))).toStrictEqual(9);
    })
    it(" la function seven() times() five() doit retourner 35", () => {
        expect(calculating.seven(calculating.times(calculating.five()))).toStrictEqual(35);
    })
})
describe("opérateur / dividedBy", () => {
    it(" la function two() dividedBy() two() doit retourner 1", () => {
        expect(calculating.two(calculating.dividedBy(calculating.two()))).toStrictEqual(1);
    })
    it(" la function six() dividedBy() five() doit retourner 3", () => {
        expect(calculating.six(calculating.dividedBy(calculating.two()))).toStrictEqual(3);
    })
})