document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;

    let tipo = "";
    if (document.getElementById("propietario").checked) tipo = "Propietario";
    if (document.getElementById("empresario").checked) tipo = "Empresario";

    if (!nombre || !apellido || !email || !telefono) {
        alert("error al completar , vuelve a intentar mas tarde ");
        return;
    }

    const registro = { nombre, apellido, email, telefono, direccion, tipo };

    let registros = JSON.parse(localStorage.getItem("registros")) || [];
    registros.push(registro);
    localStorage.setItem("registros", JSON.stringify(registros));

    // mensaje
    const msg = document.getElementById("registro exitoso");
    msg.style.display = "block";

    setTimeout(() => {
        window.location.href = "registros.html";
    }, 1200);
});



// ⭐ función para eliminar registro (se usa en registros.html)
function eliminarRegistro(indice) {
    let registros = JSON.parse(localStorage.getItem("registros")) || [];

    registros.splice(indice, 1);
    localStorage.setItem("registros", JSON.stringify(registros));

    window.location.reload();
}
