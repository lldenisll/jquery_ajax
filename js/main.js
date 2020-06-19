function consultCep(){
    var cep=document.getElementById("CEP").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    $.ajax({
        url:url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titlecep").html("CEP: "+ response.cep);
            $(".cep").show()

        }
    })
}

$(function(){
    $(".cep").hide()
});

