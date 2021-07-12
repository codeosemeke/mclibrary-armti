// Mobile Menu Toggle Function
if(document.querySelectorAll('#mobile_menu_toggle_button').length > 0){
    let mobile_menu_button = document.getElementById('mobile_menu_toggle_button');

    mobile_menu_button.addEventListener('click', function (e) {
        document.getElementById('mobile-menu').classList.toggle("hidden");
        document.getElementById('menu-burger').classList.toggle("hidden");
        document.getElementById('menu-x').classList.toggle("hidden");
    })  
}