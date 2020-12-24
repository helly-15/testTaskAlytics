export default function sortTable(id,data,order) {
    let sorted;
    console.log(data);
    //let dataToSort =  data;
    if (order ==='asc'){
         sorted = data.sort((a,b)=>{
            return a[id]-b[id]
        })
    } else {
         sorted = data.sort((a,b)=>{
            return b[id] - a[id]
        })
    }

    console.log(sorted);
    return [...sorted]
}
