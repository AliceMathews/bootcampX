SELECT count(assistance_requests.student_id) as total_assitances, students.name
FROM assistance_requests 
JOIN students ON students.id = student_id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;