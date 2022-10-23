let selectedRow = null

function onFormSubmit(){
    if(validate()) {
    var formData = readFormData();
    if (selectedRow == null){
      insertNewRecord(formData);  
    }   
    else {
        if(updateRecord(formData)){
            resetForm();  
        }  
        }
    }
    // var formData = readFormData();
    // insertNewRecord(formData);
}

function readFormData() {
    var formData= {};
    formData['bikeName'] = document.getElementById('bikeName').value;
    formData['Attribute'] = document.getElementById('Attribute').value;
    formData['Age'] = document.getElementById('Age').value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById('bikeList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.bikeName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Attribute;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Age;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    |   |   |   |   | <a onClick="onDelete(this)">Delete</a>`;
}
// onClick="onEdit(this)"
// onClick="onDelete(this)"

function resetForm() {
    document.getElementById('bikeName').value = '';
    document.getElementById('Attribute').value = '';
    document.getElementById('Age').value = '';
    let selectedRow = null
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('bikeName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Attribute').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Age').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.bikeName;
    selectedRow.cells[1].innerHTML = formData.Attribute;
    selectedRow.cells[2].innerHTML = formData.Age;
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