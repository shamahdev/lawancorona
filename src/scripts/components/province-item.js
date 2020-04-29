class ProvinceItem extends HTMLElement {

    set province(province){
        this._province = province;
        this.render();
    }
    render(){
    this.innerHTML =
    `<div class="item py-3 border-bottom border-success">
    <div id="name" class="row m-0 font-weight-bold">
        <h4 class="mr-4 font-weight-bold">${this._province.attributes.Provinsi}</h4>
        <h4 class="text-success">${this._province.attributes.Kasus_Posi}</h4>
    </div>
    <div class="row m-0 mt-2 font-weight-bold">
        <div class="col-4">
            <p class="mb-0">Positif</p>
            <p class="mb-0 text-success">${this._province.attributes.Kasus_Posi}</p>
        </div>
        <div class="col-4">
            <p class="mb-0">Sembuh</p>
            <p class="mb-0 text-success">${this._province.attributes.Kasus_Semb}</p>
        </div>
        <div class="col-4">
            <p class="mb-0">Meninggal</p>
            <p class="mb-0 text-success">${this._province.attributes.Kasus_Meni}</p>
        </div>
    </div>
</div>`;
    }
}
customElements.define("province-item", ProvinceItem);