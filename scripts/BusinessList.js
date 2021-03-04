import { busData } from "./BusinessData.js"
import { Company } from "./Business.js"

const contentTarget = document.querySelector(".clientlist")

export const BusinessList = () => {
    const businessArray = busData();
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Company(businessObject)
        }
    );
}

