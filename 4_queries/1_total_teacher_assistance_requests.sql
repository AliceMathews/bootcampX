SELECT count(assistance_requests.teacher_id) as total_assitances, teachers.name
FROM assistance_requests 
JOIN teachers ON teachers.id = teacher_id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;