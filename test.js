// prettier-ignore
const myMenu = document.querySelector('.my-menu');
const isMenu = document.querySelector('.is-menu')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')
const isSearch = document.querySelector('.gnb-icon-button.is-search')
const searchModal = document.querySelector('.search-modal')
const SearchModalIsClose = document.querySelector('.search-modal .btn-ghost.is-close')

document.querySelector('.gnb-avatar-button').addEventListener('click', (e) => {
	myMenu.classList.toggle('is-active')
})

// gnb-menu-button 이벤트
isMenu.addEventListener('click', (e) => {
	sidebar.classList.add('is-active')
	overlay.classList.add('is-active')
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
		window.scrollTo({top: productArr[i].offsetTop - headerHeight, behavior: 'smooth'})
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
		window.scrollTo({top: productSpecTablet.offsetTop - headerHeight, behavior: 'smooth'})
		productTabItem.forEach((el) => {
			el.classList.remove('is-active')
		})
		productTabItem[0].classList.add('is-active');
	}	else {
		window.scrollTo({top: productSpecMobile.offsetTop - headerHeight, behavior: 'smooth'})
		productTabItem.forEach((el) => {
			el.classList.remove('is-active')
		})
		productTabItem[0].classList.add('is-active');
	}
})
