const apiUrl = 'http://localhost:3000';

function fetchProfesionales() {
    fetch(`${apiUrl}/profesionales`)

        .then(response => response.json())
        .then(data => {
            const profesionalesList = document.getElementById('listaProfesionales');
            profesionalesList.innerHTML = '';
            data.forEach(profesional => {
                const containerProfesional = document.createElement('div');
                containerProfesional.classList.add("card");
                //
                foto = document.createElement("img");
                foto.src = `${profesional.imagen}`;

                console.log(`${profesional.nombre}`);
                nombreyApellido =  `${profesional.nombre}` + ' ' + `${profesional.apellido}`;
                nomApe = document.createElement("h4");
                nomApe.innerHTML = nombreyApellido;

                /*console.log(`${apiUrl}/personas/${profesional.id_persona}`);
                fetch(`${apiUrl}/personas/${profesional.id_persona}`)
                    .then(resp => resp.json())
                    .then(persona => {
                        //nombreyApellido =  `${persona.nombre}` + ' ' + `${persona.apellido}`;
                        console.log(`${persona.nombre}`);
                        //foto.setAttribute("alt",nombreyApellido);
                        
                        //nomApe.innerHTML = nombreyApellido;
                    });*/
                containerDatosProf = document.createElement("div");
                cargo = document.createElement("p");
                containerProfesional.appendChild(foto);
                cargo.innerHTML = `${profesional.x_cargo}`;
                //
                containerDatosProf.appendChild(nomApe);
                containerDatosProf.appendChild(cargo);
                containerDatosProf.classList.add('texto');
                //
                containerProfesional.appendChild(containerDatosProf);
                //
                profesionalesList.appendChild(containerProfesional);
            });
        });
}
fetchProfesionales();

/*
<div class="card">
                        <img src="./otrasFotos/mujer1(1).jpg" alt="Dra. Rodríguez">
                    <div class="texto">
                        <h4>Verónica Rodríguez</h4>
                        <p>Directora.</p>
                    </div>
                </div>
*/                