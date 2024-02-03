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
        "funding-diff": 100,
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
        "funding-diff": 100,
        "support-diff": -30,
        "emission-diff": -1,
        "carbon-diff": 0,
        "act-required": "Carbon Tax 2",
        "research-required": "none"
    },
    {
        "type": "law",
        "name": "Reforestation 1",
        "description": "Order reforestation of many cut forests",
        "funding-diff": -10,
        "support-diff": -1,
        "emission-diff": 0,
        "carbon-diff": -1,
        "act-required": "none",
        "research-required": "none"
    },
    {
        "type": "research",
        "name": "Algae Capture",
        "description": "Find alternative ways of capturing carbon",
        "funding-diff": -10,
        "research-diff": -20,
        "support-diff": 0,
        "emission-diff": 0,
        "carbon-diff": 0,
        "act-required": "none",
        "research-required": "none"
    },
    {
        "type": "initiative",
        "name": "Algae Capture Plant",
        "description": "Create a facility to grow and bury algae",
        "funding-diff": -100,
        "research-diff": 0,
        "support-diff": 1,
        "emission-diff": -10,
        "carbon-diff": -1,
        "act-required": "none",
        "research-required": "Algae Capture"
    }
]
`;