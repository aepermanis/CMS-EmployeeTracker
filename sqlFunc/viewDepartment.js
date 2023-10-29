
function viewDepart(db) {
    db.query('SELECT * FROM department', (err, results) => {
        if (err){
            console.log(err);
        } 
        console.log(results);
        
    });
};

module.exports = viewDepart;