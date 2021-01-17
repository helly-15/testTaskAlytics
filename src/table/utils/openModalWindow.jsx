
let modalFunc=(e, data)=>{
  e.preventDefault();
    let element = document.getElementsByTagName("td"), index;
    for (index = element.length - 1; index >= 0; index--) {
        element[index].classList.add('invisibleTd')
    }
    let div = document.querySelectorAll('.modal')[0];
    div.classList.remove('modal-visibility');
    div.classList.add('flyin-grid');
    let cards = document.querySelectorAll('.cards');
    let clear = ()=> {
        for (index = element.length - 1; index >= 0; index--) {
            element[index].classList.remove('invisibleTd')
        }
        div.classList.add('modal-visibility');
        div.classList.remove('flyin-grid');
        for(let card of cards){
            card.classList.remove('flyin-grid__item');
            card.classList.remove('card');
            card.innerText = '';
        }
    }


    for( let i = 0;i < cards.length;i++){
        cards[i].innerText = '';
        cards[i].classList.add('flyin-grid__item');
        cards[i].classList.add('card');
        if(i === 0){
            cards[i].innerHTML =`
               <p> Сделка № ${ e.target.innerText }</p>
               <p class = "pHide"> Скрыть детали</p>
               <table>
               <tr><td>Номер</td><td>${data.number}</td></tr>
                <tr><td>Выручка</td><td>${data.income}</td></tr>
                <tr><td>Прибыль</td><td>${data.profit}</td></tr>
                <tr><td>Дней до</td><td>${data.daysTo}</td></tr>
                </table>
                `
            document.querySelectorAll('.pHide')[0].onclick = clear;

        } else{
            let p = document.createElement("p");
            let innerDiv = document.createElement("div");
            p.innerText = `Мультиканальная цепочка`;
            innerDiv.style.width ='477px';
            innerDiv.style.height ='550px';
            innerDiv.style.background ='white';
            cards[i].appendChild(p);
            cards[i].appendChild(innerDiv);
        }
    }
    document.querySelectorAll('.table-scroll')[0].scrollTo(0, 0)
return false;
}
export default modalFunc;
