




eventListeners();

function eventListeners() {
    const ui = new UI()

    window.addEventListener('load', function () {
        ui.hidePreloader();
    })

    document.querySelector('.navBtn').addEventListener('click', function () {
        ui.showNav();
    })


    document.querySelector('.video__switch').addEventListener('click', function () {
        ui.videoControls()
    })

}

function UI() {

}

UI.prototype.hidePreloader = function () {
    document.querySelector('.preloader').style.display = "none";
}

UI.prototype.showNav = function () {
    document.querySelector('.nav').classList.toggle('nav--show')
}

//play/pause the video
UI.prototype.videoControls = function () {
    let btn = document.querySelector('.video__switch-btn');
    if (!btn.classList.contains('btnSlide')) {
        btn.classList.add('btnSlide')
        document.querySelector('.video__item').pause()
    }
    else {
        btn.classList.remove('btnSlide')
        document.querySelector('.video__item').play()
    }
}











// let value = ui.checkEmpty(name, lastName, email)

// if (value) {
//     let customer = new customer(name, lastName, email)
//     console.log(customer)
//     ui.addCustomer(customer)
//     ui.showFeedback('customer added to the list', 'success')
//     ui.clearFields()

// }
// else {
//     ui.showFeedback('some form values empty', 'error')
// }

// })
// //display modal
// const links = document.querySelectorAll('.work-item__icon');


// links.forEach(function (item) {
//     item.addEventListener('click', function (event) {
//         ui.showMode(event)
//     })
// })



// }








// //constructor function
// function UI() {

// }
// //hide preloader
// UI.prototype.hidePreloader = function () {
//     document.querySelector('preloader').style.display = "none";
// }
// //show nav
// UI.prototype.showNav = function () {
//     document.querySelector('.nav').classList.toggle('nav--show')
// }

// //check for empty values
// UI.prototype.checkEmpty = function (name, lastname, email) {
//     let result;
//     if (name === '' || lastname === '' || email === '') {

//         result = false;
//     }
//     else {
//         result = true;
//     }
//     return result;
// }

// UI.prototype