

function newDepart(db, answers) {
    let newID = `INSERT INTO department (label) VALUES ('${answers.name}');`;
    db.query(newID, (err,results)=>{
        if(err){
            console.log(err)
        } else{
            console.log("Department add to the database")
        }
    })
}

module.exports = newDepart;
