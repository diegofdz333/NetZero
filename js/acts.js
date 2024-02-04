var data = 
`
[
    {
        "type": "law",
        "name": "Carbon Tax 1",
        "description": "Enact a small tax on each company proportional to emitted carbon",
        "funding-diff": 100,
        "support-diff": -30,
        "emission-diff": -1,
        "carbon-diff": 0,
        "act-required": "none",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "Carbon Tax 2",
        "description": "Enact a moderate tax on each company proportional to emitted carbon",
        "funding-diff": 150,
        "support-diff": -30,
        "emission-diff": -1,
        "carbon-diff": 0,
        "act-required": "Carbon Tax 1",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "Carbon Tax 3",
        "description": "Enact a large tax on each company proportional to emitted carbon",
        "funding-diff": 200,
        "support-diff": -30,
        "emission-diff": -1,
        "carbon-diff": 0,
        "act-required": "Carbon Tax 2",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "Reforestation 1",
        "description": "Order trees to be grown in urban centers.",
        "funding-diff": -10,
        "support-diff": 5,
        "emission-diff": 0,
        "carbon-diff": -3,
        "act-required": "none",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "Reforestation 2",
        "description": "Assign vast area of land as protected forests.",
        "funding-diff": -20,
        "support-diff": -5,
        "emission-diff": 0,
        "carbon-diff": -5,
        "act-required": "Reforestation 1",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "Reforestation 3",
        "description": "Repossess undeveloped land.",
        "funding-diff": -50,
        "support-diff": -5,
        "emission-diff": 0,
        "carbon-diff": -10,
        "act-required": "Reforestation 2",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "Reforestation 4",
        "description": "Restore the Amazon Rainforest",
        "funding-diff": -150,
        "support-diff": 10,
        "emission-diff": 0,
        "carbon-diff": -20,
        "act-required": "Reforestation 3",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "National Park Act 1",
        "description": "Make the new forests open to the public.",
        "funding-diff": -10,
        "support-diff": 10,
        "emission-diff": 0,
        "carbon-diff": 1,
        "act-required": "Reforestation 1",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "National Park Act 2",
        "description": "Expand the national forests into the repossessed land.",
        "funding-diff": -20,
        "support-diff": 5,
        "emission-diff": 0,
        "carbon-diff": 2,
        "act-required": "Reforestation 1",
        "research-required": "none"
    },
    {
        "type": "initiative",
        "name": "Education 1",
        "description": "Encourage scientists to talk more with community members.",
        "funding-diff": -5,
        "research-diff": -5,
        "support-diff": 5
    },
    {
        "type": "initiative",
        "name": "Education 2",
        "description": "Fund Enviornmental Science classes in public schools",
        "funding-diff": -50,
        "support-diff": 10,
        "act-required": "Education 1"
    },
    {
        "type": "initiative",
        "name": "Education 3",
        "description": "Make Enviornmental Science part of the Common Core",
        "funding-diff": -50,
        "support-diff": 10,
        "act-required": "Education 2"
    },
    {
        "type": "initiative",
        "name": "Education 4",
        "description": "Start a vast social media campaign for enviornmental education.",
        "funding-diff": -30,
        "support-diff": 10,
        "act-required": "Education 3"
    },
    {
        "type": "initiative",
        "name": "Education 5",
        "description": "Encourage scientists to regularly visit schools.",
        "funding-diff": -30,
        "research-diff": -10,
        "support-diff": 10,
        "act-required": "Education 4"
    },
    {
        "type": "initiative",
        "name": "Education 6",
        "description": "Pay full scholarships for prospective scientists.",
        "funding-diff": -100,
        "research-diff": 20,
        "support-diff": 10,
        "act-required": "Education 5"
    },
    {
        "type": "initiative",
        "name": "Education 7",
        "description": "Expand scholarship program to all students.",
        "funding-diff": -200,
        "research-diff": 20,
        "support-diff": 20,
        "act-required": "Education 6"
    },
    {
        "type": "research",
        "name": "Algae Capture",
        "description": "Capture carbon in biological matter and bury it deep in the ground.",
        "funding-diff": -10,
        "research-diff": -15,
        "act-required": "none",
        "research-required": "none"
    },
    {
        "type": "research",
        "name": "Genetically Modified Algae",
        "description": "Create an extremely efficient method of carbon capture.",
        "funding-diff": -50,
        "research-diff": -50,
        "act-required": "none",
        "research-required": "Algae Capture"
    },
    {
        "type": "initiative",
        "name": "Algae Capture Plant 1",
        "description": "Create a facility to grow and bury algae",
        "funding-diff": -100,
        "support-diff": 1,
        "emission-diff": -0.2,
        "carbon-diff": 0.5,
        "research-required": "Algae Capture"
    },
    {
        "type": "initiative",
        "name": "Algae Capture Plant 2",
        "description": "Create facilities world-wide.",
        "funding-diff": -100,
        "support-diff": 1,
        "emission-diff": -0.5,
        "carbon-diff": 1,
        "act-required": "Algae Capture Plant 1"
    },
    {
        "type": "initiative",
        "name": "Algae Capture Plant 3",
        "description": "Construct massive facilities to use the new Algae",
        "funding-diff": -200,
        "support-diff": 1,
        "emission-diff": -1,
        "carbon-diff": 2,
        "act-required": "Algae Capture Plant 2"
    },
    {
        "type": "initiative",
        "name": "Algae Capture Plant 4",
        "description": "The largest project in the history of mankind.",
        "funding-diff": -1000,
        "support-diff": 30,
        "emission-diff": -3,
        "carbon-diff": 10,
        "act-required": "Algae Capture Plant 3"
    },
    {
        "type": "research",
        "name": "Efficient Solar Panels",
        "description": "Encourage people to switch to green energy",
        "funding-diff": -20,
        "research-diff": -10,
        "carbon-diff": 1,
        "emission-diff": -0.1,
        "research-required": "Efficient Wind Turbines"
    },
    {
        "type": "research",
        "name": "Efficient Wind Turbines",
        "description": "Encourage people to switch to green energy",
        "funding-diff": -20,
        "research-diff": -10,
        "carbon-diff": 1,
        "emission-diff": -0.1,
        "research-required": "Efficient Geothermal"
    },
    {
        "type": "research",
        "name": "Efficient Geothermal",
        "description": "Encourage people to switch to green energy",
        "funding-diff": -20,
        "research-diff": -10,
        "carbon-diff": 1,
        "emission-diff": -0.1
    },
    {
        "type": "law",
        "name": "For the Greater Good",
        "description": "When the market won't do it, the government should step in. Make all use of fossil fuels illigal.",
        "support-diff": -90,
        "emission-diff": -2,
        "act-required": "Carbon Tax 3",
        "research-required": "Efficient Solar Panels"
    },
    {
        "type": "law",
        "name": "Tax Cut 1",
        "description": "Give back some money to the people",
        "funding-diff": -50,
        "support-diff": 5
    },
    {
        "type": "law",
        "name": "Green Energy Subsidies 1",
        "description": "Give tax credits for using green energy",
        "funding-diff": -100,
        "emission-diff": -0.1,
        "support-diff": 5,
        "act-required": "Tax Cut 1"
    },
    {
        "type": "law",
        "name": "Green Energy Subsidies 2",
        "description": "Give tax credits for using green energy",
        "funding-diff": -200,
        "emission-diff": -0.2,
        "support-diff": 5,
        "act-required": "Green Energy Subsidies 1"
    },
    {
        "type": "law",
        "name": "Green Energy Subsidies 3",
        "description": "Give tax credits for using green energy",
        "funding-diff": -300,
        "emission-diff": -0.3,
        "support-diff": 5,
        "act-required": "Green Energy Subsidies 2"
    },
    {
        "type": "law",
        "name": "Tax Cut 2",
        "description": "Give back some money to the people",
        "funding-diff": -100,
        "support-diff": 10,
        "act-required": "Tax Cut 1"
    },
    {
        "type": "law",
        "name": "Tax Cut 3",
        "description": "Give back some money to the people",
        "funding-diff": -150,
        "support-diff": 15,
        "act-required": "Tax Cut 2"
    },
    {
        "type": "law",
        "name": "Tax Cut 4",
        "description": "Give back some money to the people",
        "funding-diff": -200,
        "support-diff": 20,
        "act-required": "Tax Cut 3"
    },
    {
        "type": "research",
        "name": "Nuclear Energy",
        "description": "The cleaner alternative",
        "funding-diff": -100,
        "research-diff": -25,
        "support-diff": -10
    },
    {
        "type": "research",
        "name": "Fusion Reactor",
        "description": "The efficient alternative",
        "funding-diff": -200,
        "research-diff": -100,
        "support-diff": -10,
        "research-required": "Nuclear Energy"
    },
    {
        "type": "research",
        "name": "Cold Fusion",
        "description": "The epitome of science",
        "funding-diff": -200,
        "research-diff": -200,
        "research-required": "Fusion Reactor"
    },
    {
        "type": "initiative",
        "name": "Nuclear Power Plant",
        "description": "Give people an alternative to Fossil Fuels",
        "funding-diff": -50,
        "research-diff": -10,
        "support-diff": -10,
        "emission-diff": -0.5,
        "research-required": "Nuclear Energy"
    },
    {
        "type": "initiative",
        "name": "Fusion Power Plant",
        "description": "A more efficient alternative to Fossil Fuels",
        "funding-diff": -50,
        "research-diff": -10,
        "support-diff": -10,
        "emission-diff": -1.5,
        "research-required": "Fusion Reactor",
        "act-required": "Nuclear Power Plant"
    }, 
    {
        "type": "initiative",
        "name": "Cold Fusion Plant",
        "description": "The greatest achievement of modern science",
        "funding-diff": -50,
        "research-diff": -10,
        "support-diff": -10,
        "emission-diff": -3.5,
        "research-required": "Cold Fusion",
        "act-required": "Fusion Power Plant"
    }, 
    {
        "type": "initiative",
        "name": "Nuclear Education 1",
        "description": "Nuclear is safer and cleaner than fossil fuels",
        "funding-diff": -100,
        "support-diff": 15,
        "research-diff": 10,
        "research-required": "Nuclear Energy"
    }, 
    {
        "type": "initiative",
        "name": "Nuclear Education 2",
        "description": "Recover lost support from building reactors",
        "funding-diff": -100,
        "support-diff": 15,
        "research-diff": 50,
        "act-required": "Nuclear Education 1"
    },
    {
        "type": "initiative",
        "name": "Nuclear Education 3",
        "description": "Greatly expand grants to nuclear scientists",
        "funding-diff": -300,
        "research-diff": 100,
        "act-required": "Nuclear Education 2"
    },
    {
        "type": "law", 
        "name": "Accept Fossil Fuels Lobby", 
        "description": "I, mean, 1 billion dollars is 1 billion dollars",
        "funding-diff": 1000,
        "emission-diff": 100
    }
]
`;