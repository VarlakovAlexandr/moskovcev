const hamburger = document.querySelector('.hamburger');
const mobMenu = document.querySelector('.mob-menu');
const header = document.querySelector('.header');
const mobFog = document.querySelector('.mob-fog');

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  hideMenu();
});


hamburger.addEventListener('click', function(){

    if (!this.classList.contains('active')){

        

        
        this.classList.add('active');
        header.classList.add('menu-active');
        mobMenu.classList.add('active');
        
		mobFog.classList.add('active');


        let bodyWidth = document.documentElement.clientWidth;  
        let indexHeader = document.querySelector('.header.index-header'); 
        if (indexHeader){
            indexHeader.style.maxWidth  = bodyWidth + 'px'; 
        }             
        document.body.style.maxWidth  = bodyWidth + 'px';
        document.body.classList.add('no-scroll');
        
        
    } else{
        
        hideMenu();
    }

    
})

const hideMenu = () => {
    hamburger.classList.remove('active');
    header.classList.remove('menu-active');
    document.body.classList.remove('no-scroll');
    document.body.removeAttribute('style');
	mobFog.classList.remove('active');
    let indexHeader = document.querySelector('.header.index-header'); 
    if (indexHeader){
        indexHeader.removeAttribute('style');
    }   
    mobMenu.classList.remove('active');    
    
}


const realtiesSlider = new Swiper(".realties-slider.swiper", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 8,
   
    
    navigation: {
        nextEl: '.i-realty-cards__nav.next',
        prevEl: '.i-realty-cards__nav.prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 16
        },

        1280: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    }
})


const swiperFavoritesBtns = document.querySelectorAll('.swp-realty-card__add-favorite');
if ( swiperFavoritesBtns.length ){
    swiperFavoritesBtns.forEach( btn => {
        btn.addEventListener('click', function(){
            const card = this.closest('.swp-realty-card');

            card.classList.toggle('is-favorite');
        })
    } )
}

const favoritesBtns = document.querySelectorAll('.realty-card__add-favorite');
if ( favoritesBtns.length ){
    favoritesBtns.forEach( btn => {
        btn.addEventListener('click', function(){
            const card = this.closest('.realty-card');

            card.classList.toggle('is-favorite');
        })
    } )
}

const partnersSlider = new Swiper(".swiper.partners-slider", {
    speed: 1000,    
    slidesPerView: 2,
    spaceBetween: 16,
    autoplay: {
        delay: 2000,
    },
    
    loop: true,   
    
    navigation: {
        nextEl: '.i-realty-cards__nav.next',
        prevEl: '.i-realty-cards__nav.prev',
    },
    breakpoints: {
        
        480: {
            slidesPerView: 3,
            
        },
        540: {
            slidesPerView: 4,
            
        },
        640: {
            slidesPerView: 5,
            
        },
        800: {
            slidesPerView: 6,
            
        },
        920: {
            slidesPerView: 7,
            
        },
    }
})


document.addEventListener('DOMContentLoaded', function(){
    let jumpBlocks = document.querySelectorAll('[data-to-jump][data-media-jump]');

    if ( jumpBlocks.length ){
        jumpBlocks.forEach( jb => {
            
            const targetBlockLink = jb.getAttribute('data-to-jump');
            const targetBlockNode = document.querySelector(targetBlockLink);
            const targetMedia = Number(jb.getAttribute('data-media-jump'));
            

            const initialParent = jb.parentNode;
            
            let vw = document.documentElement.clientWidth;
            
            if ( targetBlockNode &&  targetMedia )  {

                const mode = jb.getAttribute('data-mode');

                if ( mode === 'desktop-first' ){
                    if ( vw <= targetMedia ) targetBlockNode.append(jb);
                } else{
                    if ( vw >= targetMedia ) targetBlockNode.append(jb);
                }
                
                

                window.addEventListener('resize', function(){
                    
                    let currentParent = jb.parentNode;
                    let vw = document.documentElement.clientWidth;

                    if ( mode === 'desktop-first' ){
                        if ( vw <= targetMedia  && currentParent !=  targetBlockNode ){
                            targetBlockNode.append(jb)
                        } else if ( vw > targetMedia && currentParent != initialParent) {
                            initialParent.append(jb);
                        }

                    } else{
                        if ( vw >= targetMedia  && currentParent !=  targetBlockNode ){
                            targetBlockNode.append(jb)
                        } else if ( vw < targetMedia && currentParent != initialParent) {
                            initialParent.append(jb);
                        }
                    }
                })
            }


            

        } )  
    }

})


const showAllRealtiesBtn = document.querySelector('.show-all-realties');
const catalogHideLayer = document.querySelector('.catalog-hide-layer');
const realtyList  = document.querySelector('.realties-list'); 
const realtyListInner  = document.querySelector('.realties-list__inner'); 

if  ( showAllRealtiesBtn ){
    showAllRealtiesBtn.addEventListener('click', function(){
        this.remove();
        catalogHideLayer.remove();
        realtyList.style.maxHeight = realtyListInner.offsetHeight + 'px';
    })
}


