var req;
var db;


function data_offline_form() {
    
    let form_html = "<h2 style='padding: 10px; text-align: center;'>Wypełnij ankietę poniżej</h2>" +
    "<form name='insert_data'> <div style='background-color: #4d4d4d; color: #ffffff; border: 2px solid #8c8c8c; border-collapse: collapse; border-radius: 20px; width: 500px; padding: 20px; margin: auto;'>" +
    "<h4 style='padding: 10px; text-align: center;'>Jaka platforma internetowa jest najlepsza do prowadzenia zajęć zdalnych?</h4>" +
    "<div style='text-align: center; padding: 10px;'>" +
    "<div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp1' id='opcja1' value='MS Teams' checked>" +
    "<label class='form-check-label' for='opcja1'>MS Teams</label> </div>" +
    "<div class='form-check'> <input class='form-check-input' type='radio' name='odp1' id='opcja2' value='UPEL'>" +
    "<label class='form-check-label' for='opcja2'>UPEL</label>" +
    "</div> <div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp1' id='opcja3' value='Zoom'>" +
    "<label class='form-check-label' for='opcja3'>Zoom</label> </div> </div> " +

    "<h4 style='padding: 10px; text-align: center;'>Jaki gorący napój jest najlepszy?</h4>" +
    "<div style='text-align: center; padding: 10px;'>" +
    "<div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp2' id='opcja4' value='Kawa' checked>" +
    "<label class='form-check-label' for='opcja4'>Kawa</label> </div>" +
    "<div class='form-check'> <input class='form-check-input' type='radio' name='odp2' id='opcja5' value='Herbata'>" +
    "<label class='form-check-label' for='opcja5'>Herbata</label>" +
    "</div> <div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp2' id='opcja6' value='Gorąca czekolada'>" +
    "<label class='form-check-label' for='opcja6'>Gorąca czekolada</label> </div> </div> " +

    "<h4 style='padding: 10px; text-align: center;'>Jakie jest twoje pierwsze skojarzenie, kiedy usłyszysz słowo Ajax?</h4>" +
    "<div style='text-align: center; padding: 10px;'>" +
    "<div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp3' id='opcja7' value='Technika tworzenia aplikacji internetowych' checked>" +
    "<label class='form-check-label' for='opcja7'>Technika tworzenia aplikacji internetowych</label> </div>" +
    "<div class='form-check'> <input class='form-check-input' type='radio' name='odp3' id='opcja8' value='Produkt do czyszczenia'>" +
    "<label class='form-check-label' for='opcja8'>Produkt do czyszczenia</label>" +
    "</div> <div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp3' id='opcja9' value='Klub piłkarski Ajax Amsterdam'>" +
    "<label class='form-check-label' for='opcja9'>Klub piłkarski Ajax Amsterdam</label> </div> </div> " +
    "<input style='display: block; margin: 0 auto;' class='btn btn-primary' type='button' value='Wyślij' onclick='insert_data_offline(this.form)'>" +
    "</div> </form> <div id='result'></div>"

    $("#data").html(form_html);
    $("#chart").css("display", "none");
}


