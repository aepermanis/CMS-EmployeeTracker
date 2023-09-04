
function viewEmployee(db) {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err){
            console.log(err);
        } 
        console.log(results);
        
    });
};

module.exports = viewEmployee;