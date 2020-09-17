
$(document).ready(function(){
    services('consultancy');
})
$(document).on('mouseover click','#service-consultancy',function(){
    services('consultancy');
});

$(document).on('mouseover click','#service-implementation',function(){
    services('implementation');
})
$(document).on('mouseover click','#service-tecnology', function(){    
    services('tecnology');
})
$(document).on('mouseover click','#service-training',function(){
    services('training');
})

function services(service){
    var options =[{}]; 
    var html='';
    switch(service){
        case 'consultancy':

                options =[{url:'inteligencia-empresarial.html',topic:'Inteligencia Empresarial'},
                          {url:'optimizacion-portafolio-iniciativas.html',topic:'Optimización del Portafolio de Iniciativas'},
                          {url:'planeacion-seguimiento-proyectos.html',topic:'Planeación y Seguimiento de Proyectos:<br/>Predictivos y/o Adaptativos'},
                          {url:'gestion-beneficios.html',topic:'Gestión de Beneficios'},
                          {url:'administracion-cambio.html',topic:'Administración del Cambio'},
                        ];
             
                
        break;

        case 'implementation':

            options =[{url:'implementacion-especialidades.html#gestion',topic:'Gestión de Proyectos'},
            {url:'implementacion-especialidades.html#tecnologia',topic:'Tecnología Microsoft para Gestión de Proyectos'},
            {url:'implementacion-especialidades.html#administracion',topic:'Administración del Cambio'},
      
          ];

        break;
        case 'tecnology':
          
            options =[{url:'tecnologia-inteligencia-empresarial.html',topic:'Inteligencia Empresarial'},
            {url:'administracion-empresarial-proyectos-ms-ppm.html',topic:'Administración Empresarial de Proyectos con Microsoft'},
            {url:'administracion-empresarial-proyectos-ms-ppm.html#',topic:'Aceleradores ASTRAN'},
             ];
        
        break;
        case 'training':    
                options =[{url:'capacitacion.html',topic:'Prácticas de Gestión'},
                {url:'capacitacion.html',topic:'Competencias Digitales'},
                ];
        
        break;
        default:
            options = ['Por el momento no hay información',
          
            ];
            break;
    }

   
    for(let i=0; i<options.length;i++){
        html +=  '<p class="servicios-p2 "><a style="color:white" target="_blank" href="'+options[i].url+'">'+options[i].topic+'</a></p>';

        //#bug  deberiamos arreglar el width del contenedor 
        if(i<(options.length-1)){
            html += '<hr width="10%">';
        }
        
    }
   
    $("#options-services").html(html);

}

//Optimizar el código
$("#service-consultancy").hover(function(){
    $("#img1").css({
        "opacity":".1",
        "cursor":"pointer",
    });
    $("#p1").css({
        "background-color":"rgba(0,0,0,0)",
        "color": "#fff"
    });
    }, function(){
    $("#img1").css({
        "opacity":".5"
    });
    $("#p1").css({
        "background-color":"rgba(255,255,255,0.8)",
        "color": "#1868a0"

    });
  
  });
  $("#service-implementation").hover(function(){
    $("#img2").css({
        "opacity":".1",
        "cursor":"pointer",
    });
    $("#p2").css({
        "background-color":"rgba(0,0,0,0)",
        "color": "#fff"
    });
    }, function(){
    $("#img2").css({
        "opacity":".5"
    });
    $("#p2").css({
        "background-color":"rgba(255,255,255,0.8)",
        "color": "#1868a0"

    });
  
  });

  $("#service-tecnology").hover(function(){
    $("#img3").css({
        "opacity":".1",
        "cursor":"pointer",
    });
    $("#p3").css({
        "background-color":"rgba(0,0,0,0)",
        "color": "#fff"
    });
    }, function(){
    $("#img3").css({
        "opacity":".5"
    });
    $("#p3").css({
        "background-color":"rgba(255,255,255,0.8)",
        "color": "#1868a0"

    });
  
  });

  $("#service-training").hover(function(){
    $("#img4").css({
        "opacity":".1",
        "cursor":"pointer",
    });
    $("#p4").css({
        "background-color":"rgba(0,0,0,0)",
        "color": "#fff"
    });
    }, function(){
    $("#img4").css({
        "opacity":".5"
    });
    $("#p4").css({
        "background-color":"rgba(255,255,255,0.8)",
        "color": "#1868a0"

    });
  
  });

