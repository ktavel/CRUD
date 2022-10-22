let selectedRow = null

function onFormSubmit(){
    if(validate()) {
    let formData = readFormData();
    if (let selectedRow == null);
    insertNewRecord(formData);
    else 
    updateRecord(formData);
    resetForm();
    }
}

function readFormData() {
    let formData= {};
    formData['bikeName'] = document.getElementById('bikeName').value;
    formData['attribute'] = document.getElementById('attribute').value;
    formData['feature'] = document.getElementById('feature').value;
    formData['quality'] = document.getElementById('quality').value;
    formData['trait'] = document.getElementById('trait').value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById('bike list').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.bikeName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.attribute;
    cell3 =newRow.insertCell(2);
    cell3.innerHTML = data.feature;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.quality;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.trait;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    |   |   |   |   | <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById('bikeName').value = '';
    document.getElementById('attribute').value = '';
    document.getElementById('feature').value = '';
    document.getElementById('quality').value = '';
    document.getElementById('trait ').value = '';
    let selectedRow = null
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('bikeName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('attribute').value = selectedRow.cells[0].innerHTML;
    document.getElementById('feature').value = selectedRow.cells[0].innerHTML;
    document.getElementById('quality').value = selectedRow.cells[0].innerHTML;
    document.getElementById('trait').value = selectedRow.cells[0].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.bikeName;
    selectedRow.cells[0].innerHTML = formData.attribute;
    selectedRow.cells[0].innerHTML = formData.feature;
    selectedRow.cells[0].innerHTML = formData.quality;
    selectedRow.cells[0].innerHTML = formData.trait;
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