var contArr = [];
function add() {
    window.location.href = "index.html";
}
$(document).ready(function () {
    $.ajax({

        url: 'https://5fd8884b7e05f000170d2ab9.mockapi.io/container',
        type: 'GET',
        async: false,
        dataType: "json",
        data: "",
        contentType: 'application/json',
        success: function (response) {

            $.each(response, function (i, object) {
                contArr.push(object);

            });
            console.log(contArr);
        }
    });
    tip();
});

var sNo = 1
function tip() {
    var html = "";
    editIndex = undefined;
    for (var i = 0; i < contArr.length; i++) {
        html += "<tr id='list_" + sNo + "'>";
        html += "<td>" + contArr[i].name + "</td>";
        html += "<td>" + contArr[i].port + "</td>";
        html += "<td>" + contArr[i].pho + "</td>";
        html += "<td>" + contArr[i].mail + "</td>";
        html += '<td><button class="btn btn-info" onclick="Edit(' + contArr[i].id + ')">Edit</button> <button class="btn btn-danger"onclick="Delete(' + contArr[i].id + ')">Delete</button></td>';
        html += "</tr>";
        sNo++

    }
    $("#contid").html(html);
}
function Edit(id) {
    window.location.href = "index.html?id=" + id;
    alert("byeeeeeeeeee");

}
function Delete(id) {
    $.ajax({
        url: 'https://5fd8884b7e05f000170d2ab9.mockapi.io/container/' + id,
        type: 'DELETE',
        async: false,
        dataType: "json",
        data: "",
        contentType: 'application/json',
        success: function (response) {

            $("#list_" + id).remove();
        }

    });
}