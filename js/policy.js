let completedPolicies = [];
let livePolicies = [];
let liveButtons = [];

function resetPolicies() {
    completedPolicies = [];
    livePolicies = [];
    liveButtons.forEach((element) => {
        element.remove();
    })
    liveButtons = [];
}

function fixPolicies() {
    policies.forEach((element) => {
        if (element["support-diff"] === undefined) {
            element["support-diff"] = 0;
        }
        if (element["research-diff"] === undefined) {
            element["research-diff"] = 0;
        }
        if (element["funding-diff"] === undefined) {
            element["funding-diff"] = 0;
        }
        if (element["carbon-diff"] === undefined) {
            element["carbon-diff"] = 0;
        }
        if (element["emission-diff"] === undefined) {
            element["emission-diff"] = 0;
        }
        if (element["act-required"] === undefined) {
            element["act-required"] = "none";
        }
        if (element["research-required"] === undefined) {
            element["research-required"] = "none";
        }
    })
}

function getAvailablePolicies() {
    let availablePolicies = [];
    policies.forEach(element => {
        if (!completedPolicies.includes(element) && !livePolicies.includes(element)) {
            let actReq = element['act-required'];
            let resReq = element['research-required'];
            let actReqMet = actReq == "none" || completedPolicies.some((element) => element['name'] == actReq);
            let resReqMet = resReq == "none" || completedPolicies.some((element) => element['name'] == resReq);
            if (actReqMet && resReqMet) {
                availablePolicies.push(element);
            }
        }
    });
    return availablePolicies;
}

function refreshPolicies() {
    let availablePolicies = getAvailablePolicies();
    availablePolicies.forEach(element => {
        addPolicy(element);
    })
}

function addPolicy(policy) {
    let sidebar = document.getElementById("policy-sidebar");

    let policyButton = document.createElement('button');
    policyButton.className = "policyButton " + policy['type'];
    policyButton.addEventListener("click", function() {
        let necessarySupport = support + policy['support-diff'] >= 0;
        let necessaryFunding = funding + policy['funding-diff'] >= 0;
        let necessaryResearch = research + policy['research-diff'] >= 0;
        if (necessarySupport && necessaryFunding && necessaryResearch) {
            completedPolicies.push(policy)
            policyButton.remove();
            funding += policy['funding-diff'];
            support += policy['support-diff'];
            carbon += policy['carbon-diff'];
            research += policy['research-diff'];
            emissionRate += policy['emission-diff'];
            updateResources();
            refreshPolicies();
        }
    });

    livePolicies.push(policy)
    liveButtons.push(policyButton);

    let policyDiv = document.createElement("div");
    policyDiv.className = "policy " + policy["type"];

    let name = document.createElement('p');
    let nameText = policy['name'] + '\n';
    name.innerHTML = `<strong>${nameText}</strong>` 

    let info = document.createElement("p");
    let infoText = policy['description'] + '\n';

    if (policy['funding-diff'] != undefined && policy['funding-diff'] != 0) {
        infoText = infoText + '\nFunding: ' + policy['funding-diff'];
    }
    if (policy['research-diff'] != undefined && policy['research-diff'] != 0) {
        infoText = infoText + '\nResearch: ' + policy['research-diff'];
    }
    if (policy['support-diff'] != undefined && policy['support-diff'] != 0) {
        infoText = infoText + '\nSupport: ' + policy['support-diff'];
    }
    if (policy['carbon-diff'] != undefined && policy['carbon-diff'] != 0) {
        infoText = infoText + '\nCarbon: ' + policy['carbon-diff'];
    }
    if (policy['emission-diff'] != undefined && policy['emission-diff'] != 0) {
        infoText = infoText + '\nEmissions: ' + policy['emission-diff'];
    }

    info.innerText = infoText;

    policyDiv.appendChild(name);
    policyDiv.appendChild(info);
    policyButton.appendChild(policyDiv);
    sidebar.appendChild(policyButton);
}