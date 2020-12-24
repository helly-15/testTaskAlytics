export default function sortTable(id,data,order) {
    let sorted;

    //console.log(data);
    //let dataToSort =  data;
    if (order ==='asc'){

         sorted = data.sort((a,b)=>{
             if(typeof a[id] ==='string'){
                 return a[id][0]- b[id][0]
             } else {
                 return a[id]-b[id]
             }

        })
    } else {
        sorted = data.sort((a,b)=>{
            if(typeof a[id] ==='string'){
                return b[id][0]- a[id][0]
            } else {
                return b[id]-a[id]
            }

        })
    }

    //console.log(sorted);
    return [...sorted]
}
