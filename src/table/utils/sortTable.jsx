export default function sortTable(id,data,order) {
    let sorted;
    if (order ==='asc'){
         sorted = data.sort((a,b)=>{
             if(id ==='date'){
                 return  new Date(Date.parse(a[id])) - new Date(Date.parse(b[id]))
             }
            else if(typeof a[id] ==='string'){
                 return a[id][0]- b[id][0]
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
                return b[id][0]- a[id][0]
            } else {
                return b[id]-a[id]
            }
        })
    }
    return [...sorted]
}
