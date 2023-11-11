var inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const newDepart = require('./sqlFunc/newDepartment');
const newRole = require('./sqlFunc/newRole');
const newEmployee = require('./sqlFunc/newEmployee');
const viewDepart = require('./sqlFunc/viewDepartment');
const viewRoles = require('./sqlFunc/viewRoles');
const viewEmployee = require('./sqlFunc/viewEmployee');
const updateEmployee = require('./sqlFunc/updateEmployee');


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
  },
]

const departmentQ = [
  {
    name: 'name',
    message: "Please enter the name of the new department",
    type: "input"
  }
]

const addRoleQ = [
  {
    name: 'name',
    message: "Please enter the name of the role you would like to add",
    type: 'input'
  },
  {
    name: 'salary',
    message: "Salary of the position",
    type: "input"
  },
  {
    name: 'department',
    message: "Department id number",
    type: "input"
  }
]

const Employee = [
  {
    name: 'FirstName',
    message: "First Name",
    type: 'Input'
  },
  {
    name: "LastName",
    message: "Last Name",
    type: 'input'
  },
  {
    name: 'role',
    message: "please enter the role id number for this employee",
    type: "input"
  },
  {
    name: "manager",
    message: "please enter the employee id of their manager",
    type: "input"
  }
]

const update = [
  {
    name: 'id',
    message: 'please enter the employee id you would like to update',
    type: "input"
  },
  {
    name: "role",
    message: 'please enter the role id of their new role',
    type: 'input'
  }
]

function init() {

inquirer.prompt(question).then((answers)=>{
  if(answers.action === 'View Departments'){
    viewDepart(db);
    init()
  } else if (answers.action === 'View Roles'){
    viewRoles(db);
    init()
  } else if (answers.action === 'View Employees'){
    viewEmployee(db);
    init()
  }else if (answers.action === 'Add Department'){
    inquirer.prompt(departmentQ).then((answers1) => {
      newDepart(db,answers1);
      init()
    });
  }else if (answers.action === 'Add Role'){
    inquirer.prompt(addRoleQ).then((answers2)=>{
      newRole(db,answers2);
      init()
    })
  }else if (answers.action === 'Add Employee'){
    inquirer.prompt(Employee).then((answers3)=>{
      newEmployee(db,answers3);
      init()
    })
  }else if (answers.action === 'Update Employee'){
    inquirer.prompt(update).then((answers4) => {
      updateEmployee(db,answers4);
      init();
    });
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

