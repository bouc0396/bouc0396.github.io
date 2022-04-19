
function formValidation()
{
    var x=document.forms["myform"]["yourname"].value;  
    if(x==null || x=="" )
    {
        alert("Please enter your name.");
        return false;
    }

    var y=document.forms["myform"]["email"].value;
    if(y==null || y=="")
    {
        alert("Please enter your email.");
        return false;
    }

    var y=document.forms["myform"]["address"].value;
    if(y==null || y=="")
    {
        alert("Please enter your address.");
        return false;
    }
    var y=document.forms["myform"]["city"].value;
    if(y==null || y=="")
    {
        alert("Please enter your city.");
        return false;
    }

    var y=document.forms["myform"]["postalcode"].value;
    if(y==null || y=="")
    {
        alert("Please enter your postal code.");
        return false;
    }

    else
    {
        return true;
    }
}


window.onload = init;

function init() {

    $('#myform').submit(function (e) {
         e.preventDefault();
         $("#profilecard").removeClass('reveal');
         var form = this;
         $("#profilecard").fadeIn(1000, function(){
                showformValues(form);
                $('.overlay-container').delay(500).fadeOut(500);
                $("#myform").addClass('reveal');
         })
    });

}

function showformValues(myform){
    var formValues = $(myform).serializeArray();     
    $.each(formValues, function(index, field){
        $("#profilecard").find("#"+field.name+"_result").text(field.value);
        if(field.name=="email"){
            $("#profilecard").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
        }
    })              
}