console.log('script is fired up');

$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                console.log("Checkbox is checked.");
                $(this).val=i._id;
                console.log(i._id);
            }
            else if($(this).prop("checked") == false){
                console.log("Checkbox is unchecked.");
            }
        })
    });
