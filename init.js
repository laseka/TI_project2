var req;
var db;

window.addEventListener("online", updateConn);
window.addEventListener("offline", updateConn);

$("document").ready( () => {
    updateConn();
    init();
    create_cookies();
});


function updateConn(event) {

    var status_text = document.getElementById("status_info");

    if (navigator.onLine) {
        status_text.innerHTML = "Jesteś w trybie: online";
        status_text.style.color = "#66ff33";
    } else {
        status_text.innerHTML = "Jesteś w trybie: offline";
        status_text.style.color = "#ff0000";
    }
}


function init() {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB; 
    openLocalDB();

}

function openLocalDB() {

    var indexedDB_request = indexedDB.open("database", 2);

    indexedDB_request.onerror = function() {
        console.log("Wystąpił błąd.");
    }
    
    indexedDB_request.onsuccess = function() {
        db = indexedDB_request.result;
        console.log("Utworzono lokalną bazę danych.");
    }

    indexedDB_request.onupgradeneeded = function() {
        db = indexedDB_request.result;
        var storage = db.createObjectStore("medyk", { keyPath: "id", autoIncrement: true});

        //data miała być początkowo wykorzystywana ale jednak nie jest
        storage.createIndex("data", "data");
        storage.createIndex("godzina", "godzina");
        storage.createIndex("odp1", "odp1");
        storage.createIndex("odp2", "odp2");
        storage.createIndex("odp3", "odp3");
    }
}


function create_cookies() {

    let arr_tmp = {};
    let session_id = get_cookies();

    arr_tmp.sessionID = session_id;
    json_send = JSON.stringify(arr_tmp);
    console.log("Session ID: " + session_id);

    $.ajax({
        type: "POST",
        url: "http://pascal.fis.agh.edu.pl/~8lasek/projekt2/rest/session",
        data : json_send,
        success : function(response) {
            if (response["status"] == "ok") {
                onlineMenu();
            } else {
                offlineMenu();
            }
        },
        error : function() {
            console.log("Nie udało się utworzyć cookies");
        }
    })
}


function get_cookies() {

    let tmp;
    let browser_cookies = document.cookie.split(';');

    for (var i = 0; i < browser_cookies.length; i++) {
        tmp = browser_cookies[i];
        let remove_spaces = 0;
        while (tmp.charAt(remove_spaces) == ' ') {
            remove_spaces = remove_spaces + 1;
        }
        tmp = tmp.substring(remove_spaces, tmp.length - remove_spaces);
        if (tmp.indexOf("sessionID=") == 0) {
            return tmp.substring("sessionID=".length, tmp.length);
        }
    }
    return "";
}


function onlineMenu() {
    $("#register_button").css("display", "none");
    $("#log_button").css("display", "none");
    $("#logout_button").css("display", "inline");
    $("#show_offline_button").css("display", "none");
    $("#offline_data_button").css("display", "none");
    $("#online_data_button").css("display", "inline");
    $("#show_data_button").css("display", "inline");
    $("#chart").css("display", "none");
    $("#data").html("");
}

function offlineMenu() {
    $("#register_button").css("display", "inline");
    $("#log_button").css("display", "inline");
    $("#logout_button").css("display", "none");
    $("#show_offline_button").css("display", "inline");
    $("#offline_data_button").css("display", "inline");
    $("#online_data_button").css("display", "none");
    $("#show_data_button").css("display", "none");
    $("#chart").css("display", "none");
    $("#data").html("");
}

function go_to_doc() {
    window.location.href = "Dokumentacja.pdf";
}


