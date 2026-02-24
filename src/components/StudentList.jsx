import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Nuevo estado para errores
  const API_URL = 'http://localhost:3005/api/students';

  useEffect(() => {
    async function fetchStudents() {
      try {
        console.log("Intentando conectar a:", API_URL);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }

        const data = await response.json();
        console.log("Datos recibidos del servidor:", data);

        // Si los datos no son un array, intentamos buscar el array dentro
        if (Array.isArray(data)) {
          setStudents(data);
        } else if (data && Array.isArray(data.students)) {
          setStudents(data.students);
        } else {
          console.error("El formato de datos no es un array:", data);
        }

      } catch (err) {
        console.error("Error detallado:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchStudents();
  }, []);

  if (loading) return <div>Cargando estudiantes...</div>;
  if (error) return <div style={{color: 'red'}}>Error: {error}. Revisa si tu API está encendida.</div>;

  return (
    <div>
      <h1>Lista de Estudiantes ({students.length})</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {/* Aquí es donde hacemos que el ID se vea en pantalla */}
            <strong>ID:</strong> {student._id} | <strong>Nombre:</strong> {student.name} | <strong>Edad:</strong> {student.age} | <strong>Pais:</strong> {student.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;