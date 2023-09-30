document.addEventListener("DOMContentLoaded", function () {
    const addEntryButton = document.getElementById("add-entry");
    const entriesList = document.getElementById("entries");
    const totalExpenseSpan = document.getElementById("total-expense");
    const totalIncomeSpan = document.getElementById("total-income");
    const totalProfitSpan = document.getElementById("total-profit");

    let entries = [];

    addEntryButton.addEventListener("click", function () {
        const expenseType = document.getElementById("expense-type").value;
        const expenseAmount = parseFloat(document.getElementById("expense-amount").value) || 0;
        const incomeAmount = parseFloat(document.getElementById("income-amount").value) || 0;

        const entry = {
            expenseType,
            expenseAmount,
            incomeAmount
        };

        entries.push(entry);

const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${entry.expenseType}: 
            Expense ₦${entry.expenseAmount.toFixed(2)} | 
            Income ₦${entry.incomeAmount.toFixed(2)}
            <button class="delete-entry">Delete</button>
        `;
        entriesList.appendChild(listItem);

        // Clear input fields
        document.getElementById("expense-type").value = "";
        document.getElementById("expense-amount").value = "";
        document.getElementById("income-amount").value = "";

        // Update the financial summary
        calculateFinancialSummary();
        
    // Add a click event listener to the "Delete" button
        const deleteButton = listItem.querySelector(".delete-entry");
        deleteButton.addEventListener("click", function () {
            // Remove the entry from the entries array and the list
            const indexToRemove = entries.indexOf(entry);
            if (indexToRemove !== -1) {
                entries.splice(indexToRemove, 1);
                entriesList.removeChild(listItem);
                calculateFinancialSummary();
            }
        });
    });

function calculateFinancialSummary() {
        const totalExpense = entries.reduce((acc, entry) => acc + entry.expenseAmount, 0);
        const totalIncome = entries.reduce((acc, entry) => acc + entry.incomeAmount, 0);
        const totalProfit = totalIncome - totalExpense;

        totalExpenseSpan.textContent = totalExpense.toFixed(2);
        totalIncomeSpan.textContent = totalIncome.toFixed(2);
        totalProfitSpan.textContent = totalProfit.toFixed(2);
    }
});