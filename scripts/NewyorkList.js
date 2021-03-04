import { newyorkers } from "./BusinessData.js"
import { Company } from "./Business.js"

const contentTarget = document.querySelector(".businessList--newYork")
export const newYorkbus = () => {
    const businessArray = newyorkers;
    contentTarget.innerHTML = "<h1>New York Businnesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Company(businessObject)
        }
    );
}