const emailAddress = "c2VydmljZXNAcmVzb2xhcHJvamVjdHMuY29t";

let emailElement = document.getElementById("email");
if (emailElement) {
    emailElement.innerHTML = atob(emailAddress);
}
