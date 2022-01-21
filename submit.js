function login(e) {
    e.preventDefault()
    const nama = document.getElementById("nama").value
    const pass = document.getElementById("pass").value
    if (nama == "ndutweb" && pass == "123") {
        alert("Login Sukses")
        location.href = "./admin/index.html"
    }
    else {
        alert("Login Gagal")
        window.Location.reload()
    }
}