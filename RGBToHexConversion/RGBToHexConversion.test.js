const rgbFunc = require("./RGBToHexConversion")

describe("identifier les valeurs valide", () => {
    it("la valeur  doit être une valeur supérieure ou égale  à  0  ", () => {
        expect(rgbFunc.isValidColor(-1, 255, 255)).toStrictEqual('invalid number');
    })
    it("la valeur  doit être une valeur inférieure ou égale  à  255 ", () => {
        expect(rgbFunc.isValidColor(256, 255, 255)).toStrictEqual('invalid number');
    })
})

describe("Si une valeur est invalide, remplacer la valeur par la valeur valide la plus proche, valeur < 0 return 0 et valeur > 255 return 255", () => {
    it("un rgb invalide infèrieur à 0 doit renvoyer une nouvelle  valeur valide egal à la plus proche, ici 0 ", () => {
       expect(rgbFunc.checkAndCorrectColor(-1)).toStrictEqual(0);
    })
    it("un rgb  invalide supérieur à 255 doit renvoyer une nouvelle  valeur valide egal à la plus proche, ici  255 ", () => {
       expect(rgbFunc.checkAndCorrectColor(265)).toStrictEqual(255);
    })
})

describe("Si les valeurs sont valide, retourner (convertir) en HEX (resultat", () => {
    it("si le nombre à une longueur infèrieur à 2 alors le résultat retourné doit être une chaine de caractère commencant par 0 puis le nombre ", () => {
        expect(rgbFunc.rgbToHex(3)).toStrictEqual('03');
        expect(rgbFunc.rgbToHex(9)).toStrictEqual('09');
        expect(rgbFunc.rgbToHex(0)).toStrictEqual('00');
    }) 
    it("le resultat doit avoir une longueur de de 2 égale à FF et doit être une chaine de caractère et en majuscule ", () => {
        expect(rgbFunc.colors(255)).toStrictEqual('FF');
    }) 
    it("le resultat doit avoir une longueur de de 2 égale à FF et doit être une chaine de caractère et en majuscule ", () => {
        expect(rgbFunc.colors(255)).toStrictEqual('FF');
    }) 
    it("le resultat doit avoir une longueur de de 6 et concaténé, Si 255 égale FF alors le résultat doit être FFFFFF ", () => {
        expect(rgbFunc.fullColorHex(255, 255, 255)).toStrictEqual('FFFFFF');
    }) 

})
describe("Si les valeurs sont valides, retourner (convertir) en HEX (resultat", () => {
    it("le resultat doit avoir une longueur de 6 zero et doit être une chaine de caractère ", () => {
        expect(rgbFunc.rgb(0, 0, 0)).toStrictEqual('000000');
    }) 
    it("le resultat doit avoir une longueur de 6 F et doit être une chaine de caractère ", () => {
        expect(rgbFunc.rgb(255, 255, 255)).toStrictEqual('FFFFFF');
    }) 
    it("le resultat doit retourner ADFF2F ", () => {
        expect(rgbFunc.rgb(173,255,47)).toStrictEqual('ADFF2F');
    }) 
    it("le resultat doit retourner FFFF2F ", () => {
        expect(rgbFunc.rgb(-173,255,47)).toStrictEqual('00FF2F');
    }) 
    it("le resultat doit retourner 12FFFF ", () => {
        expect(rgbFunc.rgb(18,269,289)).toStrictEqual('12FFFF');
    })   
})
 

