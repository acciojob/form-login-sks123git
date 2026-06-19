function getFormvalue() {
    //Write your code here
 const fname = document.forms["form1"]["fname"].value.trim();
    const lname = document.forms["form1"]["lname"].value.trim();

    if (fname === "" || lname === "") {
        alert("Please enter both first name and last name.");
        return false;
    }

    const fullName = `${fname} ${lname}`;
    alert(fullName);

    return false; // Prevent form submission
}
