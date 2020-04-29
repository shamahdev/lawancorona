class SnapButton extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML =
        `<button type="button" data-toggle="modal" data-target="#aboutModal" class="btn btn-secondary btn-float"><i class="fas fa-user fa-lg"></i></button>
        <div class="modal fade m-0" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content border-small">
                <div class="modal-header">
                  <h5 class="modal-title font-weight-bold" id="exampleModalLongTitle">About Developer</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                      <div class="col-md-6">
                          <img class="img-fluid rounded-circle p-3" src="./img/shaddampixel.png" alt="">
                      </div>
                      <div class="col-md-6">
                          <h5 class="font-weight-bold">Shaddam Amru Hasibuan</h5>
                          <p>Hai, nama saya Shaddam dan ini adalah sebuah website tentang COVID-19 yang sekaligus sebagai submission saya untuk Dicoding di kelas "Belajar Fundamental Front-end development"</p>
                      </div>
                  </div>
                </div>
                <div class="modal-footer text-center mx-auto btn-group">
                  <a href="https://www.linkedin.com/in/shaddamah/" target="_blank" type="button" class="btn btn-primary m-0">Linkedin</a>
                  <a href="https://www.instagram.com/shaddamah/" target="_blank" type="button" class="d-none d-md-inline-block btn btn-success m-0">Instagram</a>
                  <a href="https://www.github.com/shaddamah/" target="_blank" type="button" class="btn btn-secondary m-0">Github</a>
                </div>
              </div>
            </div>
          </div>`
    }
    
}
customElements.define("snap-button", SnapButton);