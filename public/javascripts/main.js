const categories_dropdown = document.getElementById('categories_dropdown')
const categories_menu = document.getElementById('categories_menu')

categories_dropdown.onclick = function(){
    const categories_menu = document.getElementById('categories_menu')
    if (categories_menu.style.display == 'none') {
        categories_menu.style.display = 'block';
    } else {
        categories_menu.style.display = 'none';
    }
}
