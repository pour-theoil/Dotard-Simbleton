export const Agent = (companyObj) => {
    return `
    <section class="Company">
        <h2 class="companyName">${companyObj.nameFirst} ${companyObj.nameLast}</h2>
        <div class="companyAddress"> ${companyObj.companyName}</div>
        <div class="companyAddress"> ${companyObj.phoneWork}</div>
    </section>
    `
}