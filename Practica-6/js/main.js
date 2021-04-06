$(document).ready(function(){
    $("#boton-carga-texto").click(function(){
        //$("#texto-usuario").text($("#texto-input").val());
        sendCustomRequest();
    });
});

function processReponse(params) {
    $("#requestReponse").text(params);
}

function showError() {
    console.error("No se ha indicado un parámetro válido");
}

function sendCustomRequest() {
    let ajaxresponse = $.parseJSON($.ajax({
        url: "https://jsonplaceholder.typicode.com/comments",
        type: 'GET',
        async: false,
        data: 'postId='+$("#num-input"),
        success: processReponse,
        error: showError,
    }).responseText);

    alert (ajaxresponse);
}

