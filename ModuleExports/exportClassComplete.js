const hiddenAssets = { TheCloset: "Diamonds and gold" };

class TreasureIsland {
    constructor(){
        console.log('You have invoked the treasure island');
    }

    masterOfTreasures(incoming){
        return { name: incoming };
    }

    set coast(coast) {
        this._coast = coast;
    }

    get coast(){
        return this._coast;
    }
}

module.exports = { TreasureIsland: TreasureIsland, hiddenAssets: hiddenAssets };

//// Other ways of exporting ////
// module.exports.TreasureIsland = TreasureIsland;
// module.exports.hiddenAssets = hiddenAssets;
