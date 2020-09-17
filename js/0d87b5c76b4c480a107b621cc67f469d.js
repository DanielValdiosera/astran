
var url =  window.location.host;
var api =  null;
switch(url){
    case 'grupoastranastranti.com':
    case 'astran.com.mx':
        this.api = 'http://bk.astran.com.mx/public/index.php/api'
        break;
    default : 
        this.api = 'http://astran.test/api'
    break;
}


//Redirecciona al formulario de reclamos
$(document).on('click','#claims',function(){
    $(location).attr('href','reclamos-sugerencias.html')
});

$(document).ready(function(){


    

    //Send mail
        $("#formContacto").submit(function(e){
            e.preventDefault();
            getSpiner('add');
            let dato = {
                nombre:   $('[name="nombre"]').val() ,
                telefono: $('[name="telefono"]').val() ,
                email:    $('[name="email"]').val() ,
                asunto:   $('[name="asunto"]').val() ,
                mensaje:  $('[name="comentario"]').val()  
            };
            var request = $.ajax({
                url:'http://astran.test/api/mailcontacto' ,
                method:'POST' ,
                data: 'json='+ JSON.stringify(dato) ,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                success: function(dato){
                    getSpiner('remove');
                    if(dato.estatus == 500 ){
                        let response = JSON.parse(dato.mensaje)
                        var keys = Object.keys(response)
    
                        for(var i=0 ; i< keys.length; i++){
                            
                            switch(keys[i]){
                                case 'asunto':
                                    console.log(response.asunto)
                                    break;
                                case 'email':
                                    console.log(response.email)
                                    $("#validateEmail").html("*" + response.email);

                                    break;
                                case 'mensaje':
                                    console.log(response.mensaje)
                                break;
                                case 'nombre':
                                    console.log(response.nombre)
                                    $("#validateName").html("*" + response.nombre);

                                    break;
                                case 'telefono':
                                    console.log(response.telefono)
                                    $("#validatePhone").html("*" +response.telefono);

                                    break;
                            }
    
                        }
    
    
                    } else if (dato.estatus == 200){
    
                        toastr.options.timeOut = 5500; // 1.5s
                        toastr.info(dato.mensaje);
                        limpiar();
                    }
                }
            });
    
            request.fail(function(jqXHR, textStatus){
                getSpiner('remove');
                toastr.options.timeOut = 5500; // 1.5s
                toastr.error("hay un error de conexion");
    
            });
    
    
    
        
        })
    //Fin Send mail 
    });
    
    function getSpiner(tipo){
    
        var spiner ='<div id="fountainG"> ' +
        '<div id="fountainG_1" class="fountainG"></div>' +
        '<div id="fountainG_2" class="fountainG"></div>' +
        '<div id="fountainG_3" class="fountainG"></div>' + 
        '</div>';
    
        switch(tipo){
            case 'add':
    
                $("#sendMail").html("");
                $("#sendMail").append(spiner);
                $("#sendMail").prop('disabled',true);
            
            break;
            
            case 'remove':
                   $("#sendMail").html("");
                   $("#sendMail").append("Enviar");
                   $("#sendMail").prop('disabled',false);
            break;
    
        }
    }
    
    function limpiar(){
        $('[name="nombre"]').val("") ,
        $('[name="telefono"]').val("") ,
        $('[name="email"]').val("") ,
        $('[name="asunto"]').val("") ,
        $('[name="comentario"]').val("")  
        $("#validateName").html("");
        $("#validatePhone").html("");
        $("#validateEmail").html("");



    
    }
    
    
    
    
    
    
    