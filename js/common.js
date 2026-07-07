const burger = document.querySelector(".header__top-burger");
const menu = document.querySelector(".header__bottom");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

burger.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);

const mediaQuery = window.matchMedia("(max-width: 992px)");

function handleScroll() {
  const top = document.querySelector(".header__top");
  const bottom = document.querySelector(".header__bottom");

  if (mediaQuery.matches) {
    bottom.classList.remove("fixed");
    return;
  }

  bottom.classList.toggle("fixed", window.scrollY >= top.offsetHeight);
}

window.addEventListener("scroll", handleScroll);

mediaQuery.addEventListener("change", handleScroll);

const modal = document.querySelector(".modal ");
const buttonOpen = document.querySelectorAll(".button__open");
const buttonClose = document.querySelector(".modal__button-close");

buttonOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isModal = modal.querySelector(".modal__body");

    modal.classList.add("modal-open");
  });
});

modal.addEventListener("click", (event) => {
  if (event.target === modal || event.target === buttonClose) {
    modal.classList.remove("modal-open");
  }
});

const filterBtn = document.querySelectorAll(".doctors__filter-btn");
const filterCard = document.querySelectorAll(".doctors__body-card");

filterCard.forEach((card) => card.classList.remove("hidden"));

filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.dataset.filter?.toLowerCase() || "all";

    filterBtn.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    filterCard.forEach((card) => {
      const cardCategory = card.dataset.specialist?.toLowerCase() || "";

      if (filterValue === "all" || cardCategory === filterValue) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

const doctorsFilterBtns = document.querySelectorAll(".doctors__filter-btn");
const doctorsFilterCards = document.querySelectorAll(".doctors__body-card");
const doctorsFilterSelect = document.querySelector(".doctors__filter-select");

function applyDoctorsFilter(value) {
  doctorsFilterBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === value);
  });

  doctorsFilterCards.forEach((card) => {
    const cardCategory = card.dataset.specialist?.toLowerCase() || "";
    const isMatch = value === "all" || cardCategory === value;
    card.classList.toggle("hidden", !isMatch);
  });

  if (doctorsFilterSelect) {
    doctorsFilterSelect.value = value;
  }
}

doctorsFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.dataset.filter || "all";
    applyDoctorsFilter(filterValue);
  });
});

if (doctorsFilterSelect) {
  doctorsFilterSelect.addEventListener("change", (e) => {
    applyDoctorsFilter(e.target.value);
  });
}

applyDoctorsFilter("all");

const filterBtnServices = document.querySelectorAll(".price__filter-btn");
const filterCardServices = document.querySelectorAll(".price__body-card");

filterCardServices.forEach((card) => card.classList.remove("hidden"));

filterBtnServices.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.dataset.filter?.toLowerCase() || "all";

    filterBtnServices.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    filterCardServices.forEach((card) => {
      const cardCategory = card.dataset.services?.toLowerCase() || "";
      card.classList.toggle(
        "hidden",
        filterValue !== "all" && cardCategory !== filterValue,
      );
    });
  });
});

const filterBtns = document.querySelectorAll(".price__filter-btn");
const filterCards = document.querySelectorAll(".price__body-card");
const filterSelect = document.querySelector(".price__filter-select");

function applyFilter(value) {
  filterBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === value);
  });

  filterCards.forEach((card) => {
    const cardCategory = card.dataset.services?.toLowerCase() || "";
    const isMatch = value === "all" || cardCategory === value;
    card.classList.toggle("hidden", !isMatch);
  });

  if (filterSelect) {
    filterSelect.value = value;
  }
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.dataset.filter || "all";
    applyFilter(filterValue);
  });
});

if (filterSelect) {
  filterSelect.addEventListener("change", (e) => {
    applyFilter(e.target.value);
  });
}

applyFilter("all");

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".gallery__card");
  const btn = document.querySelector(".gallery__show-more");

  // Если нет карточек или кнопки - выходим
  if (!cards.length || !btn) return;

  let allShown = false;

  const update = () => {
    if (allShown) return;
    const visible = window.innerWidth <= 576 ? 2 : 6;
    cards.forEach((el, i) => el.classList.toggle("hidden", i >= visible));
    const hidden = document.querySelectorAll(".gallery__card.hidden");
    btn.classList.toggle("hidden-btn", hidden.length === 0);
  };

  update();

  btn.addEventListener("click", () => {
    cards.forEach((el) => el.classList.remove("hidden"));
    btn.classList.add("hidden-btn");
    allShown = true;
  });

  window.addEventListener("resize", update);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reviews__card").forEach((card) => {
    const text = card.querySelector(".reviews__text");
    const btn = card.querySelector(".reviews__more");

    // Проверяем, нужно ли обрезать текст (если текста мало - скрываем кнопку)
    if (text.scrollHeight <= text.clientHeight) {
      btn.style.display = "none";
      return;
    }

    btn.onclick = () => {
      const isExpanded = text.classList.toggle("expanded");
      btn.textContent = isExpanded ? "Скрыть" : "Читать весь отзыв";
    };
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    440: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var reviewsSwiper = new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

Fancybox.bind("[data-fancybox='certificate']", {});
Fancybox.bind("[data-fancybox='gallery']", {});