const showAllArticlesBtn = document.querySelector('.show-all-articles');
const articlesHideLayer = document.querySelector('.articles-hide-layer');
const articlesList  = document.querySelector('.articles__list'); 
const articlesListInner  = document.querySelector('.articles__list-inner'); 

if  ( showAllArticlesBtn ){
    showAllArticlesBtn.addEventListener('click', function(){
        this.remove();
        articlesHideLayer.remove();
        articlesList.style.maxHeight = articlesListInner.offsetHeight + 'px';
    })
}


let phoneInputs = document.querySelectorAll('input[name="phone"]');
if ( phoneInputs.length ){
    phoneInputs.forEach( inp => {
        let mask = IMask(inp, {
            mask: '+{7} 000 000 00-00',
			
            lazy: true,  // make placeholder always visible
            placeholderChar: '_'     // defaults to '_'
        })

		inp.addEventListener('focus', function(){
			mask.updateOptions({
				lazy: false,
			});
		})
		inp.addEventListener('blur', function(){
			mask.updateOptions({
				lazy: true,
			});
		})
    } )
}

Fancybox.bind('[data-fancybox]', {
    compact: false,
    contentClick: "iterateZoom",
    Images: {
      Panzoom: {
        maxScale: 2,
      },
    },
    Toolbar: {
      display: {
        left: [
          "infobar",
        ],
        middle : [],
        right: [
          "iterateZoom",
          "close",
        ],
      }
    }
  });  

const gallery = new Swiper(".swiper.gallery", {
      speed: 1000,
      
      slidesPerView: 1,
      spaceBetween: 0,
      
      
      navigation: {
          nextEl: '.gallery-nav.next',
          prevEl: '.gallery-nav.prev',
      },
      
})

const interiorGallery = new Swiper(".swiper.sr-interior-gallery", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 0,
    
    
    navigation: {
        nextEl: '.sr-interior-gallery-nav.next',
        prevEl: '.sr-interior-gallery-nav.prev',
    },
    
})


  

const btnsOpenSpoiler = document.querySelectorAll('.btn-open-spoiler');

if ( btnsOpenSpoiler.length ){
    btnsOpenSpoiler.forEach( btn => {
        let startHeight = 0;
        btn.addEventListener('click', function(){
            const parent = this.closest('.text-spoiler');
            
            const  block = parent.querySelector('.text-spoiler__block');
            const  blockInner = parent.querySelector('.text-spoiler__inner-block');

            if ( !parent.classList.contains('active') ) {
                startHeight = block.offsetHeight + 'px';
                let innerHeight = blockInner.offsetHeight + 'px';
                block.style.height = innerHeight;
                parent.classList.add('active');
            } else {
                block.style.height = startHeight;
                parent.classList.remove('active');
            }
        })
        

    } )
}


const srInteriorTogglers = document.querySelectorAll('.sr-interior__toggler');
if ( srInteriorTogglers.length ){
    const gallerySlides = document.querySelectorAll('.swiper.sr-interior-gallery .swiper-slide');

    srInteriorTogglers.forEach( btnToggler =>  {
        btnToggler.addEventListener('click', function(){
            if ( this.classList.contains('active') ) return ;

            let activeToggler = document.querySelector('.sr-interior__toggler.active');
            activeToggler.classList.remove('active');

            this.classList.add('active');
            let currentGallery = this.id;
            
            gallerySlides.forEach( slide => {
                
                if ( slide.getAttribute('data-fancybox')  === currentGallery ){
                    slide.classList.add('active-gallery')
                    
                } else{
                    slide.classList.remove('active-gallery')
                }
            } )
            
            interiorGallery.update();
            interiorGallery.slideTo(0, 0);
        })
    })
}

//Модальные окна
let doc = document.querySelector('html');
const modals = new HystModal({
    linkAttributeName: "data-hystmodal",
    backscroll: true,
    waitTransitions: false,
    closeOnOverlay: true,
	beforeOpen: function(){
        let bodyWidth = document.documentElement.clientWidth;    
        
        document.body.style.maxWidth  = bodyWidth + 'px';        
        document.body.classList.add('no-scroll');
		doc.classList.add('stop-scroll');
	},
	afterClose: function(){
        
		doc.classList.remove('stop-scroll');
        document.body.classList.remove('no-scroll');
        document.body.removeAttribute('style');
       
	}
});

//Отправка форм
const forms = document.querySelectorAll('form');

if ( forms.length) {
	forms.forEach( frm => {
		frm.addEventListener('submit', function(event){
			event.preventDefault();
		
			const formData = new FormData(frm);
			
			fetch('send_action', {
				method: 'POST',            
				body: new URLSearchParams({									
					...Object.fromEntries(formData.entries())
				}),
		
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
		
			})
			.then(response => response.json())
			.then(data => {					
				
				modals.open('#thanks-modal');
				frm.reset();
			})
		
			.catch(error => {

				
				modals.open('#thanks-modal');
				frm.reset();
			});
			
		})
	} )
}

