var inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express.js')
const {viewRoles, viewEmployee, viewDepart, newEmployee, newDepart, newRole } = require('./sql -func')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createCONnection(
    {
        host: 'localhost',
        user: 'root', 
        password: '',
        database: 'company_db'
    },
    console.log('connected to company_db')
);

app.use((req, res) => {
    res.status(404).end();
  });
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });