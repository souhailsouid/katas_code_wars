const observedPin  = require("./theObservedPIN")
it ("un pin vide donne un résultat vide",()=> {
    expect(observedPin.getPINs("")).toStrictEqual([]);
})
it ("un pin qui est égal à 0  donne un résultat 0 ou 8",() => {
    expect(observedPin.getPINs("0")).toStrictEqual(["0", "8"]);
})
it ("un pin qui est égal à 1  donne un résultat 1 ou 2 ou 4",() => {
    expect(observedPin.getPINs("1")).toStrictEqual(["1", "2", "4"]);
})
it ("un pin qui est égal à 5  donne un résultat   2 ou 4 ou 5 ou 6 ou 8",() => {
    expect(observedPin.getPINs("5")).toStrictEqual(["2", "4", "5", "6", "8"]);
})
it ("un pin qui est égal à 11  donne un résultat 11 ou 22...",() => {
    expect(observedPin.getPINs("11")).toStrictEqual(["11", "22", "44", "12", "21","14","41","24","42"].sort());
})
it ("un pin qui est égal à 13  donne un résultat 13...",() => {
    expect(observedPin.getPINs("13")).toStrictEqual(["12","13","16","22","23","26","42","43","46"].sort());
})
