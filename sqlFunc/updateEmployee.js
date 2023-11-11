    
    function updateEmployee(db,answers) {
        var sql = `UPDATE employee SET role_id = '${answers.role}' WHERE id = '${answers.id}'`;
        db.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
    };

    module.exports = updateEmployee;

