let workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

let getWorthyWorkers = workersArr => {
    let selectedWorkers = [];
    
    for (let i = 0; i < workersArr.length; i++) {
        const currentWorker = workersArr[i];
        
        if (currentWorker.salary > 1000) {
            selectedWorkers.push(currentWorker.name);
        }
    }

    return selectedWorkers;
}

console.log(getWorthyWorkers(workers))