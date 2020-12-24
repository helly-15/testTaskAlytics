export default function sortTable(id,data) {
    //console.log(id);
    console.log(data);
    //let dataToSort =  data;
    let sorted = data.sort((a,b)=>{
        return a[id]-b[id]
    })
    console.log(sorted);
    return [...sorted]

}
