document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();

    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let msg=document.getElementById("msg").value;
    let error=document.getElementById("error");

    if(name === "" || email === "" || msg === ""){
        error.textContent="All fields are required";
        error.style.color="red";
    }
    else{
        error.textContent="Form submitted successfully!";
        error.style.color="green";
    }
});