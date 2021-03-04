import { agentName } from "./BusinessData.js"
import { Agent } from "./agent.js"

const contentTarget = document.querySelector(".businessList--newYork")
export const allAgents = () => {
    const businessArray = agentName;
    contentTarget.innerHTML = "<h1>Purchasing Agent</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Agent(businessObject)
        }
    );
}