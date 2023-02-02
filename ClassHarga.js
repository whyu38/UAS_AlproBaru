let dataHarga = [{ id: 0, price: "Rp. 200.000" }];
let idTo = 1;

function addHarga() {
  let price = document.getElementById("price").value;

  dataHarga.push({ id: idTo, price: price });
  idTo++;

  updateTableHarga();
}

function updateTableHarga() {
  let table = document.getElementById("tableHarga");
  table.innerHTML = "";

  let header = `<tr>
                <th>No</th>
                <th>Harga</th>
                <th>Actions</th>
                </tr>`;
  table.innerHTML = header;

  for (let i = 0; i < dataHarga.length; i++) {
    let row = `<tr>
                    <td>${dataHarga[i].id}</td>
                    <td>${dataHarga[i].price}</td>
                    <td>
                        <button onclick="updateDataHarga(${i})" class="btn-up">Update</button>
                        <button onclick="deleteDataHarga(${i})" class="btn-del">Delete</button>
                    </td>
                </tr>`;
    table.innerHTML += row;
  }
}

function updateDataHarga(index) {
  let price = prompt("Enter New Price:");

  dataHarga[index].price = price;

  updateTableHarga();
}

function deleteDataHarga(index) {
  dataHarga.splice(index, 1);

  updateTableHarga();
}
