
const div=document.createElement("div");

div.innerHTML=`<table id="center"   >
<tr>
   <td   colspan="3"><input value="0" id="input" type="text"></td> 
<td><button onclick="clear()">C</button></td>
</tr>
<tr> 
    
    <td><button onclick="disc('1')">1</button></td>
   <td><button onclick="disc('2')">2</button></td>
   <td><button onclick="disc('3')">3</button></td>
   <td><button onclick="disc('+')">+</button></td> </tr>
   <tr>
       <td><button onclick="disc('4')">4</button></td>
       <td><button onclick="disc('5')">5</button></td>
       <td><button onclick="disc('6')" >6</button></td>
       <td><button onclick="disc('-')">-</button></td> </tr>
       <tr>
           <td><button onclick="disc('7')">7</button></td>
           <td><button onclick="disc('8')">8</button></td>
           <td><button onclick="disc('9')">9</button></td>
           <td><button onclick="disc('*')">*</button></td> </tr>
           <tr>
               <td><button onclick="disc('0')">0</button></td>
               <td><button onclick="disc('.')">.</button></td>
               <td><button onclick="disc('/')">/</button></td>
               <td><button onclick="solve()" >=</button></td> </tr>
                
           </table>`

document.body.appendChild(div)


function disc(x){
if(document.getElementById("input").value==0){
    document.getElementById("input").value="";
    document.getElementById("input").value=x;
}else{
    document.getElementById("input").value+=x;
}
}

function solve(){
 let x=document.getElementById("input").value;
 let y=eval(x);
 document.getElementById("input").value=y
    
}

function clear(){

    document.getElementById("input").value=0;
}
