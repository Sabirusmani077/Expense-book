let expenseForm = document.getElementById('expense-form');
let expenseList = document.getElementById('expense-list');
let totalDisplay = document.getElementById('total');
let total = 0;

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let description = document.getElementById('description').value;
    let amount = parseFloat(document.getElementById('amount').value);

    if (description && amount) {
        let li = document.createElement('li');
        li.textContent = `${description}: ₹${amount}`;
        expenseList.appendChild(li);

        total += amount;
        totalDisplay.textContent = total.toFixed(2);

        // Reset form
        expenseForm.reset();
    }
});