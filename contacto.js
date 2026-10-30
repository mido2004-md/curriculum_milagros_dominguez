// contacto
const btnContacto = document.getElementById('btnContacto');
const modalContacto = document.getElementById('modalContacto');
const cerrarModal = document.getElementById('cerrarModal');
const cerrarModalAbajo = document.getElementById('cerrarModalAbajo');

// abrir ventana
if (btnContacto && modalContacto) {
    btnContacto.addEventListener('click', (e) => {
        e.preventDefault();
        modalContacto.classList.add('activo');
    });
}

// cerra con la X
if (cerrarModal && modalContacto) {
    cerrarModal.addEventListener('click', () => {
        modalContacto.classList.remove('activo');
    });
}

if (cerrarModalAbajo && modalContacto) {
    cerrarModalAbajo.addEventListener('click', () => {
        modalContacto.classList.remove('activo');
    });
}
