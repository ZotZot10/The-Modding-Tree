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
            return player.points.add(1).pow(0.1)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    },



},
})
