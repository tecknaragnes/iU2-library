// -- Låna om Drowned ---------------------------------
const reloanBtnDrown = document.querySelector(".omlan");
const reminderSec = document.querySelector(".sec.reminders");
reloanBtnDrown.addEventListener("click", () => {
    const bookNoticeDrown = document.querySelector(".bok");
    bookNoticeDrown.remove();
    const drownBookLoan = document.querySelector(".bok");
    const loanList = document.querySelector(".loans");
    loanList.append(drownBookLoan);
    const drownLoantime = document.querySelector(".loantime");
    drownLoantime.textContent = "Lån utgår: 01-05-2026"
    drownLoantime.style.color = "green";
    const noLoans = document.createElement("div");
    noLoans.classList.add("textbox");
    noLoans.innerHTML = `
    <p>Boken är nu omlånad. Du hittar den under rubriken "Lån"</p>`;
    reminderSec.append(noLoans);
});

//-- Ta bort Dune ---------------------------------------
const removeBtnDune = document.querySelector(".omlan.dune");
removeBtnDune.addEventListener("click", () => {
    const bookDuneRes = document.querySelector(".bok.dune");
    bookDuneRes.remove();
    const reserveSec = document.querySelector(".sec.reserve");
    const noBooks = document.createElement("div");
    noBooks.classList.add("textbox")
    noBooks.innerHTML = `
    <p>Du har inga reserverade böcker just nu.</p>`;
    reserveSec.append(noBooks);
})

//---VIKTIGT---
// X Låna om (ändra datum, flytta i DOM)
// X Ta bort reservation

//---eventuellt---
// Ändra hämtställe
// visa/ändra pinkod
// X Fälla ut mer info till böckerna
