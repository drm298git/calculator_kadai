// データ
let result = "";
// =で計算したかどうか
let is_calc = false;


// 初期表示
window.onload = function () {
    result = document.getElementById('result');
};

// 入力されている値が演算子かどうか
function is_ope_last(){
    return ["+","-","*","/"].includes(result.value.toString().slice(-1));
}

// 最初に入力されている値が00どうか
function num_click_00_first(){
    return ["00"].includes(result.value.toString().slice(0,2));
}

//小数点キー押下
function radix_click(){
    result.value = result.value += "."
    is_calc = false;

}

// Cキー押下
function c_click(){
    result.value = "";
    is_calc = false;
}

//桁数を揃える関数10桁を表示させる関数
function digitNum(val) {
    return Math.round(val*100000000)/100000000;
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
    if(is_calc) is_calc = false;
    
    if(num_click_00_first()){
        result.value=""
    } else {
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

