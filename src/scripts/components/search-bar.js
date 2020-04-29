class SearchBar extends HTMLElement {
    
    get input(){
        return this.querySelector("#searchProvinsi");
    }
    get value(){
        return this.querySelector("#searchProvinsi").value;
    }

    connectedCallback(){
        this.hint = this.getAttribute("hint") || null;
        this.render();
    }
    render(){
        this.innerHTML = 
        `<p class="text-center text-primary">Cara nama provinsi untuk melihat statistik kasus COVID-19 di provinsi tersebut!</p>
        <div class="form-group">
            <input id="searchProvinsi" type="search" class="custom-form form-control form-control-lg" placeholder="${this.hint}">
        </div>`;
    }
}
customElements.define("search-bar", SearchBar);