class SideBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render(){
        // console.log(this._data);
        this.innerHTML =
        `<nav id="sidebar" class="mx-auto col-md-1 p-3">
        <ul class="nav sidebar mx-auto list-unstyled">
            <li class="nav-item"><a href="#home" class="l1 btn btn-action nav-link active"><i class="fas fa-home fa-lg"></i></a></li>
            <div class="line mx-auto d-none d-md-block"></div>
            <li class="nav-item"><a href="#stats"class="l2 btn btn-action nav-link"><i class="fas fa-chart-area fa-lg"></i></a></li>
            <div class="line mx-auto d-none d-md-block"></div>
            <li class="nav-item"><a href="#pencegahan"class="l3 btn btn-action nav-link"><i class="fas fa-heart fa-lg"></i></a></li>
            <div class="line mx-auto d-none d-md-block"></div>
            <li class="nav-item"><a href="#comments"class="l4 btn btn-action nav-link"><i class="fas fa-comments fa-lg"></i></a></li>
        </ul>
    </nav>`
    }
    
}
customElements.define("side-bar", SideBar);