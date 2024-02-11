unknownPerson={
    firstName:"Tapas",
    lastName:"Pradhan",
    age:23
}

function ageInDays(personName, callback){
    let personFullName=`${personName.firstName} ${personName.lastName}`
    const ageInDays=personName.age * 360
    
    callback (personFullName, ageInDays)
}

function result(personFullName, ageInDays) {
    console.log(`The person fullname is ${personFullName} and their age in days is ${ageInDays}`);
}

ageInDays(unknownPerson,result)