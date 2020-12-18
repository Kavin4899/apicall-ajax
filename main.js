
var container = {};
var contArr = [];

function validateForm() {
    alert("jniuhu")

    var name = $("#name").val();
    var noday = $("#noday").val();
    var mail = $("#mail").val();
    var addr = $("#addr").val();
    var pho = $("#pho").val();

    var port;
    if (document.getElementById("chni").checked) {
        port = document.getElementById("chni").value;
    }
    else if (document.getElementById("chni1").checked) {
        port = document.getElementById("chni1").value;
    }
    else {
        port = document.getElementById("chni2").value;
    };

    var stats;
    if (document.getElementById("Status").checked) {
        stats = document.getElementById("Status").value;
    }
    else {
        stats = document.getElementById("Status1").value;
    }



    if (container.id) {
        container = {
            name: name,
            port:port,
            noday: noday,
            mail: mail,
            addr: addr,
            pho: pho,
            stats:stats,
            id:container.id
        };
        // container.id = container.id;
        var myJSON = JSON.stringify(container);
        $.ajax({
            url: 'https://5fd8884b7e05f000170d2ab9.mockapi.io/container/'+container.id,
            type: 'PUT',
            async: false,
            dataType: "json",
            data: myJSON,
            contentType: 'application/json',
            success: function (response) {
                window.location.replace("index1.html");
            }
        });


    }
    else {
        container = {
            name: name,
            port:port,
            noday: noday,
            mail: mail,
            addr: addr,
            pho: pho,
            stats:stats

        }
        var myJSON = JSON.stringify(container);

        $.ajax({
            url: 'https://5fd8884b7e05f000170d2ab9.mockapi.io/container',
            type: 'POST',
            async: false,
            dataType: "json",
            data: myJSON,
            contentType: 'application/json',
            success: function (response) {
                window.location.href = "index1.html";
            }
        });

    }
}


$(document).ready(function () {
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    $.ajax({
        url: 'https://5fd8884b7e05f000170d2ab9.mockapi.io/container/' + id,
        type: 'GET',
        async: false,
        dataType: "json",
        contentType: 'application/json',
        success: function (response) {
            container = response;
            $("#name").val(container.name);
            $("#noday").val(container.noday);
            $("#mail").val(container.mail);
            $("#addr").val(container.addr);
            $("#pho").val(container.pho);
            if (container.port == "Chennai") {
                    $("#chni").prop("checked", "true");
                }
                else if (container.port == "Mumbai") {
                    $("#chni1").prop("checked", "true");
                }
                else {
                    $("#chni2").prop("checked", "true");
                }

                if (container.stats == "Active") {
                    $("#Status").prop("checked", "true");
                }
                else {
                    $("#Status1").prop("checked", "true");
                }
        }

    });

});
