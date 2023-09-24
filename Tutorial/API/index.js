// Here we Fetch our own created API
const promise = fetch("http://127.0.0.1:80");

let tbody = document.getElementById("tbody");

let value;
promise.then((res) => {
    // console.log(res);
    return res.json();
}).then((val) => {
    // console.log(val);
    for (const key in val) {
        let tr = document.createElement('tr');

        tr.innerHTML = `<th scope="row">${parseInt(key) + 1}</th>
        <td>${val[key].name}</td>
        <td>${val[key].roll_id}</td>
        <td>${val[key].course}</td>
        <td>${val[key].college}</td>`

        tbody.appendChild(tr);
    }
}).catch((err) => {
    console.log(err);
})


