function newEmployee(db, answers) {
    let newperson = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answers.FirstName}','${answers.LastName}','${answers.role}', '${answers.manager}')`;
    db.query(newperson, (err,results)=>{
        if(err){
            console.log(err)
        } else{
            console.log(results)
        }
    })
}

module.exports = newEmployee;