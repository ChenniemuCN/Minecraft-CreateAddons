ServerEvents.recipes(event =>{
    const create = event.recipes.create
    const createv = event.recipes.vintageimprovements

    //Add "ethylene_fluid" As a fuel
    Item.of('createdelight:ethylene_fluid_bucket').item.craftingRemainder = Item.of('minecraft:bucket').item;
    Item.getItem('createdelight:ethylene_fluid_bucket').burnTime=20*280;//可燃烧28个物品
    //Add Indirect Hydration Process for Ethanol production
    createv.pressurizing(
        Fluid.of("createdieselgenerators:ethanol",200),

        [
            Fluid.water(250),
            Fluid.of("vintageimprovements:sulfuric_acid",250),
            Fluid.of("createdelight:ethylene_fluid",200),
        ]
    )
        .secondaryFluidInput(0)
        .heated()
        .id("createdelight:pressurizing/ethanol_from_ethylene_beta")
})
