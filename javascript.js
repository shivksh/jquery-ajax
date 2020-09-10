$(document).ready(function(){
    $("#science").click(function(){
if($("this").attr("checked", true)){
    $(".commerce").hide();
}
});

$("#commerce").click(function(){
if($('this').attr("checked",true)){
    $(".science").hide();
}
});




function phone_validate(phone){
    if(phone.length<10 || phone.length>10){
        $('#pdata').text("**Contact is not valid");
        phone_check = false;
        return false;
    }
    else
    {
        return true;
    }


}

function class_validate(clas){

    if(clas.length<=0){
        $('#classdata').text("**This field is mandatory");
        clas_check = false;
        return false;

    }
    

    else if( Number(clas)>=70){
        $('#classdata').text("**Class Id. must be less or equal 70");
        clas_check = false;
        return false;

    }

    else{
        return true;
    }


}

function fname_validate(fname){

    if(fname.length==0){
        $('#fdata').text("**This field is mandatory");
        fname_check = false;
        return false;
    }

    else if(fname.length>15){
        $('#fdata').text("**First name is too long");
        fname_check = false;
        return false;

    }
    else{
        return true;
    }


}

function lname_validate(lname){

    if(lname.length==0){
        $('#ldata').text("**This field is mandatory");
        lname_check = false;
        return false;

    }


    else if(lname.length>15){
        $('#ldata').text("**Last name is too long");
        lname_check = false;
        return false;

    }
    else{
        return true;
    }

}

function image_validate(image){

    if(image.length==0){
        $('#filedata').text("**This field is mandatory");
        image_check = false;
        return false;
    }
    else{
        return true;
    }


}

function radio_validate(){

    if($('#science').is(':checked')  || $('#commerce').is(':checked')) { 
        return true;
    }
    else{
        $('#radiodata').text("**Please Check Any From the Below");
        radio_check = false;
        return false;

    }

}

function check_validate(){
var select = $('input[type="checkbox"]:checked');
if(select.length>=2){
    return true;
}
else{
    $('#check').text('**Atleast select 2 subjects');
    console.log('this function');
    return false;
}
}

$("form").submit(function(event){


var phone = $("#pname").val();
var clas = $("#class").val();
var fname = $("#fname").val();
var lname = $("#lname").val();
var image = $("#image").val();



var phone_check=true;
var clas_check=true;
var fname_check=true;
var lname_check=true;
var image_check=true;
var radio_check=true;





    // radio_validate();
    // image_valstop refreshing page on button click ajaxidate(image);
    // lname_validate(lname);
    // fname_validate(fname);
    // class_validate(clas);
    // phone_validate(phone);
    if( phone_validate(phone)
    &&  class_validate(clas)
    &&  lname_validate(lname)
    &&  image_validate(image) 
    &&  radio_validate()
    &&  fname_validate(fname)
    &&  check_validate()
    ){

var that = $(this),
url=$(this).attr('action'),
type=$(this).attr('method'),
data={};

that.find('[name]').each(function(index,value){
var that = $(this),
name=that.attr('name'),
value=that.val();
data[name] = value;

});
        $.ajax({
            url:url,
            type:type,
            data:data,
            success:function(response)
            {
                if(response)
                {
                    console.log('yes');
                }
                else
                {
                    console.log('else statement');
                }
            }
        });
        return false;        
}
    else{
        return false;    
}


});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
          $('#blah').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]); // convert to base64 string
      }
    }

    $("#image").change(function() {
      readURL(this);
    });

});