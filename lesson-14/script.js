// App State
let balance = 0;
let expenses = [];

// Load state from localStorage on initialization
function loadState() {
  const savedBalance = localStorage.getItem("balance");
  const savedExpenses = localStorage.getItem("expenses");

  balance = savedBalance ? parseFloat(savedBalance) : 0;
  expenses = savedExpenses ? JSON.parse(savedExpenses) : [];
  updateBalanceDisplay();
}

// Save state to localStorage
function saveState() {
  localStorage.setItem("balance", balance.toFixed(2));
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Update balance display and save state
function updateBalanceDisplay() {
  document.getElementById("currentBalance").textContent = balance.toFixed(2);
  saveState();
}

// Modal Functions
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("closeModal");

function showModal(content) {
  modalBody.innerHTML = content;
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => (modal.style.display = "none"));
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Button Handlers
document.getElementById("viewBalance").addEventListener("click", () => {
  showModal(`Your current balance is: <strong>₦${balance.toFixed(2)}</strong>`);
});

document.getElementById("addIncome").addEventListener("click", () => {
  const incomeAmount = prompt("Enter income amount:");
  if (incomeAmount && !isNaN(incomeAmount)) {
    const confirmIncome = confirm(`Add ₦${parseFloat(incomeAmount).toFixed(2)} as income?`);
    if (confirmIncome) {
      balance += parseFloat(incomeAmount);
      updateBalanceDisplay();
      showModal(`Income of ₦${parseFloat(incomeAmount).toFixed(2)} added successfully.`);
    }
  } else {
    alert("Invalid amount entered.");
  }
});

document.getElementById("addExpense").addEventListener("click", () => {
  const expenseName = prompt("Enter expense name:");
  const expenseAmount = prompt("Enter expense amount:");
  if (expenseName && expenseAmount && !isNaN(expenseAmount)) {
    const confirmExpense = confirm(`Add "${expenseName}" of ₦${parseFloat(expenseAmount).toFixed(2)}?`);
    if (confirmExpense) {
      expenses.push({ name: expenseName, amount: parseFloat(expenseAmount) });
      balance -= parseFloat(expenseAmount);
      updateBalanceDisplay();
      showModal(`Expense "${expenseName}" of ₦${parseFloat(expenseAmount).toFixed(2)} added successfully.`);
    }
  } else {
    alert("Invalid input.");
  }
});

document.getElementById("viewExpenses").addEventListener("click", () => {
  if (expenses.length === 0) {
    showModal("No expenses recorded yet.");
  } else {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const expenseList = expenses
      .map((expense, index) => `<li>${index + 1}. ${expense.name}: ₦${expense.amount.toFixed(2)}</li>`)
      .join("");
    showModal(`
      <p><strong>Total Expenses:</strong> ₦${totalExpenses.toFixed(2)}</p>
      <p><strong>Number of Transactions:</strong> ${expenses.length}</p>
      <ul>${expenseList}</ul>
    `);
  }
});

document.getElementById("exitApp").addEventListener("click", () => {
  const confirmExit = confirm("Exit the app? Unsaved data may be lost.");
  if (confirmExit) {
    showModal("Thank you for using the Finance App. Goodbye!");
  }
});

// Initialize
loadState();