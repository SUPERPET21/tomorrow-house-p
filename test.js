// prettier-ignore
const myMenu = document.querySelector('.my-menu');
const isMenu = document.querySelector('.is-menu')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')
const isSearch = document.querySelector('.gnb-icon-button.is-search')
const searchModal = document.querySelector('.search-modal')
const SearchModalIsClose = document.querySelector('.search-modal .btn-ghost.is-close')
const body = document.querySelector('body');

document.querySelector('.gnb-avatar-button').addEventListener('click', (e) => {
	myMenu.classList.toggle('is-active')
})

// gnb-menu-button 이벤트
isMenu.addEventListener('click', (e) => {
	sidebar.classList.add('is-active')
	overlay.classList.add('is-active')
	body.style.overflow = 'hidden'
})

// gnb-search-button 이벤트
isSearch.addEventListener('click', () => {
	searchModal.classList.add('is-active')
})

SearchModalIsClose.addEventListener('click', () => {
	searchModal.classList.remove('is-active')
})

// overlay 클릭 이벤트
overlay.addEventListener('click', () => {
	sidebar.classList.remove('is-active')
	overlay.classList.remove('is-active')
	orderFormModal.classList.remove('is-active');
	body.style.overflow = 'auto';
})

// search-history of gnb-input-group
const gnbInputGroup = document.querySelector('.gnb-right .input-group')
const gnbSearchHistory = document.querySelector('.gnb-right .search-history')

gnbInputGroup.addEventListener('focusin', (e) => {
	gnbSearchHistory.classList.add('is-active')
})

gnbInputGroup.addEventListener('focusout', (e) => {
	setTimeout(() => {
		gnbSearchHistory.classList.remove('is-active')
	}, 50)
})

// order-form-modal 호출 이벤트
const orderFormButton = document.querySelector(".order-form .btn-primary");
const orderFormModal = document.querySelector(".order-form-modal");

orderFormButton.addEventListener("click", () => {
	orderFormModal.classList.add("is-active");
	overlay.classList.add('is-active')
	body.style.overflow = 'hidden'
})

// 펼치기 누르기 이벤트
const productSpecSmOnly = document.querySelector(".product-spec.sm-only");
const specOpenButton = document.querySelector(".product-spec .button-wrapper .btn-primary");

specOpenButton.addEventListener('click', () => {
	productSpecSmOnly.classList.add('is-open');
})

// product-tab 클릭 이벤트
const productTabItem = document.querySelectorAll('.product-tab-item');

const headerHeight = 184;  // gnb + lnb + product-tab의 height를 더한 것

const productTabReview = document.querySelector(".product-tab-review");
const productTabInquiry = document.querySelector(".product-tab-inquiry");
const productTabDelivery = document.querySelector(".product-tab-delivery");
const productTabRecommendation = document.querySelector(".product-tab-recommendation");

const productReview = document.querySelector(".product-review");
const productInquiry = document.querySelector(".product-inquiry");
const productDelivery = document.querySelector(".product-delivery");
const productRecommendation = document.querySelector(".product-recommendation");

const productTabArr = [
	productTabReview,
	productTabInquiry,
	productTabDelivery,
	productTabRecommendation
];

const productArr = [
	productReview,
	productInquiry,
	productDelivery,
	productRecommendation
];

productTabArr.forEach((el, i) => {
	el.addEventListener('click', () => {
		window.scrollTo({top: productArr[i].offsetTop - headerHeight, behavior: 'auto'})
		productTabItem.forEach((el) => {
			el.classList.remove('is-active')
		})
		productTabItem[i + 1].classList.add('is-active');
	})
})

// 상품 정보페이지를 HTML에서 Moible과 Tablet/Desktop으로 나눴으니까 따로 처리함
const productTabSpec = document.querySelector(".product-tab-spec");

const productSpecMobile = document.querySelector(".product-spec.sm-only");
const productSpecTablet = document.querySelector(".product-spec.sm-hidden");

productTabSpec.addEventListener('click', () => {
	if(window.innerWidth >= 768) {
		window.scrollTo({top: productSpecTablet.offsetTop - headerHeight, behavior: 'auto'})
		productTabItem.forEach((el) => {
			el.classList.remove('is-active')
		})
		productTabItem[0].classList.add('is-active');
	}	else {
		window.scrollTo({top: productSpecMobile.offsetTop - headerHeight, behavior: 'auto'})
		productTabItem.forEach((el) => {
			el.classList.remove('is-active')
		})
		productTabItem[0].classList.add('is-active');
	}
})

// product-inquiry-collapse클릭 시 product-inquiry의 is-hidden 클래스 없애기
const inquiryCollapse = document.querySelector(".product-inquiry-collapse");

inquiryCollapse.addEventListener('click', () => {
	inquiryCollapse.classList.add("visually-hidden");
	productInquiry.classList.remove("is-collapse");
})

productTabInquiry.addEventListener('click', () => {
	const inquiryClassName = productInquiry.className

	if(window.innerWidth < 768 && inquiryClassName.indexOf("is-collapse") != -1) {
		window.scrollTo({top: inquiryCollapse.offsetTop - headerHeight, behavior: 'auto'})
	}
})

