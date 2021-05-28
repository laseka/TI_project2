var req;
var db;

function register_form() {

    if(!navigator.onLine) {
        alert("Aby się zarejestrować potrzebne jest połączenie z internetem.");
    }

    let form_html = "<form class='input'>" +
    "<input required class='form-control' type='text' name='login' placeholder='login'><br>" +
    "<input required class='form-control' type='password' name='password' placeholder='haslo'><br>" +
    "<input style='display: block; margin: 0 auto;' class='btn btn-success' type='button' value='Zarejestruj się' onclick='add_user(this.form)'>" +
    "</form>"

    $("#data").html(form_html);
    $("#chart").css("display", "none");
}


function add_user(form) {

    if (check_registration_form(form)) {

        var user_to_add = {};
        user_to_add.username = form.login.value;
        user_to_add.password = form.password.value;
        json_send = JSON.stringify(user_to_add);

        $.ajax({
            type : "POST",
            url : "http://pascal.fis.agh.edu.pl/~8lasek/projekt2/rest/register",
            data : json_send,
            success : function(response) {
                if (response["status"] == "ok") {
                    alert("Rejestracja przebiegła pomyślnie");
                } else {
                    alert(response["msg"]);
                }
            },
            error : function() {
                alert("Wystąpił błąd przy tworzeniu XMLHttpRequest");
            }
        })
    }
}

function check_registration_form(form) {

    if(!navigator.onLine) {
        alert("Aby się zarejestrować potrzebne jest połączenie z internetem.");
    }

    if (form.login.value == "") {
        alert("Login jest wymagany do rejestracji");
        return false;
    }

    if (form.password.value == "") {
        alert("Hasło jest wymagane do rejestracji");
        return false;
    }

    if (form.login.value.length <= 3 || form.password.value.length <= 3) {
        alert("Login i hasło muszą mieć więcej niż 3 znaki");
        return false;
    }

    return true;
}


function login_form() {

    if(!navigator.onLine) {
        alert("Aby się zalogować potrzebne jest połączenie z internetem.");
    }

    let form_html = "<form class='input'>" +
    "<input required class='form-control' type='text' name='login' placeholder='login'><br>" +
    "<input required class='form-control' type='password' name='password' placeholder='haslo'><br>" +
    "<input style='display: block; margin: 0 auto;' class='btn btn-success' type='button' value='Zaloguj' onclick='log_user(this.form)'>" +
    "</form>"

    $("#data").html(form_html);
    $("#chart").css("display", "none");
}


function log_user(form) {

    if (check_login_form(form)) {

        var user_to_log = {};
        user_to_log.username = form.login.value;
        user_to_log.password = form.password.value;
        json_send = JSON.stringify(user_to_log);

        $.ajax({
            type : "POST",
            url : "http://pascal.fis.agh.edu.pl/~8lasek/projekt2/rest/login",
            data : json_send,
            success : function(response) {
                if (response["status"] == "ok") {
                    alert("Zalogowano!");
                    onlineMenu();
                    clear_local_database();
                    set_cookies(response["sessionID"]);
                } else {
                    alert(response["msg"]);
                }
            },
            error : function() {
                alert("Wystąpił problem. Spróbuj odświeżyć przeglądarkę.");
            }
        })
    }
}

function check_login_form(form) {

    if(!navigator.onLine) {
        alert("Aby się zalogować potrzebne jest połączenie z internetem.");
    }

    if (form.login.value == "") {
        alert("Podaj login");
        return false;
    }

    if (form.password.value == "") {
        alert("Podaj hasło");
        return false;
    }

    return true;
}


function clear_local_database() {

    var count = 0;
    var trans = db.transaction("medyk", "readwrite");
    var storage = trans.objectStore("medyk");

    storage.openCursor().onsuccess = async function(event) {

        var cursor = event.target.result;

        if (cursor) {
            var arr_tmp = {};
            arr_tmp.data = cursor.value.data;
            arr_tmp.czas = cursor.value.czas;
            arr_tmp.odp1 = cursor.value.odp1;
            arr_tmp.odp2 = cursor.value.odp2;
            arr_tmp.odp3 = cursor.value.odp3;

            json_send = JSON.stringify(arr_tmp);

            $.ajax({
                type : "POST",
                url : "http://pascal.fis.agh.edu.pl/~8lasek/projekt2/rest/insert",
                data : json_send
            })
            cursor.delete();
            count = count + 1;
            cursor.continue();
        }
    }
}

function set_cookies(value) {
    document.cookie = "sessionID=" + value + "; path=/";
}

function logout_user() {

    var session_id = get_cookies();
    var data = {};
    data.sessionID = session_id;
    json_send = JSON.stringify(data);

    $.ajax({
        method : "POST",
        url : "http://pascal.fis.agh.edu.pl/~8lasek/projekt2/rest/logout",
        data : json_send,
        success : function(response) {
            if (response["status"] == "ok") {
                alert("Wylogowano użytkownika");
                offlineMenu();
                set_cookies('');
            } else {
                alert(response);
                alert(response["msg"]);
            }
        }
    })
    $("#chart").css("display", "none");
}
