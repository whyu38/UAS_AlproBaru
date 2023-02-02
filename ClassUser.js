

function addUser() {
  let nama = document.getElementById("nama").value;
  let member = document.getElementById("member").value;
  let inyear = document.getElementById("inyear").value;



  updateTableUser();
}

function updateTableUser() {
  let table = document.getElementById("tableUser");
  table.innerHTML = "";

  let header = `<tr>
                <th>No</th>
                <th>Nama</th>
                <th>Member</th>
                <th>Tahun Gabung</th>
                <th>Actions</th>
                </tr>`;
  table.innerHTML = header;

  for (let i = 0; i < dataUser.length; i++) {
    let row = `<tr>
                    <td>${dataUser[i].id}</td>
                    <td>${dataUser[i].nama}</td>
                    <td>${dataUser[i].member}</td>
                    <td>${dataUser[i].inyear}</td>
                    <td>
                        <button onclick="updateDataUser(${i})" class="btn-up">Update</button>
                        <button onclick="deleteDataUser(${i})" class="btn-del">Delete</button>
                    </td>
                </tr>`;
    table.innerHTML += row;
  }
}

function updateDataUser(index) {
  let member = prompt("Enter New Member Card:");

  dataUser[index].member = member;

  updateTableUser();
}

function deleteDataUser(index) {
  dataUser.splice(index, 1);

  updateTableUser();
}
