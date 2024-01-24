INSERT INTO department (department_name)
VALUES 
('Executive Board'),
('Marketing'),
('Human Resources'),
('Finance'),
('Engineering'),
('Information Technology'),
('Customer Relations'),
('Research and Development'),
('Legal'),
('Maintenance');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Chief Executive Officer', 555000.00, 1),
('Marketing Manager', 125000.00, 2),
('HR Director', 189000.00, 3),
('Finance Head', 145000.00, 4),
('Senior Engineer', 185000.00, 5),
('IT Manager', 125000.00, 6),
('Customer Relations Manager', 75000.00, 7),
('Research & Development Manager', 185000.00, 8),
('Legal Manager', 95000.00, 9),
('Maintenance Manager', 135000.00, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Brad', 'Pit', 1, 1),
('Sarah', 'Morgan', 2, 2),
('Jake', 'Black', 3, 3),
('Randy', 'Collins', 4, 4),
('Travon', 'Boswell', 5, 5),
('Nancy', 'Turner', 6, 6),
('Andy', 'Tucker', 7, 7),
('Julie', 'Porter', 8, 8),
('Frank', 'The Tank', 9, 9),
('Kelly', 'Kapowski', 10, 10);