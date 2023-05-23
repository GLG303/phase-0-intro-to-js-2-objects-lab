const employee = {
    name: "Mike",
    streetAddress: "2122 Spruce St",
  
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value
    return newEmployee
};

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value)  {
    newEmployee[key] = value;
    return newEmployee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

