

function sideMenuchangeList() {
    let sidemenu = document.querySelectorAll('.nav-link');
    sidemenu.forEach((item) => {
        let li = item.parentElement;
        item.addEventListener('click', () => {
            sidemenu.forEach((link) => {
                link.parentElement.classList.remove('active');
            });
            li.classList.add('active');
        })
    })

}



function switchToggle() {
    let swithMode = document.getElementById('switch-mode');
    swithMode.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    })
}

function topBarToggle() {
    let menuBar = document.querySelector('.menu-btn');
    let sideBar = document.querySelector('.sidebar');
    let container = document.querySelector('.top-menu');
    menuBar.addEventListener('click', () => {
        sideBar.classList.toggle('hide');
        container.classList.toggle('top-menu-hide');
    })
}
function profileToggle() {
    let swithMode = document.getElementById('subMenu');
    swithMode.classList.toggle('open-menu')
}


window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.toggle('hide');
    }
})

if (window.innerWidth < 768) {
    sideBar.classList.toggle('hide');
}