function data_online_form() {
    
    let form_html = "<h2 style='padding: 10px; text-align: center;'>Wypełnij ankietę poniżej</h2>" +
    "<form name='insert_data'> <div style='background-color: #4d4d4d; color: #ffffff; border: 2px solid #8c8c8c; border-collapse: collapse; border-radius: 20px; width: 500px; padding: 20px; margin: auto;'>" +
    "<h4 style='padding: 10px; text-align: center;'>Jaka platforma internetowa jest najlepsza do prowadzenia zajęć zdalnych?</h4>" +
    "<div style='text-align: center; padding: 10px;'>" +
    "<div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp1' id='opcja1' value='MS Teams' checked>" +
    "<label class='form-check-label' for='opcja1'>MS Teams</label> </div>" +
    "<div class='form-check'> <input class='form-check-input' type='radio' name='odp1' id='opcja2' value='UPEL'>" +
    "<label class='form-check-label' for='opcja2'>UPEL</label>" +
    "</div> <div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp1' id='opcja3' value='Zoom'>" +
    "<label class='form-check-label' for='opcja3'>Zoom</label> </div> </div> " +

    "<h4 style='padding: 10px; text-align: center;'>Jaki gorący napój jest najlepszy?</h4>" +
    "<div style='text-align: center; padding: 10px;'>" +
    "<div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp2' id='opcja4' value='Kawa' checked>" +
    "<label class='form-check-label' for='opcja4'>Kawa</label> </div>" +
    "<div class='form-check'> <input class='form-check-input' type='radio' name='odp2' id='opcja5' value='Herbata'>" +
    "<label class='form-check-label' for='opcja5'>Herbata</label>" +
    "</div> <div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp2' id='opcja6' value='Gorąca czekolada'>" +
    "<label class='form-check-label' for='opcja6'>Gorąca czekolada</label> </div> </div> " +

    "<h4 style='padding: 10px; text-align: center;'>Jakie jest twoje pierwsze skojarzenie, kiedy usłyszysz słowo Ajax?</h4>" +
    "<div style='text-align: center; padding: 10px;'>" +
    "<div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp3' id='opcja7' value='Technika tworzenia aplikacji internetowych' checked>" +
    "<label class='form-check-label' for='opcja7'>Technika tworzenia aplikacji internetowych</label> </div>" +
    "<div class='form-check'> <input class='form-check-input' type='radio' name='odp3' id='opcja8' value='Produkt do czyszczenia'>" +
    "<label class='form-check-label' for='opcja8'>Produkt do czyszczenia</label>" +
    "</div> <div class='form-check'>" +
    "<input class='form-check-input' type='radio' name='odp3' id='opcja9' value='Klub piłkarski Ajax Amsterdam'>" +
    "<label class='form-check-label' for='opcja9'>Klub piłkarski Ajax Amsterdam</label> </div> </div> " +
    "<input style='display: block; margin: 0 auto;' class='btn btn-primary' type='button' value='Wyślij' onclick='insert_data_online(this.form)'>" +
    "</div> </form> <div id='result'></div>"

    $("#data").html(form_html);
    $("#chart").css("display", "none");
}


function insert_data_offline(form) {

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let arr_tmp = {};
    arr_tmp.data = "2021-02-05";
    arr_tmp.czas = time;
    arr_tmp.odp1 = form.odp1.value;
    arr_tmp.odp2 = form.odp2.value;
    arr_tmp.odp3 = form.odp3.value;

    var trans = db.transaction("medyk", "readwrite");
    var storage = trans.objectStore("medyk");

    if (storage.put(arr_tmp)) {
        $("#result").html("Pomyślnie wprowadzono dane!");
    }
}


function show_data_offline() {
    
    let list = "" +
    "<h2 style='text-align: center;'>Wyniki offline:</h2>" +
    "<table><thead><tr><th>Godzina wysłania odpowiedzi</th><th>Jaka platforma internetowa jest najlepsza do prowadzenia zajęć zdalnych?</th>" + 
    "<th>Jaki gorący napój jest najlepszy?</th>" + 
    "<th>Jakie jest twoje pierwsze skojarzenie, kiedy usłyszysz słowo Ajax?</th></tr></thead><tbody>";


    var trans = db.transaction("medyk", "readwrite");
    var storage = trans.objectStore("medyk");

    storage.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            list = list + "<tr><td>" + cursor.value.czas + "</td><td>" + cursor.value.odp1 + "</td><td>" + cursor.value.odp2 + "</td><td>" + cursor.value.odp3 + "</td>";
            cursor.continue();
        } else {
            list = list + "</tbody></table>";
            $("#data").html(list);
        }
    }
    storage.openCursor().onerror = function (event) {
        console.error("Read has failed.");
    }
    //$("#chart").css("display", "none");
}


function insert_data_online(form) {

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let arr_tmp = {};
    arr_tmp.data = "2021-02-05";
    arr_tmp.czas = time;
    arr_tmp.odp1 = form.odp1.value;
    arr_tmp.odp2 = form.odp2.value;
    arr_tmp.odp3 = form.odp3.value;

    json_send = JSON.stringify(arr_tmp);

    $.ajax({
        type : "POST",
        url : "http://pascal.fis.agh.edu.pl/~8lasek/projekt2/rest/insert",
        data : json_send,
        success : function(response) {
            if (response["status"] == "ok") {
                alert("Pomyślnie wprowadzono dane");
            } else {
                alert(response["msg"]);
            }
        },
        error : function(response) {
            console.log(response);
            alert(response);
            alert("Wystąpił błąd podczas tworzenia XMLHttpRequest");
        }
    })
}


function show_data_online() {

    let list = "" +
    "<h2>Wyniki online:</h2>" +
    "</br><button class='btn btn-info' type='button' onclick='show_table()'>Wyświetl dane</button>" +
    "</br></br><button class='btn btn-info' type='button' onclick='draw_data()'>Pokaż wykres</button>" +
    "";

    $("#data").html(list);
    $("#chart").css("display", "none");
}


