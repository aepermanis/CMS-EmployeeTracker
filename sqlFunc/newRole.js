function newRole(db,answer) {
    let roleId = `INSERT INTO roles (title, salary, department_id) VALUES ('${answer.name}', '${answer.salary}','${answer.department}')`
    db.query(roleId, (err, results) => {
        if (err){
            console.log(err);
        } 
        console.log('role added');  
    });
}

module.exports = newRole; 