//require('dotenv').config();
//console.log(process.env.DB_PORT);
const apiUrl = 'http://localhost:3000';

function fetchEspecialidades() {
    fetch(`${apiUrl}/especialidades`)

        .then(response => response.json())
        .then(data => {
            const especialidadesList = document.getElementById('listaEspecialidades');
            especialidadesList.innerHTML = '';
            data.forEach(especialidad => {
                const li = document.createElement('li');
                li.innerHTML = `${especialidad.x_especialidad}`;
                especialidadesList.appendChild(li);
            });
        });
}
fetchEspecialidades();


