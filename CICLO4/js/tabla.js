function table(){

    let numero =7
    let table=document.getElementById("table");
    for (let i=1; i<=10; i++){

        let tr =document.createElement("tr");
        tr.id="tr"+i;
        tr.className="table";
        tr.innerHTML="<td>"+numero+"*"+i+"=</td><td>"+numero*i+"</td>"
        table.append(tr);

    }
}

function contenido(){
    let conte=document.getElementById("conte");
    for(leti=0; i<3;i++){
        let div=document.createElement("div");
        div.id="div"+i;
        div.className="col";
        div.innerHTML="<button>"+i+"</button>";
        conte.append(div);


    }

}
contenido();
table();