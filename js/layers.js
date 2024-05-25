addLayer("CUM", {
    name: "Condensed Unknown Matter", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "Orange",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Condensed Unknown Matter", // Name of prestige currency
    baseResource: "Unknown Matter", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('CUM', 14)) mult = mult.times(upgradeEffect('CUM', 14))
        if (hasUpgrade('CUM', 15)) mult = mult.times(upgradeEffect('CUM', 15))
        if (hasUpgrade('CUM', 21)) mult = mult.times(4)
        if (hasUpgrade('CUM', 22)) mult = mult.times(upgradeEffect('CUM', 22))
        if (hasUpgrade('CUM', 23)) mult = mult.times(16)  
            return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "C", description: "C: Reset for Condensed Unknown Matter", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
,    upgrades: {
    11: {
        title: "Is This A Start?",
        description: "2.5x Your Unknown Matter",
        cost: new Decimal(1),
    },
    12: {
        title: "It Was!",
        description: "1.6x Your Unknown Matter",
        cost: new Decimal(2),
    },
    13: {
        title: "A Self Booster?",
        description: "Condensed Unknown Matter Boosts Unknown Matter",
        cost: new Decimal(7),
        effect() {
            return player[this.layer].points.add(1).pow(0.8)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    },
    14: {
        title: "Another Self Booster?",
        description: "Unknown Matter Boosts Condensed Unknown Matter",
        cost: new Decimal(23),
        effect() {
            return player.points.add(1).pow(0.2)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    },
    15: {
        title: "Another Self Booster? 2",
        description: "Unknown Matter Boosts Condensed Unknown Matter",
        cost: new Decimal(162),
        effect() {
            return player.points.add(1).pow(0.4)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    },
    21: {
        title: "Just A Normal Boost",
        description: "4x Condensed Unknown Matter and Unknown Matter",
        cost: new Decimal(1284),
    },
    22: {
        title: "What Is Happening Here",
        description: "A Hidden Boost, You Will Know Its There Tho",
        cost: new Decimal(1.2e6),
        effect() {
            return player.points.add(1).pow(0.3)
        },
    },
    23: {
        title: "Lets Start With Numbers",
        description: "Yes I Know Im Boring But... Just take 16x Condensed Unknown Matter As an Apology",
        cost: new Decimal(3e13),
        },
    24: {
        title: "1",
        description: "Unknown Matter Boosts Unknown Matter",
        cost: new Decimal(2e24),
        effect() {
            return player.points.add(1).pow(0.06)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    },
    
    },
}
)





addLayer("H", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
    resource: "Hollow Points",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).

    baseResource: "Unknown Matter",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e30),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.0000000001,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(3)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
})