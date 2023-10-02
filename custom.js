let digit = document.getElementById('digit');
let message = document.querySelector('.message');
let class_sub = document.getElementById('class');
let btn1 = document.querySelector('#button-1');
let btn2 = document.querySelector('#button-2');
let main = document.querySelector('#main');
let total_txt=document.querySelector('.total');
let percent_txt = document.querySelector('.percent');
let comment_txt = document.querySelector('.comment');
let show = document.querySelector('.show');

btn1.addEventListener('click',()=>{
   
    let class_detail = class_sub.value[0];
    let sub_mark = parseFloat(class_sub.value.slice(2));
    let marks = digit.value;
    console.log(sub_mark)
    const array = marks.split(',');


    // console.log(array.length);
    // console.log(class_detail)
    if(array.length == class_detail){    
    int_array=[];
    for(let int of array){        
        int_array.push(parseInt(int));
    }

    let sum = int_array.reduce((a,b)=>a+b,0);
    let total_sum;
    if (sum == NaN){
        total_sum = ' This  is not a number';
        
    }else{
        total_sum = sum;
    }

    let percent_value = total_sum / sub_mark;

    let comment;
    if(percent_value >= 90 && percent_value <=100){
        comment = 'Excellent';
    }else if(percent_value >= 80 && percent_value <90){
        comment='Very Good';
    }else if(percent_value >= 70 && percent_value <80){
        comment='Good';
    }else if(percent_value >= 60 && percent_value <70){
        comment='Satisfactory';
    }else if(percent_value >= 50 && percent_value <60){
        comment='Fair';
    }else if(percent_value >= 40 && percent_value <50){
        comment='Not so Good';
    }else if(percent_value >=33 && percent_value <40){
        comment='Pass';
    }else if(percent_value >0 && percent_value <33){
        comment='fail';
    }
    if(array.length >1){
    total_txt.innerHTML = total_sum;
    percent_txt.textContent = percent_value + '%';
    comment_txt.textContent = comment;
    message.textContent = 'This is good job'

    }else{
        message.textContent = ' Input field is empty !'
    }
    
}else{
     total_txt.innerHTML='';
    percent_txt.textContent = '';
    comment_txt.textContent = '';
    message.textContent = `Add total ${(class_detail)} subject mark : `;
}
    
    
});
btn2.addEventListener('click',()=>{
    digit.value = '';
    total_txt.innerHTML='';
    percent_txt.textContent = '';
    comment_txt.textContent = '';
    message.textContent = 'Enter all subject mark :'

})
