const rgbFunc = require("./RGBToHexConversion")


describe("identifier les valeurs valide", () => {
    it("la valeur  doit être une valeur supérieure ou égale  à  0  ", () => {
        expect(rgbFunc.checkValidValues(-1, 255, 255)).toStrictEqual('invalid number');
    })
    it("la valeur  doit être une valeur inférieure ou égale  à  255 ", () => {
        expect(rgbFunc.checkValidValues(256, 255, 255)).toStrictEqual('invalid number');
    })
})
describe("identifier l'index de la valeur invalide ", () => {
    it("Si la valeur R est invalide,  reperer l'index  ", () => {
        expect(rgbFunc.indexOfInvalidNumber([265, 22,233])).toStrictEqual(0);
    })
    it("Si la valeur G  est invalide,  reperer l'index  égal à 1   ", () => {
        expect(rgbFunc.indexOfInvalidNumber([0, 260, 255])).toStrictEqual(1);
    })
    it("Si la valeur B  est invalide,  reperer l'index égal à 2   ", () => {
        expect(rgbFunc.indexOfInvalidNumber([0, 250, 257])).toStrictEqual(2);
    })

})
describe("identifier les valeurs valides ", () => {
    it("Si une valeur est invalide, isoler les valeurs valides", () => {
        expect(rgbFunc.isolatedValidNumber([278, 255, 255])).toStrictEqual([255, 255]);
    })
})
describe("identifier les valeurs valides ", () => {
    it("Si une valeur est invalide, isoler les valeurs valides", () => {
        expect(rgbFunc.isolatedValidNumber([278, 255, 255])).toStrictEqual([255, 255]);
    })
})
describe("Si une valeur est invalide, repérer  l'index  de la  première valeur valide la plus proche ", () => {
   it("un rgb (valeur r invalide) doit renvoyer l'index valide egal ici à index 1 ", () => {
        expect(rgbFunc.indexOfClosestvalidNumber([-1, 255, 255])).toStrictEqual(1);
   })
    it("un rgb (valeur r invalide) doit renvoyer l'index valide egal ici à index 0 (car premier élément du tableau) ", () => {
        expect(rgbFunc.indexOfClosestvalidNumber([233, -1, 255])).toStrictEqual(0);
    })
    it("un rgb (valeur r invalide) doit renvoyer l'index valide egal ici à index 0 (car premier élément du tableau) ", () => {
        expect(rgbFunc.indexOfClosestvalidNumber([233, 0, -1])).toStrictEqual(0);
})
  
})
describe("Si une valeur est invalide, remplacer la valeur par la valeur la plus proche valide", () => {
     it("un rgb (valeur r invalide) doit renvoyer une nouvelle  valeur valide egal à la plus proche, ici index 1 ", () => {
         expect(rgbFunc.replaceInvalidNumber([-1, 255, 255])).toStrictEqual([255, 255, 255]);
     })
     it("un rgb (valeur g invalide) doit renvoyer une nouvelle  valeur valide egal à la plus proche, ici index 0 ", () => {
        expect(rgbFunc.replaceInvalidNumber([1, -1, 255])).toStrictEqual([1, 1, 255]);
     })
     it("un rgb (valeur b invalide) doit renvoyer une nouvelle  valeur valide egal à la plus proche, ici index 0 ", () => {
        expect(rgbFunc.replaceInvalidNumber([1, 3, -1])).toStrictEqual([1, 3, 1]);
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
describe("Si les valeurs sont valide, retourner (convertir) en HEX (resultat", () => {
    it("le resultat doit avoir une longueur de 6 zero et doit être une chaine de caractère ", () => {
        expect(rgbFunc.rgb(0, 0, 0)).toStrictEqual('000000');
    }) 
    it("le resultat doit avoir une longueur de 6 F et doit être une chaine de caractère ", () => {
        expect(rgbFunc.rgb(255, 255, 255)).toStrictEqual('FFFFFF');
    }) 
    it("le resultat doit retourner ADFF2F ", () => {
        expect(rgbFunc.rgb(173,255,47)).toStrictEqual('ADFF2F');
    }) 
})
 

// it ("un rgb avec valeurs égal à 0 donne un résultat égal à 000000",()=> {
//     expect(rgbFunc.rgb(0, 0, 0)).toStrictEqual("000000");
// })
// it ("un rgb avec valeurs égal à 255 donne un résultat égal à FFFFFF",()=> {
//     expect(rgbFunc.rgb(255, 255, 255)).toStrictEqual("FFFFFF");
// })
// it ("un rgb avec valeurs égal à 255 mais un b à 300  donne toujours un résultat égal à FFFFFF",()=> {
//     expect(rgbFunc.rgb(255, 255, 300)).toStrictEqual("FFFFFF");
// })