export const Company = (companyObj) => {
    return `
    <section class="Company">
        <h2 class="companyName">${companyObj.companyName}</h2>
        <div class="companyAddress"> ${companyObj.addressFullStreet}</div>
        <div class="companyAddress"> ${companyObj.addressCity}, ${companyObj.addressStateCode} ${companyObj.addressZipCode}</div>
    </section>
    `
}