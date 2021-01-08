export default function sortTable(id,data,order) {
    let sorted;
    if (order ==='asc'){
         sorted = data.sort((a,b)=>{
             if(id ==='date'){
                 return  new Date(Date.parse(a[id])) - new Date(Date.parse(b[id]))
             }
            else if(typeof a[id] ==='string'){
                 return parseInt(a[id])- parseInt(b[id])
             } else {
                 return a[id]-b[id]
             }
        })
    } else {
        sorted = data.sort((a,b)=>{
            if(id ==='date'){
                return  new Date(Date.parse(b[id])) - new Date(Date.parse(a[id]))
            }
            else if(typeof a[id] ==='string'){
                return parseInt(b[id])- parseInt(a[id])
            } else {
                return b[id]-a[id]
            }
        })
    }
    return [...sorted]
}
