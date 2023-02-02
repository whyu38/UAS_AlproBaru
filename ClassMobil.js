let data = [{ id: 0, unit: "Innova Reborn Diesel V 2.4 G/MT", year: "2020" }];
let nextId = 1;

// Add Data
function addUnit() {
  let unit = document.getElementById("unit").value;
  let year = document.getElementById("year").value;

  data.push({ id: nextId, unit: unit, year: year });
  nextId++;

  updateTable();
}

// Tabel
function updateTable() {
  let table = document.getElementById("tableUnit");
  table.innerHTML = "";

  let header = `<tr>
                <th>No</th>
                <th>Unit</th>
                <th>Tahun Pembelian</th>
                <th>Actions</th>
                </tr>`;
  table.innerHTML = header;

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].unit}</td>
                    <td>${data[i].year}</td>
                    <td>
                        <button onclick="updateData(${i})" class="btn-up">Update</button>
                        <button onclick="deleteData(${i})" class="btn-del">Delete</button>
                    </td>
                </tr>`;
    table.innerHTML += row;
  }
}

//Update Data
function updateData(index) {
  let unit = prompt("Enter New Unit:");
  let year = prompt("Enter New Year:");

  data[index].unit = unit;
  data[index].year = year;

  updateTable();
}

//Delete Data
function deleteData(index) {
  data.splice(index, 1);

  updateTable();
}
