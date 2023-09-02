INSERT INTO department (id, label)
VALUES  (001, "Warehouse"), 
        (002, "HR"), 
        (003, "Sales"), 
        (004, "Accounting");

INSERT INTO roles (id, title, salary, department_id)
VALUES  (001, 'Senior Accountant', 100000,004),
        (002, 'Head of HR', 70000, 002),
        (003, 'Client Advocate', 42000, 003),
        (004, 'Junior Sales Representative', 33500, 003),
        (005, 'Overnight Stocker', 40000, 001),
        (006, 'Safety Coordinator', 50000, 001),
        (007, 'Sales Team Leader', 65000, 003),
        (008, 'Warehouse Manager',63000, 001);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (001, 'Oscar', 'Martinez', 001, NULL ),
        (002, 'Darryl', 'Philbin', 008, NULL),
        (003, 'James', 'Halpert', 007, NULL),
        (004, 'Toby', 'Flenderson', 002, NULL),
        (005, 'Ryan', 'Howard', 004, 003),
        (006, 'Phyllis', 'Lapin-Vance', 003, 003),
        (007, 'Roy', 'Anderson', 006, 002),
        (008, 'Nate', 'Nickerson', 005, 002);


