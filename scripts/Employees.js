import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}



// Create a variable to store the total number of sales for each employee. Compare employee.id and order.employeeID, if the same, add 1 to the storage variable
const employeeSales = (orders, employee) => {
    // set a temporary value for the storage variable
    let totalSales = 0;
    // iterate through the orders
    for (let order of orders) {
        // compare the employee ID on the order with the employee ID on the employee records
        if (order.employeeId === employee.id) {
            //if they match, add 1 to the total Sales for that employee
            totalSales += 1
        }
    }
    // return the totalSales variable 
    return totalSales
}

/*
create click event
iterate through employees
run the fx that stores the variable for the number of sales for each employee
*/
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    // Make sure the target is an employee
    if (itemClicked.id.startsWith("employee")) {
        // get the employee id from the HTML tag
        const [,employeeId] = itemClicked.id.split("--")
        // iterate through the employees
        for (const employee of employees) {
            if (employee.id === parseInt (employeeId)) {
                // run the function that stores the variable for the total number of sales for each employee
                let sales = employeeSales(orders,employee)
                // create the window alert
                window.alert(`${employee.name} sold ${sales} products`)
                }
                
            }

        }

})