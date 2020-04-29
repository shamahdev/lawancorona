import "./province-item.js"
import DataCollect from "./../datacollect.js"

class ItemList extends HTMLElement {

    set provinces(provinces){
        this._provinces = provinces;
        this.render();
    }

    connectedCallback(){ 
        DataCollect.province()
        .then(data => {
            this.provinces = data;
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        this.innerHTML = ``;
        this._provinces.forEach(province => {
            const ItemElement = document.createElement("province-item");
            ItemElement.province = province;
            this.appendChild(ItemElement);
        })
    }
    error(msg){
        this.innerHTML = `<h2>${msg}</h2>`;
    }
}
customElements.define("item-list", ItemList);