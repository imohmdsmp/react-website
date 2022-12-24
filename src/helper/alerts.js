import Swal from 'sweetalert2'

const SweetAlert = (title, description, type) => {
    return Swal.fire({
        title: title,
        text: description,
        icon: type,
        confirmButtonText: 'Cool'
    })
}

export default SweetAlert