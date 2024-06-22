const apiUrl = 'http://localhost:3000';

function fetchServicios() {
    fetch(`${apiUrl}/servicios`)

        .then(response => response.json())
        .then(data => {
            const serviciosList = document.getElementById('listaServicios');
            serviciosList.innerHTML = '';
            data.forEach(servicio => {
                const containerServicio = document.createElement('div');
                containerServicio.classList.add("card");
                //
                foto = document.createElement("img");
                foto.src = `${servicio.imagen}`;

                x_servicio = document.createElement("h4");
                x_servicio.innerHTML = `${servicio.x_servicio}`;

                //containerDatosServ = document.createElement("div");
                servicioDescri = document.createElement("p");
                containerServicio.appendChild(foto);
                servicioDescri.innerHTML = `${servicio.descripcion}`;
                //
                containerServicio.appendChild(x_servicio);
                containerServicio.appendChild(servicioDescri);
                //containerServicio.classList.add('texto');
                //
                //containerServicio.appendChild(containerDatosServ);
                //
                serviciosList.appendChild(containerServicio);
            });
        });
}
fetchServicios();