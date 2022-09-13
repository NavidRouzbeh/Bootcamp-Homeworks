function sendToTable(i){
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById ('mobile_number').value;

        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const firstNameEle = document.createElement('td');
        const lastNameEle = document.createElement('td');
        const ageEle = document.createElement('td');
        const emailEle = document.createElement('td');
        const phoneNumberEle = document.createElement('td');
        const buttonEle = document.createElement ('td');
        const deleteButton = document.createElement ('button');
        deleteButton.className = "delete_btn";
        deleteButton.innerText = "Delete";


        firstNameEle.innerHTML = firstName;
        lastNameEle.innerHTML = lastName;
        ageEle.innerHTML = age;
        emailEle.innerHTML = email;
        phoneNumberEle.innerHTML = phoneNumber;
        trElement.appendChild(firstNameEle);
        trElement.appendChild(lastNameEle);
        trElement.appendChild(ageEle);
        trElement.appendChild(emailEle);
        trElement.appendChild(phoneNumberEle);
        trElement.appendChild (buttonEle);
        buttonEle.appendChild (deleteButton);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);

}



