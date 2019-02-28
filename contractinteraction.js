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

function getNumberOfSteps(_employeeId) {

    contract.getNumberOfSteps.call(_employeeId, (error, result) => {
        if(error) {
            return console.log(error);
        }
        console.log(result);
        return result;
    });

}

function getEmployeeStep(_employeeId, _stepId) {

    contract.getEmployeeStep.call(
        _employeeId, _stepId,
        (error, result) => {
        if(error) {
            return console.log(error);
        }
        console.log(result);
        return result; // array of id, date, duration, solverId
    });

}
