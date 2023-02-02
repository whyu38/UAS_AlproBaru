let dataTujuan = [{ id: 0, city: "Malang", prov: "Jawa Timur" }];
let idKe = 1;

function addCity() {
  let city = document.getElementById("city").value;
  let prov = document.getElementById("prov").value;

  dataTujuan.push({ id: idKe, city: city, prov: prov });
  idKe++;

  updateTableTujuan();
}

function updateTableTujuan() {
  let table = document.getElementById("tableKota");
  table.innerHTML = "";

  let header = `<tr>
                <th>No</th>
                <th>Kota/Kab</th>
                <th>Provinsi</th>
                <th>Actions</th>
                </tr>`;
  table.innerHTML = header;

  for (let i = 0; i < dataTujuan.length; i++) {
    let row = `<tr>
                    <td>${dataTujuan[i].id}</td>
                    <td>${dataTujuan[i].city}</td>
                    <td>${dataTujuan[i].prov}</td>
                    <td>
                        <button onclick="updateDataTujuan(${i})" class="btn-up">Update</button>
                        <button onclick="deleteDataTujuan(${i})" class="btn-del">Delete</button>
                    </td>
                </tr>`;
    table.innerHTML += row;
  }
}

function updateDataTujuan(index) {
  let city = prompt("Enter New City:");
  let prov = prompt("Enter New Province: ");

  dataTujuan[index].city = city;
  dataTujuan[index].prov = prov;

  updateTableTujuan();
}

function deleteDataTujuan(index) {
  dataTujuan.splice(index, 1);

  updateTableTujuan();
}
