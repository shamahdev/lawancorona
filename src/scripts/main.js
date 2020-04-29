import "./components/data-counter.js";
import "./components/side-bar.js";
import "./components/search-bar.js";
import "./components/item-list.js";
import "./components/snap-button.js";

const main = _ => {
    const searchBar = document.querySelector("search-bar");
    const ItemList = document.querySelector("item-list");
    const item = ItemList.getElementsByTagName('province-item');

    const onKeyUp = _ => {
        const filter = searchBar.value.toUpperCase();
        for (let i = 0; i < item.length; i++) {
            const a = item[i].getElementsByTagName("h4")[0];
            const txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              item[i].style.display = "";
            } else {
              item[i].style.display = "none";
            }
        }
    };
    searchBar.input.addEventListener("keyup", onKeyUp);
};

export default main;