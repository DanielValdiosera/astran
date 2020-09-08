
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });
    services('consultancy');
})
$(document).on('click','#service-consultancy',function(){
    services('consultancy');
});

$(document).on('click','#service-implementation',function(){
    services('implementation');
})
$(document).on('click','#service-tecnology', function(){
    services('tecnology');
})
$(document).on('click','#service-training',function(){
    services('training');
})

function services(service){
    var options =[{}]; 
    var html='';
    switch(service){
        case 'consultancy':

                options =[{url:'inteligencia-empresarial.html',topic:'Inteligencia Empresarial'},
                          {url:'optimizacion-portafolio-iniciativas.html',topic:'Optimización del Portafilio de iniciativas'},
                          {url:'planeacion-seguimiento-proyectos.html',topic:'Planeación y Seguimiento de Proyectos:<br/>Predictivos y/o Adaptativos'},
                          {url:'gestion-beneficios.html',topic:'Gestión de Beneficios'},
                          {url:'administracion-cambio.html',topic:'Administración del Cambio'},
                        ];
             
                
        break;

        case 'implementation':

            options =[{url:'implementacion-especialidades.html#gestion',topic:'Gestión de proyectos'},
            {url:'implementacion-especialidades.html#tecnologia',topic:'Tecnología microsoft para gestión de proyectos'},
            {url:'implementacion-especialidades.html#administracion',topic:'Administración del cambio'},
      
          ];

        break;
        case 'tecnology':
          
            options =[{url:'tecnologia-inteligencia-empresarial.html',topic:'Inteligencia Empresarial'},
            {url:'administracion-empresarial-proyectos-ms-ppm.html',topic:'Administración empresarial de proyectos con microsoft'},
            {url:'administracion-empresarial-proyectos-ms-ppm.html#',topic:'Aceleradores Astran'},
             ];
        
        break;
        case 'training':    
                options =[{url:'capacitacion.html',topic:'Prácticas de gestión'},
                {url:'capacitacion.html',topic:'Competencias digitales'},
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