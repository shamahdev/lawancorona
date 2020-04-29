import DataCollect from "./../datacollect.js"
class DataCounter extends HTMLElement {

    set data(data){
        this._data = data;
        this.render();
    }

    connectedCallback(){
        this.area = this.getAttribute("area") || null ;
        this.getData(this.area);
    }

    getData(area){
        if(area == "indonesia"){
            DataCollect.local()
            .then(local => {
                this.data = local;
            })
            .catch(error => {
                console.log(error);
            })
        }else{
            DataCollect.global()
            .then(global => {
                this.data = global;
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    render(){
        // console.log(this._data);
        this.innerHTML =
        `<div data-aos="fade-up" class="counter text-center py-4">
        <h5 class="mb-0 font-weight-bold">Jumlah Kasus di ${this._data[0].name}</h5>
        <h1 class="display-4 text-primary">${this._data[0].positif}</h1>
        <div class="bg-secondary-light row m-0 mt-2 py-3 rounded font-weight-bold">
            <div class="col-4">
                <p class="mb-0">Positif</p>
                <p class="mb-0 text-secondary">${this._data[0].positif}</p>
            </div>
            <div class="col-4">
                <p class="mb-0">Sembuh</p>
                <p class="mb-0 text-secondary">${this._data[0].sembuh}</p>
            </div>
            <div class="col-4">
                <p class="mb-0">Meninggal</p>
                <p class="mb-0 text-secondary">${this._data[0].meninggal}</p>
            </div>
        </div>
    </div>`
    }
    
}
customElements.define("data-counter", DataCounter);