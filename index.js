// Write your solution in this file!
let employee = {
    name : "Patricia Mwangi",
    streetAddress : "Kabiria",
}
function updateEmployeeWithKeyAndValue(obj,key,value){
    return{
        ...obj,
        [key]:value,
    }
}
    let updatedEmployees=updateEmployeeWithKeyAndValue(employee,"name","Wanjiru Mwangi");
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]= value;
    return obj
}
let updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Wanjiru Mwangi");
function deleteFromEmployeeByKey(obj,key,value){
    return{
        ...obj,
    [key]:value,
    }
}
let deletedEmployee = deleteFromEmployeeByKey(employee,"name","Malloy");
delete deletedEmployee.name;
function destructivelyDeleteFromEmployeeByKey(obj,key,value){
    obj[key]=value;
    return obj
}
let destructivelyDeleted= destructivelyDeleteFromEmployeeByKey(employee,"name","Malloy");
delete destructivelyDeleted.name