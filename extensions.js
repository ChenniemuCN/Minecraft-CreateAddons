ServerEvents.recipes(event =>{
    const create = event.recipes.create
    const createv = event.recipes.vintageimprovements

    //Add "ethylene_fluid" As a kind of fuel
    Item.of('createdelight:ethylene_fluid_bucket').item.craftingRemainder = Item.of('minecraft:bucket').item;
    Item.getItem('createdelight:ethylene_fluid_bucket').burnTime=20*280;
    //Add lubricats As a kind of fuel
    Item.of('createdelight:lubricating_oil_bucket').item.craftingRemainder = Item.of('minecraft:bucket').item;
    Item.getItem('createdelight:lubricating_oil_bucket').burnTime=200*50;
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

//Tag ethylene with a create tag that makes it be fuel
ServerEvents.tags("fluid",event =>{
    event.add("forge:ethylene",['createdelight:ethylene_fluid']);
    // event.add("forge:lubricants",['createdelight:lubricating_oil']);
})
