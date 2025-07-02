document.addEventListener("DOMContentLoaded", function () {
  const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
    {
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
    {
      name: "Bald Mountains",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },
    {
      name: "Vanoise National Park",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },
  ];

  const profileEditButton = document.querySelector("#profile-edit-button");
  const profileEditModal = document.querySelector("#profile-edit-modal");
  const profileModalCloseButton = document.querySelector("#modal-close-button");
  const profileForm = document.querySelector(".modal__form");
  const nameInput = document.querySelector("#profile-title-input");
  const jobInput = document.querySelector("#profile-description-input");
  const profileName = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileEditButton.addEventListener("click", function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    profileEditModal.classList.add("modal_opened");
  });

  profileModalCloseButton.addEventListener("click", function () {
    profileEditModal.classList.remove("modal_opened");
  });

  profileForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    profileEditModal.classList.remove("modal_opened");
  });

  const cardsContainer = document.querySelector(".cards__list");
  const cardTemplate = document.querySelector("#card-template").content;

  function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const likeButton = cardElement.querySelector(".card__like-button");

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_active");
    });

    return cardElement;
  }

  initialCards.forEach(function (cardData) {
    const cardElement = getCardElement(cardData);
    cardsContainer.appendChild(cardElement);
  });
});
