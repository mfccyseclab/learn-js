// App State
let balance = 0;
let expenses = [];

// Modal Elements
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("closeModal");

// Buttons
document.getElementById("viewBalance").addEventListener("click", () => {
  showModal(`Your current balance is: <strong>₦${balance.toFixed(2)}</strong>`);
});

document.getElementById("addIncome").addEventListener("click", () => {
  const incomeAmount = prompt("Enter income amount:");
  if (incomeAmount && !isNaN(incomeAmount)) {
    balance += parseFloat(incomeAmount);
    showModal(`Income of ₦${parseFloat(incomeAmount).toFixed(2)} added successfully.`);
  } else {
    alert("Invalid amount entered.");
  }
});

document.getElementById("addExpense").addEventListener("click", () => {
  const expenseName = prompt("Enter expense name:");
  const expenseAmount = prompt("Enter expense amount:");
  if (expenseName && expenseAmount && !isNaN(expenseAmount)) {
    expenses.push({ name: expenseName, amount: parseFloat(expenseAmount) });
    balance -= parseFloat(expenseAmount);
    showModal(`Expense "${expenseName}" of ₦${parseFloat(expenseAmount).toFixed(2)} added successfully.`);
  } else {
    alert("Invalid input.");
  }
});

document.getElementById("viewExpenses").addEventListener("click", () => {
  if (expenses.length === 0) {
    showModal("No expenses recorded yet.");
  } else {
    let expenseList = expenses
      .map(expense => `<li>${expense.name}: ₦${expense.amount.toFixed(2)}</li>`)
      .join("");
    showModal(`<ul>${expenseList}</ul>`);
  }
});

document.getElementById("exitApp").addEventListener("click", () => {
  showModal("Thank you for using the Finance App. Goodbye!");
});

// Modal Functions
closeModal.addEventListener("click", () => (modal.style.display = "none"));

function showModal(content) {
  modalBody.innerHTML = content;
  modal.style.display = "flex";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};