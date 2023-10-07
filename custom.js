
//value initialization =======
let digit = document.getElementById('digit');
let message = document.querySelector('.message');
let class_sub = document.getElementById('class');
let btn1 = document.querySelector('#button-1');
let btn2 = document.querySelector('#button-2');
let btn3 = document.querySelector('#button-3');
let btn4 = document.querySelector('#button-4');
let main = document.querySelector('#main');
let total_txt=document.querySelector('.total');
let percent_txt = document.querySelector('.percent');
let comment_txt = document.querySelector('.comment');
let show = document.querySelector('.show');


//show result event =======
btn1.addEventListener('click',()=>{
    //Get Class Name & Avg mark ===
    let class_detail = class_sub.value;
    // String to array ===
    let class_detail_a = class_detail.split(',');
    // subjects ===
    let subjects = parseInt(class_detail_a[0]);
    //subjects avg mark ===
    let sub_avgmark = parseFloat(class_detail_a[1]);
    //Get All subjects mark ===
    let marks = digit.value;
   // Marks string to array ===    
    const array = marks.split(',');
    //decler component object ===
    let component = {};
    component.array = array;
    component.subjects = subjects;
    component.sub_avgmark = sub_avgmark;

    // Call calculate function===
    
    class_detail_a != ' ' ? calculate(component) : (message.innerHTML = '<span class="span">*</span>Give Class Name : ') && colorRed();
    
});

// Reset function ==== 
const reset = ()=>{
    colorNrl();
    digit.value = '';
    total_txt.innerHTML='';
    percent_txt.textContent = '';
    comment_txt.textContent = '';
    message.innerHTML = '<span class="span">*</span>Enter all subject mark :'
};

// Calculation function ====
let calculate = (component)=>{
    const [array,subjects] = [component.array,component.subjects];
   //check string ==
    if (array[0] == ''){
        component.err = '<span class="span">*</span> Input Field is Empty : ';
    
    }else if(array.length == subjects){           
        // string to int ===
        delete  component.err;
        int_array=[];
            
        for(let int of array){    
            int>=0 && int<=100 ? int_array.push(parseInt(int)) && delete component.err : component.err = "<span class='span'>*</span>Give Real Number ...";                    
        }
        
        if(int_array.length == subjects){
        // sum of all subjects marks
            let sum = int_array.reduce((a,b)=>a+b,0);
            component.sum = sum ;   
            // call percent function ==      
            percent(component);
        }else{
            message.innerHTML = component.err;
            
        }

    }else{
        let sub_err = subjects > array.length ? subjects - array.length : array.length - subjects;
        component.err =  subjects > array.length ? `<span class='span'>* </span> Add ${sub_err} subject number`:`<span class ='span'> *</span>Remove ${sub_err} subject number `;
        
    }
    // error handling ===
    colorRed();
    component.err ? message.innerHTML = component.err : delete component.err;
    
   
}


    


//percent value function ====
let percent = (component)=>{    
    
    const [sum,avg] = [component.sum,component.sub_avgmark];
    
    // check sum ===        
    let total_sum = sum ? sum/avg : "<span class='span'>*</span> This  is not a number";
    
   
    // percent value make ===
    let percent_value =  total_sum.toFixed(2) ;
     component.percent_value = percent_value;
    //call comment function ==
    comment(component);
    
}

// Comment Function ===
const comment = (component)=>{
        const percent_value = component.percent_value;
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
        component.comment = comment;
        //call result function ==
       result(component)
}


//  Result function ====
let result = (component) =>{
    //destractur ==
    const[sum,percent,comment] = [component.sum,component.percent_value,component.comment];
    //assign value in web page ====
    total_txt.innerHTML = sum;
    percent_txt.textContent = percent + '%';
    comment_txt.textContent = comment;
    message.innerHTML =  component.err ? component.err && colorRed : 'Good Job ! Say to Tamim Thanks :  ' ;      
   
}

const colorRed = () =>{
    message.style.color = '#fff';
    message.style.fontStyle = 'italic';
    
}
const colorNrl = () =>{
    message.style.color = '#fff';
    message.style.fontStyle = 'normal';
    
}

// Reset all value ===
btn2.addEventListener('click',reset);

