let completedPolicies = [];
let livePolicies = [];

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

    let policyDiv = document.createElement("div");
    policyDiv.className = "policy " + policy["type"];
    // policyDiv.id = name of policy

    let info = document.createElement("p");
    let text =  policy['name'] + '\n' + 
                policy['description'] + '\n';

    if (policy['funding-diff'] != undefined && policy['funding-diff'] != 0) {
        text = text + '\nFunding: ' + policy['funding-diff'];
    }
    if (policy['research-diff'] != undefined && policy['research-diff'] != 0) {
        text = text + '\nResearch: ' + policy['research-diff'];
    }
    if (policy['support-diff'] != undefined && policy['support-diff'] != 0) {
        text = text + '\nSupport: ' + policy['support-diff'];
    }
    if (policy['carbon-diff'] != undefined && policy['carbon-diff'] != 0) {
        text = text + '\nCarbon: ' + policy['carbon-diff'];
    }
    if (policy['emission-diff'] != undefined && policy['emission-diff'] != 0) {
        text = text + '\nEmissions: ' + policy['emission-diff'];
    }


    info.innerText = text;

    policyDiv.appendChild(info);
    policyButton.appendChild(policyDiv);
    sidebar.appendChild(policyButton);
}

console.log("Hello, policy!")
console.log(policies);
