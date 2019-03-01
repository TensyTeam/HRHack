function newEmployee(_name, _phone, _email) {
               
    contract.newEmployee.sendTransaction(
        _name, _phone, _email,
        {gasPrice: web3.toWei(8.1, 'Gwei'), gas: 3000000},
        (error, result) => {
            if(error) {
                return console.log(error);
            }
            console.log("txhash: " + result);
        }
    )

}

function changeEmployee(_newName, _newPhone, _newEmail) {
               
    contract.changeEmployee.sendTransaction(
        _newName, _newPhone, _newEmail,
        {gasPrice: web3.toWei(8.1, 'Gwei'), gas: 3000000},
        (error, result) => {
            if(error) {
                return console.log(error);
            }
            console.log("txhash: " + result);
        }
    )

}

function getEmployee(_id) {

    contract.getEmployee.call(_id, (error, result) => {
        if(error) {
            return console.log(error);
        }
        console.log(result);
        return result; // - array of 3 strings
    });

}

function passStep(_id, _duration) {
               
    contract.passStep.sendTransaction(
        _id, _duration,
        {gasPrice: web3.toWei(8.1, 'Gwei'), gas: 3000000},
        (error, result) => {
            if(error) {
                return console.log(error);
            }
            console.log("txhash: " + result);
        }
    )

}

function getNumberOfEmployees() {

    contract.getNumberOfEmployees.call((error, result) => {
        if(error) {
            return console.log(error);
        }
        console.log(result.c[0]);
        return result.c[0];
    });

}

function getNumberOfSteps(_employeeId) {

    contract.getNumberOfSteps.call(_employeeId, (error, result) => {
        if(error) {
            return console.log(error);
        }
        console.log(result.c[0]);
        return result.c[0];
    });

}

function getEmployeeStep(_employeeId, _stepId) {

    contract.getEmployeeStep.call(
        _employeeId, _stepId,
        (error, result) => {
        if(error) {
            return console.log(error);
        }
        console.log([result[0].c[0], result[1].c[0], result[2].c[0], result[3].c[0]]);
        
        return [result[0].c[0], result[1].c[0], result[2].c[0], result[3].c[0]]; // array of id, date, duration, solverId
    });

}

//do not work
function getHistory() {

    var history = [];
    numOfEmployees =  getNumberOfEmployees(); // further code do no wait
    console.log(numOfEmployees);
    for (i = 0; i < numOfEmployees; i++) {
        numOfSteps = getNumberOfSteps();
        console.log('hui');
        for(j = 0; j < numOfSteps; j++) {
            var step = getEmployeeStep(i, j);
            history.push(step);
        }
    }
    console.log(history);
    return history; // array of all the steps

}
