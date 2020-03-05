document.getElementById('button1').addEventListener('click', loadStudent);

document.getElementById('button2').addEventListener('click', loadStudents);

function loadStudent(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'Student.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const student = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>Id : ${student.id}</li>
        <li>Name : ${student.name}</li>
        <li>Department : ${student.dept}</li>
        <li>University : ${student.university}</li>
      </ul>`;

      document.getElementById('student').innerHTML = output;
    }
  }

  xhr.send();
}

function loadStudents(e){
  const xhr = new XMLHttpRequest;

  xhr.open('GET', 'students.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const students = JSON.parse(this.responseText);

      let output = '';

      students.forEach(function(student){
        output += `
      <ul>
        <li>Id : ${student.id}</li>
        <li>Name : ${student.name}</li>
        <li>Department : ${student.dept}</li>
        <li>University : ${student.university}</li>
      </ul>`;
      });
      document.getElementById('students').innerHTML = output;
    }
  }
  

  xhr.send();
}