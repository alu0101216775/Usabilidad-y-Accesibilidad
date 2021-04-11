$(document).ready(function(){
    $("#boton-carga-texto").click(function(){
        //$("#texto-usuario").text($("#texto-input").val());
        sendCustomRequest();
        generateDatabase();
    });
});

function processReponse(params) {
    $("#requestReponse").text(params);
}

function showError() {
    console.error("No se ha indicado un parámetro válido");
}

function sendCustomRequest() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/comments?",
        type: 'GET',
        async: true,
        data: 'postId='+$("#num-input").val(),
        success: function(response){
            let htmlResult = "";
            let i = 0;
            response.forEach(element => {
                htmlResult += String(i) + ":<br>postId: " + response[i].postId + ":<br>id: " + response[i].id + ":<br>name: " + response[i].name + ":<br>email: " + response[i].email + ":<br>body: " + response[i].body + "<br><br><br>";
                i++;
            });
            $("#requestReponse").append(htmlResult)
        },
        error: showError,
    });
    console.log("https://jsonplaceholder.typicode.com/comments?" + 'postId='+$("#num-input").val());
}

function generateDatabase() {
    var firebaseConfig = {
        apiKey: "AIzaSyAR76RszoKhD6U9doTNOvK9c0iXrpmi2vY",
        authDomain: "uya-practica6.firebaseapp.com",
        projectId: "uya-practica6",
        storageBucket: "uya-practica6.appspot.com",
        messagingSenderId: "231808850020",
        appId: "1:231808850020:web:b73582a19f267fc49be771",
        measurementId: "G-GV63YS5WX1"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    let infoDatabase = firebase.database();
    let username = $("#nombre-input").val();
    let surname = $("#apellido-input").val();
    let email = $("#mail-input").val();
    let age = $("#age-input").val();
    let telephone = $("#telef-input").val();
    let isAdult = age > 17;
    let id = parseInt(Math.random() * 1000000);
    let referenceDatabase = infoDatabase.ref(username+surname+id);

    let jsonObject = {
        Nombre: username,
        Apellido: surname,
        Email: email,
        Telefono: telephone,
        MayorDeEdad: isAdult
    }

    referenceDatabase.set(jsonObject);
    /*.then((referenceDatabase) => {
        console.log("Document written with ID: ", referenceDatabase.id);
    })
    .catch((referenceDatabase) => {
        console.error("Error adding document: ", -1);
    });*/

    /*referenceDatabase.child("messages").on("value", function(snapshot) {
        console.log("There are "+snapshot.numChildren()+" messages");
      })*/

    /*infoDatabase.collection("Datos de usuarios").add(jsonObject)
    .then((referenceDatabase) => {
        console.log("Document written with ID: ", referenceDatabase.id);
    })
    .catch((referenceDatabase) => {
        console.error("Error adding document: ", error);
    });*/
}