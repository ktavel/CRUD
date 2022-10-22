function onFormSubmit(){
    let formData = readFormData();
    insertNewRecord(formData);
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
    cell6.innerHTML = `<a>Edit</a>
    |   |   |   |   | <a>Delete</a>`;
}