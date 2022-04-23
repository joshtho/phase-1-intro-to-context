// Your code here
function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    
}
function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}


const createTimeInEvent = function (recordObj, dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    let newObj = {
    type: "TimeIn",
    hour: parseInt(hour),
    date
}
recordObj.timeInEvents.push(newObj)
    return recordObj
}
const createTimeOutEvent = function (recordObj, dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    let newObj = {
    type: "TimeOut",
    hour: parseInt(hour),
    date
}
recordObj.timeOutEvents.push(newObj)
    return recordObj
}
const hoursWorkedOnDate = function (recordObj, dateForm) {
    //console.log("record", recordObj, dateForm)
    const timeIn = recordObj.timeInEvents.find(event => event.date === dateForm)
    const timeOut = recordObj.timeOutEvents.find(event => event.date === dateForm)
    //console.log("timeinout", timeOut, timeIn)
    let hoursWorked = (timeOut.hour - timeIn.hour)/100
        return hoursWorked
}
const wagesEarnedOnDate = function (recordObj, dateForm) {
    let employeeHours = hoursWorkedOnDate(recordObj, dateForm)
    let payOwed = recordObj.payPerHour * employeeHours
        return payOwed
}
function allWagesFor(record) {
    let sum = 0
     for ( let i = 0; i < record.timeInEvents.length; i++) {
        let wagesPer = wagesEarnedOnDate(record, record.timeInEvents[i].date)
        sum += wagesPer
    }
    return sum
}
    
    //console.log(record)
    // const allDates = record.timeInEvents.map(event => event.date)
    // //console.log(allDates);
    // const wagesPer1 = wagesEarnedOnDate(record, allDates[0]);
    // const wagesPer2 = wagesEarnedOnDate(record, allDates[1]);
    //return wagesPer1 + wagesPer2
    // console.log("GIMMMMMME", wagesPer1, wagesPer2)
    function calculatePayroll(arrOfRecords) {
        //console.log(arrOfRecords)
        return arrOfRecords.reduce((total, record) => {
            return total + allWagesFor(record)
        }, 0)
    //     const allDates = arrOfRecords.map(event => event.timeInEvents.date) 
    //     //map(event => event.date)
    //     console.log("HUUUUUURRR", allDates)
    // const employees = arrOfRecords.map(employee => wagesEarnedOnDate(employee, allDates))
    // //return employees
    // console.log("HEEEEEERRRREEEE", employees)
}