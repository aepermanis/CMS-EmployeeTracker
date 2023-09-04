var inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
//const {viewRoles} = require('./sqlFunc/viewRoles');
const {viewDepart} = require('./sqlFunc/viewDepartment');
const {viewEmployee} = require('./sqlFunc/viewEmployee');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root', 
        password: 'Water-monkey1!',
        database: 'company_db'
    },
    console.log('connected to company_db')
);

const question = [
  {
    name: 'action',
    message: "What would you like to do?",
    type: 'list',
    choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee','Update Employee', 'Exit']
  }
]

function init() {
inquirer.prompt(question).then((answers)=>{
  if(answers.action === 'View Departments'){
    viewDepart(db);
  } else if (answers.action === 'View Roles'){
    function viewRoles(db) {
      db.query('DESCRIBE roles', (err, results) => {
          if (err){
              console.log(err);
          } 
          results.render; 
      });
  };
    viewRoles(db);
  } else if (answers.action === 'View Employees'){
    viewEmployee(db);
  }else if (answers.action === 'Add Role'){
    console.log("WORK IN PROGRESS")
  }else if (answers.action === 'Add Employee'){
    console.log('WORK IN PROGRESS')
  }else if (answers.actions === 'Updated Employee'){
    console.log('WORK IN PROGRESS')
  }else{
    console.log('Goodbye!')
  };

});
};

init()

app.use((req, res) => {
    res.status(404).end();
  });
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });