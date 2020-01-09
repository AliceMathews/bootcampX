const { Pool } = require('pg'); 

const pool = new Pool({
  user: 'vagrant', 
  password: '123', 
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect(); 

let cohortName = process.argv.slice(2)[0];
let queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM cohorts
JOIN students ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id = student_id
JOIN teachers ON teachers.id = teacher_id 
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;
`

pool.query(queryString, [`${cohortName}%`])
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
  pool.end();
})
.catch(err => {
      console.error('query error', err.stack)
});