let leftBtn = document.querySelector("#left");
let rightBtn = document.querySelector("#right");
let items = document.querySelector("#items");
let computedStyles = getComputedStyle(items);


rightBtn.addEventListener("click", (e) => {
        e.preventDefault();
        
        let currentRight = parseInt(computedStyles.right);
        
        if (currentRight < 500) {
            items.style.right = `${currentRight + 100}px`;
        }
        
        
});

leftBtn.addEventListener("click", e => {
        e.preventDefault();

        let currentRight = parseInt(computedStyles.right);

        if (currentRight > 0) {
            items.style.right = `${currentRight - 100}px`;
        }
});