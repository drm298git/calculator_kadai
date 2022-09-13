// データ
let result = "";
// =で計算したかどうか
let is_calc = false;

// 初期表示
window.onload = function () {
    result = document.getElementById('result');
};

// Cキー押下
function c_click(){
    result.value = "0";
    is_calc = false;
}

// 数字キー押下
function num_click(val){
    if(is_calc)  result.value = "0";
    is_calc = false;  

    if(result.value =="0" && val == "0"){
        result.value = "0";
    }else if(result.value == "0" && val == "."){
        result.value = "0.";
    }else if(result.value == "0"){
        result.value = val;
    }else{
        result.value += val;
    }
}

//00キー押下
function num_click_00(val){
    if(is_calc) resule.value = "0";
    is_calc = false;

    if(result.value =="00" && val == "00"){
        result.value = "0";
    }else if(result.value == "00" && val == "."){
        result.value = "0.";
    }else if(result.value == "00"){
        result.value = val;
    }else{
        result.value += val;
    }
}

// 演算子キー押下
function ope_click(val){
    if(is_calc)  is_calc = false;

    if(is_ope_last()){
        result.value = result.value.slice(0, -1) + val;
    } else {
        result.value += val;
    }
}

// =キークリック
function equal_click(){
    if(is_ope_last())  result.value = result.value.slice(0, -1);

    let temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
    if(temp == Infinity || Number.isNaN(temp)){
        result.value = "Error";
    }else{
        result.value = temp;
        is_calc = true;
    }
}

// 入力されている値が演算子かどうか
function is_ope_last(){
  return ["+","-","*","/"].includes(result.value.toString().slice(-1));
}