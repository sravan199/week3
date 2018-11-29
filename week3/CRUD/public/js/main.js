
$(document).ready(function(){
    $('.deleteUser').on('click',deleteUser);
});

function deleteUser(){
    var confirmation=confirm('Do you want to delete all');

if(confirmation){ 
        $.ajax({
            type:'DELETE',
         url:'/users/delete/all'              
        }).done(function(response){
            window.location.replace('/');
        });
    }
    else{console.log('else part') ;return false};
}