function show_table() {

    let list = "" +
    "<h2>Wyniki online:</h2>" +
    "<table><tr><th>Godzina wysłania odpowiedzi</th><th>Jaka platforma internetowa jest najlepsza do prowadzenia zajęć zdalnych?</th>" + 
    "<th>Jaki gorący napój jest najlepszy?</th>" + 
    "<th>Jakie jest twoje pierwsze skojarzenie, kiedy usłyszysz słowo Ajax?</th></tr>";

    $.ajax({
        method : "GET",
        url : "http://pascal.fis.agh.edu.pl/~8lasek/projekt2/rest/get_all_data",
        success : function(response) {
            response.forEach((item) => {
                list = list + "<tr><th>" + item.czas + '</th><th>' + item.odp1 + '</th><th>' + item.odp2 + '</th><th>' + item.odp3 + '</th></tr>';
            })
            list = list + "</table>"
            $("#data").html(list);
        },
        error : function() {
            alert("Wystąpił błąd przy próbie uzyskania danych.");
        }
    })
}


var pyt1 = [0, 0, 0];
var pyt2 = [0, 0, 0];
var pyt3 = [0, 0, 0];
var a = "pyt1";
var b = "pyt2";
var c = "pyt3";


function draw_data() {

    let list = "" +
    "<h2>Wybierz pytanie:</h2>" + 
    "</br><button class='btn btn-info' type='button' onclick='generate_chart(pyt1, a)'>Jaka platforma internetowa jest najlepsza do prowadzenia zajęć zdalnych?</button>" +
    "</br></br><button class='btn btn-info' type='button' onclick='generate_chart(pyt2, b)'>Jaki gorący napój jest najlepszy?</button>" +
    "</br></br><button class='btn btn-info' type='button' onclick='generate_chart(pyt3, c)'>Jakie jest twoje pierwsze skojarzenie, kiedy usłyszysz słowo Ajax?</button>" +
    "";

    var A = "MS Teams";
    var B = "UPEL";
    var C = "Kawa"
    var D = "Herbata"
    var E = "Technika tworzenia aplikacji internetowych"
    var F = "Produkt do czyszczenia"
    pyt1 = [0, 0, 0];
    pyt2 = [0, 0, 0];
    pyt3 = [0, 0, 0];

    
    $.ajax({
        async : false,
        method : "GET",
        url : "http://pascal.fis.agh.edu.pl/~8lasek/projekt2/rest/get_all_data",
        success : function(response) {
            response.forEach((item) => {
                
                if(item.odp1==A){
                    pyt1[0] += 1;
                } else if(item.odp1==B){
                    pyt1[1] += 1;
                } else { pyt1[2] += 1; }

                if(item.odp2==C){
                    pyt2[0] += 1;
                } else if(item.odp2==D){
                    pyt2[1] += 1;
                } else { pyt2[2] += 1; }

                if(item.odp3==E){
                    pyt3[0] += 1;
                } else if(item.odp3==F){
                    pyt3[1] += 1;
                } else { pyt3[2] += 1; }
            })
        }
    })

   $("#data").html(list);
}


function generate_chart(pyt, chosen) {

    $("#data").html("");

    var Pytanie;
    var Odpow1;
    var Odpow2;
    var Odpow3;

    if(chosen=="pyt1"){
        Pytanie = "Jaka platforma internetowa jest najlepsza do prowadzenia zajęć zdalnych?"
        Odpow1 = "MS Teams"
        Odpow2 = "UPEL"
        Odpow3 = "Zoom"
    } else if(chosen=="pyt2"){
        Pytanie = "Jaki gorący napój jest najlepszy?"
        Odpow1 = "Kawa"
        Odpow2 = "Herbata"
        Odpow3 = "Gorąca czekolada"
    } else {
        Pytanie = "Jakie jest twoje pierwsze skojarzenie, kiedy usłyszysz słowo Ajax?"
        Odpow1 = "Technika tworzenia aplikacji internetowych"
        Odpow2 = "Produkt do czyszczenia"
        Odpow3 = "Klub piłkarski Ajax Amsterdam"
    }

    var chart = new CanvasJS.Chart("chart", {

        theme: "dark1",
        width: 550,
        height: 450,
        animationEnabled: true,
        title : {
            text : Pytanie,
            margin: 15
        },
        axisY : {
            title : "Ilość odpowiedzi",
            margin: 15,
            interval: 1,
        },
        data : [{
            type : "column",
            showInLegend : false,
            dataPoints: [
                {y: pyt[0], label: Odpow1},
                {y: pyt[1], label: Odpow2},
                {y: pyt[2], label: Odpow3}
            ]
        }]
    });

    $("#chart").css("display", "block");
    $("#chart").css("margin", "0 auto");

    chart.render();
}

