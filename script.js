 async function result_fetch(){
    let fetch_data = await fetch("result.json");
    let json_data = await fetch_data.json();

    return json_data;
}

let name_div = document.getElementsByClassName("table-container");


async function main(){
    let json_data = await result_fetch()
    console.log(name_div)
    for (i in json_data){
        name_div[0].innerHTML +=`<tr>
                                <td>${json_data[i]["name"]}</td>
                                <td>${json_data[i]["Adminission Number"]}</td>
                                <td>${json_data[i]["Result"]}</td>
                                <td> <img src=${json_data[i]["Photo"]} width=100px> </td>
                                </tr>`
    }
}
main()