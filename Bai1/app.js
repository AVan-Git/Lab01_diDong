function myFunction() {
    let header = document.createElement("div");
    let text = document.createTextNode("Tính tổng a và b:");
    header.appendChild(text);
    document.body.appendChild(header);
    // 
    let diva = document.createElement("div");
    let texta = document.createTextNode("Giá trị a: \t");
    diva.appendChild(texta);
    let inputa = document.createElement("input");
    inputa.id = "txta";
    diva.appendChild(inputa);

    document.body.appendChild(diva);
    // 
    let divb = document.createElement("div");
    let textb = document.createTextNode("Giá trị b: \t");
    divb.appendChild(textb);
    let inputb = document.createElement("input");
    inputb.id = "txtb";
    divb.appendChild(inputb);

    document.body.appendChild(divb);
    // 
    let btnSum = document.createElement("button");
    let txtSum = document.createTextNode("Tổng");

    btnSum.append(txtSum)

    document.body.appendChild(btnSum)


}


document.body.onload = myFunction();

let btnSum = document.querySelector('button');
btnSum.onclick = function Sum() {
    let div = document.createElement("div");
    let txta = document.getElementById('txta').value;
    let txtb = document.getElementById('txtb').value;

    let sum = parseInt(txta) + parseInt(txtb)
    let txtsum = document.createTextNode(txta + ' + ' + txtb + ' = ' + sum);
    // console.log(s);
    div.appendChild(txtsum);
    document.body.appendChild(div);
}