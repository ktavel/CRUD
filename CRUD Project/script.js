let selectedRow = null

function onFormSubmit(){
    if(validate()) {
    let formData = readFormData();
    if (selectedRow == null);
    insertNewRecord(formData);
    else {
    if(updateRecord(formData));
    resetForm();
        }
    }
}

function readFormData() {
    let formData= {};
    formData['bikeName'] = document.getElementById('bikeName').value;
    formData['attribute'] = document.getElementById('attribute').value;
    formData['age'] = document.getElementById('age').value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById('bikeList').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.bikeName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.attribute;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell3 = newRow.insertCell(5);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    |   |   |   |   | <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById('bikeName').value = '';
    document.getElementById('attribute').value = '';
    document.getElementById('age').value = '';
    let selectedRow = null
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('bikeName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('attribute').value = selectedRow.cells[1].innerHTML;
    document.getElementById('age').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.bikeName;
    selectedRow.cells[1].innerHTML = formData.attribute;
    selectedRow.cells[2].innerHTML = formData.age;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')){
row = td.parentElement.parentElement;
document.getElementById('bikeList').deleteRow(row.rowIndex);
resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById('bikeName').value == '') {
        isValid = false;
        document.getElementById('bikeNameValidationError').classList.remove('hide');
    }
    else {
        isValid = true;
        if (!document.getElementById('bikeNameValidationError').classList.contains('hide'))
             document.getElementById('bikeNameValidationError').classList.add('hide');
    }
    return isValid;
}