
const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", ()=> {
    history.back();
      window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'back_button',
            page_type: "Join page"
        });
})