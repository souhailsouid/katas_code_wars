const chestFunc = require('./chest_game')


describe('s\attendre à une liste de joueurs disponibles selon n', () => {
    it('si n est egale à 4 alors s\attendre à reçevoir une liste [1,2,3,4]', () => {
        expect(chestFunc.playersList(4)).toStrictEqual([1,2,3,4])
    })
    it('si n est egale à 8 alors s\attendre à reçevoir une liste [1,2,3,4,5,..,7,8]', () => {
        expect(chestFunc.playersList(8)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
    })
    it('s\attendre à reçevoir pour chaque joueur son Id', () => {
        const expectedObject = [
            { id: "id_1", player: 1 },
            { id: "id_2", player: 2 },
            { id: "id_3", player: 3 },
            { id: "id_4", player: 4 }
        ]
        expect(chestFunc.playersIDs(4)).toStrictEqual(expectedObject)
    })
})

describe("Connaitre le nombre d'\equipes possible", () => {
    
    it("s'\attendre au nombre d'\équipes possibles", () => {
        expect(chestFunc.count(4)).toStrictEqual(6)
        expect(chestFunc.count(1000)).toStrictEqual(499500)
        expect(chestFunc.count(2000)).toStrictEqual(1999000)
        expect(chestFunc.count(3000)).toStrictEqual(4498500)
        expect(chestFunc.count(4000)).toStrictEqual(7998000)
        expect(chestFunc.count(5000)).toStrictEqual(12497500)
        expect(chestFunc.count(20000)).toStrictEqual(199990000)  
    })     
})