// product-deliver-collapse클릭 시 product-deliver, product-refund의 is-hidden 클래스 없애기
const deliverCollapse = document.querySelector(".product-deliver-collapse");
const productRefund = document.querySelector(".product-refund");
const DeliveryDivider = document.querySelector(".product-deliver-divider");

deliverCollapse.addEventListener('click', () => {
	deliverCollapse.classList.add("visually-hidden");
	productDelivery.classList.remove("is-collapse");
	productRefund.classList.remove("is-collapse");
})

productTabDelivery.addEventListener('click', () => {
	const deliveryClassName = productDelivery.className

	// deliveryClassName.indexOf("is-collapse")그대로 넣으니까 is-collapse가 없는 상황에서도 계속 있다고 나와서 "-1이 아닐 때만"으로 바꿨다.
	if(window.innerWidth < 768 && deliveryClassName.indexOf("is-collapse") != -1) {
		window.scrollTo({top: deliverCollapse.offsetTop - headerHeight, behavior: 'auto'})
	}
})

// sidebar category 클릭 시 is-open 클래스 toggle하기
const sidebarCommunity = document.querySelector(".sidebar-category.is-community");
const sidebarStore = document.querySelector(".sidebar-category.is-store");
const sidebarExpert = document.querySelector(".sidebar-category.is-expert");

const sidebarArr = [
	sidebarCommunity,
	sidebarStore,
	sidebarExpert
]

sidebarArr.forEach((el, i) => {
	el.addEventListener("click", () => {
		el.classList.toggle("is-open")
	})
})

// observer 구현

// const observer = new IntersectionObserver((entries, observer) => {
// 	entries.forEach((entry) => {
// 		console.log(entry.target)
// 	})
// })



// observe로 스크롤 되었을 때 product-tab-item에 is-active 클래스 add, remove 하도록 설정하기

// const callback = (entries, observer) => {
// 	entries.forEach((entry) => {
// 		if(entry.isIntersecting) {
// 			console.log('들어옴')
// 		} else {
// 			console.log('나감')
// 			// productTabItem[i + 1].classList.remove('is-active')
// 		}
// 	})
// 	console.log(entries)
// 	console.log(observer)
// }

// const options = {
// 	root: null,
// 	rootMargin: '0px',
// 	threshold: 0.5,
// }
// const observer = new IntersectionObserver(callback);

// productArr.forEach(el => observer.observe(el))



// 스크롤 이벤트로 구현하기
const productArr02 = [
	productSpecTablet,
	productReview,
	productInquiry,
	productDelivery,
	productRecommendation
];

let timer;
window.addEventListener('scroll', (e) => {
  if (!timer) {
    timer = setTimeout(function() {
      timer = null;
			if(window.innerWidth >= 768) {
				productArr02.forEach((el, i) => {
					if(window.scrollY >= el.offsetTop - headerHeight) {
						productTabItem.forEach((el) => {
							el.classList.remove('is-active')
						})
						productTabItem[i].classList.add('is-active')
					}
				})
		
				// 추천 Tab는 전체 화면에서 적용이 안되니까 override한 것
				if(window.scrollY >= productRecommendation.offsetTop - headerHeight - 200) {
					productTabItem.forEach((el) => {
						el.classList.remove('is-active')
					})
					productTabItem[4].classList.add('is-active')
				}
			}	else {
				if(window.scrollY >= productSpecMobile.offsetTop - headerHeight) {
					productTabItem.forEach((el) => {
						el.classList.remove('is-active')
					})
					productTabItem[0].classList.add('is-active')
				}
				
				if(window.scrollY >= productReview.offsetTop - headerHeight) {
					productTabItem.forEach((el) => {
						el.classList.remove('is-active')
					})
					productTabItem[1].classList.add('is-active')
				}
		
				const inquiryClassName = productInquiry.className
				const deliveryClassName = productDelivery.className
				// inquiry 접혀있을 때와 펼쳤을 때
				if(inquiryClassName.indexOf("is-collapse") != -1) {
					if(window.scrollY >= inquiryCollapse.offsetTop - headerHeight) {
						productTabItem.forEach((el) => {
							el.classList.remove('is-active')
						})
						productTabItem[2].classList.add('is-active')
					}
				}	else {
					if(window.scrollY >= productInquiry.offsetTop - headerHeight) {
						productTabItem.forEach((el) => {
							el.classList.remove('is-active')
						})
						productTabItem[2].classList.add('is-active')
					}
				}
		
				// delivery 접혀있을 때와 펼쳤을 때
				if(deliveryClassName.indexOf("is-collapse") != -1) {
					if(window.scrollY >= deliverCollapse.offsetTop - headerHeight) {
						productTabItem.forEach((el) => {
							el.classList.remove('is-active')
						})
						productTabItem[3].classList.add('is-active')
					}
				}	else {
					if(window.scrollY >= productDelivery.offsetTop - headerHeight) {
						productTabItem.forEach((el) => {
							el.classList.remove('is-active')
						})
						productTabItem[3].classList.add('is-active')
					}
				}
		
				if(window.scrollY >= productRecommendation.offsetTop - headerHeight) {
					productTabItem.forEach((el) => {
						el.classList.remove('is-active')
					})
					productTabItem[4].classList.add('is-active')
				}
			}
    }, 100);
  }
});