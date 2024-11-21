const username = prompt('Enter your username');
const password = prompt('Enter your password');


if (username != "" && password != "") {
    axios.post("/docs/login", {
        username: username,
        password: password
    }).then((response) => {
        if (response.data.status === "success") {
            document.getElementById("authorized").style.display = "flex";
            return;
        } else {
            alert('Invalid username or password');
            document.location.href = '/unauthorized.html';
        }
    }).catch((error) => {
        console.error(error);
        alert('An error occurred');
        document.location.href = '/unauthorized.html';
    })
} else {
    alert('Please enter your username and password');
    document.location.href = '/unauthorized.html';
}