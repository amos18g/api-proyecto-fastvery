

function pruebaObtener(){
    console.log('funcionando')
    $.ajax({
        url: "/api/task/",
        method:"GET",
        datatype:"json",
        success:(res)=>{
            console.log(res);
            

            for (let index = 0; index < res.length; index++) {              
                $('#principal').append(`<div>${res[index].title}</div>`)
                
            }
        }, 
        error:()=>{
            console.error(error);
        }

    });
}