

let array = ['Sony Speria', 'Samsung Galaxy', 'Nokia 6', 'Xiaome Redme Note 4', 'Apple Iphone 6S', 'Xiaome Me 5S Plus', 'Apple Iphone 8 Plus', 'Fujitsu F-04E', 'Oppo A71'];
function main() {
    let html = '';
    html += '<table border="1">';
    for (let i = 0; i < array.length; i++) {
        html += `<tr>`;
        html += `<td>  ${array[i]} </td>`;
        html += `<td> <input type = "button", value="edit" onclick="edit(${i})" /> </td>`;
        html += `<td> <input type = "button", value="delete" onclick="deleter(${i})" /> </td>`;
        html += `</tr>`;
        html += `<tr  class id = "hidden${i}" style = "display: none">`;
        html += `<td> <input type = "text" id = "valueedit${i}" > </td>`;
        html += `<td>  <input type = "button" value = "edit" onclick= "okedit(${i})"> </td>`;
        html += `</tr>`;
    }
    html += '</table>';

    document.getElementById('content').innerHTML = html
}
main();
function deleter(number){
array.splice(number,1);
main();
}

function add () {
    let newvalue = document.getElementById('input').value;
    array.push(newvalue);
    main();
}
function edit(number){
    document.getElementById(`hidden${number}`).style.removeProperty('display');
}

function okedit(number) {
    let newvalue2 = document.getElementById(`valueedit${number}`).value;
    array [number] = newvalue2;
    main();


}


