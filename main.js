
function button_calculate_click(){

    var x = document.getElementById("input_text1_id").value;
    var x1 = document.getElementById("input_text2_id").value;
    var x2 = document.getElementById("input_text3_id").value;
    var y1 = document.getElementById("input_text4_id").value;
    var y2 = document.getElementById("input_text5_id").value;
    var result =  interpolation(x,x1,x2,y1,y2)  ;
    
    document.getElementById("text_result_id").innerText = result;
      
    }
    
    function interpolation(x,x1,x2,y1,y2){
    
    return((((x-x2)/(x1-x2))*y1) + (((x-x1)/(x2-x1)) *y2));
    
    }