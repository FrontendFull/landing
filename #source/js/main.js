window.onload = function () {

    document.querySelector('.btn-close').addEventListener('click', function () {
        this.closest('.menu_mobile').classList.remove('active');
        document.querySelector('body').style.overflow = 'initial';
    })

    document.querySelector('.btn-open').addEventListener('click', function () {
        document.querySelector('.menu_mobile').classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';

    })

    for (const item of document.querySelectorAll('.menu_mobile .menu_link')) {
        item.addEventListener('click', function () {
            this.closest('.menu_mobile').classList.remove('active');
            document.querySelector('body').style.overflow = 'initial';
        })
    }


    const course = new Swiper('.table_mobile.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const reviews = new Swiper('.reviews.swiper', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 60,
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {

            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 60,
            },

        }

    });



    for (const item of document.querySelectorAll('.video_block')) {

        item.addEventListener('click', function (e) {
            e.preventDefault();
            Fancybox.show(
                [
                    {
                        src: this.getAttribute("href"),
                        type: "iframe",
                    },
                ],
            );
        })
    }

    for (const item of document.querySelectorAll('a.modal')) {

        item.addEventListener('click', function (e) {
            e.preventDefault();
            Fancybox.show(
                [
                    {
                        src: '#modal',
                        type: "inline",
                    },
                ],
            );
        })
    }

    for (const item of document.querySelectorAll('input[type="submit"]')) {

        item.addEventListener('click', function (e) {
            e.preventDefault();
            Fancybox.show(
                [
                    {
                        src: '#modal-good',
                        type: "inline",
                    },
                ],
            );
        })
    }



    for (const item of document.querySelectorAll('.btn-toggle')) {

        item.addEventListener('click', function () {
            let container = this.closest('.row').querySelector('.answer');

            if (container.classList.contains('active')) {
                container.classList.remove('active');
                this.classList.remove('active');
                container.style.maxHeight = 0;
            } else {
                container.classList.add('active');
                this.classList.add('active');
                container.style.maxHeight = container.scrollHeight + 'px';
            }

        })
    }


    [].forEach.call(document.querySelectorAll('[name = "phone"]'), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+380 (__) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                newValue = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                newValue = newValue.slice(0, i);
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });




    for (let anchor of document.querySelectorAll('.menu_link,.btn_anchor')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }


    let dateTopAnchors = [];
    for (let item of document.querySelectorAll('.anchor')) {
        dateTopAnchors.push(item.getBoundingClientRect().top + pageYOffset)
    }
    dateTopAnchors[0] = 40;


    let currentActive = -1;
    window.scrollBy(0, 1)
    window.addEventListener('scroll', function () {
        for (let i = 0; i < dateTopAnchors.length; i++) {
            currentActive < 0 ? currentActive = i : currentActive = currentActive;
            if (window.pageYOffset <= dateTopAnchors[i]) {
                if (currentActive !== i) {
                    document.querySelector(`.link-${currentActive + 1}`).classList.remove('active');
                    currentActive = i;
                    document.querySelector(`.link-${i + 1}`).classList.add('active');
                }

                break;
            }

        }
    });


}
window.addEventListener('scroll', function () {
    window.pageYOffset > 10 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});

function formGod() {
    console.log(11);
    item.addEventListener('click', function () {
        Fancybox.show(
            [
                {
                    src: '#modal-god',
                    type: "inline",
                },
            ],
        );
    })
}