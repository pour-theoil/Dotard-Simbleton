import { manufactureBusiness } from "./BusinessData.js"
import { Company } from "./Business.js"

const contentTarget = document.querySelector(".businessList--manufacturing")
export const manuBusines = () => {
    const businessArray = manufactureBusiness;
    contentTarget.innerHTML = "<h1>Manufacturing Business</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Company(businessObject)
        }
    );
}