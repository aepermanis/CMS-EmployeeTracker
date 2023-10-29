

function viewRoles(db) {
    db.query('SELECT * FROM roles', (err, results) => {
        if (err){
            console.log(err);
        } 
        console.log(results);  
    });
};

module.exports = viewRoles;