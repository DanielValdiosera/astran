
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
$(function(){

    $("#tags").keyup(function(){
        let q = $("#tags").val();
        sugesstion(q);

  });

  $("#tags").keypress(function(e) {
   
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){
        search();
    }
});

    
     
});





//Busqueda de contenido
function search()
{
    console.log(this.api);
    let q = $("#tags").val();
    var listaSearch = $("#content-container");
    let container = $('#pagination');

    let spiner = '<div class="cssload-spinner"> ' +
                    '<div class="cssload-ball cssload-ball-1"></div>' +
                    '<div class="cssload-ball cssload-ball-2"></div>' +
                    '<div class="cssload-ball cssload-ball-3"></div>' +
                    '<div class="cssload-ball cssload-ball-4"></div>' +
                 '</div>';

    listaSearch.html(spiner);

    var request  = $.ajax({
        url:this.api+'/search?q='+q ,
        method:'GET',
        success:function(r){
            var d = r ;
            listaSearch.html("");
            //paginacion

            container.pagination({
                dataSource: d,
                pageSize:6,

                callback: function (data, pagination) {

                    if(d.length != 0) 
                    {
                       var html = ' <div class="content-search">';  
                        $.each(data ,function(i,item){
                            html+= '<article class="search-result-item"><h4 style="text-align:left !important;padding:0px !important;margin-top:10px"><a href="'+item.url+'" class="searchTitle">'+item.title+'</a></h4>' +
                                '<span class="searchContent">'+ item.content.substr(0,250) +' ... </span></article>'    
                        });
        
                        html += "</div>";
                        listaSearch.html(html);
                    }else {
                        listaSearch.html('<h4 style="padding:0px !important;margin-top:10px; color:red">No exixten coincidencias con los parametros buscados.</h4>');
                    }

                }
            });       
          
        }
    });

    request.fail(function( jqXHR, textStatus ) {
        listaSearch.html('<h4 style="padding:0px !important;margin-top:10px; color:red">Hay un problema en el servidor , vuelva intntarlo más tarde</h4>')
      });
}
// Fin Busqueda de contenido

//Sugerencias de contenido
function sugesstion(q){
    var request  = $.ajax ({
        url:this.api+'/sugesstion?q='+q ,
        method:'GET' ,
        success: function(r) {
            var availableTags = []; 
            for(let i = 0 ; i<r.length ;  i++){
                availableTags.push(r[i].title);
            }
            
            $( "#tags" ).autocomplete({
            source: availableTags
            });
        },
        error: function(r){
       

        }
    });
}

// Fin sugerencias de contenido




