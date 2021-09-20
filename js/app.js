window.onload = function () {
  let emailModal = document.getElementsByClassName('email-modal')[0];
  let emailButton = document.getElementsByClassName('email-modal__button')[0];
  let thankContainer = document.getElementsByClassName('email-thanks')[0];
  let goShopButton = document.getElementsByClassName('email-modal__go-shop')[0];
  let closeButton = document.getElementsByClassName(
    'email-modal__close-btn'
  )[0];
  let thanksCloseButton = document.getElementsByClassName(
    'email-modal__thanks-close-btn'
  )[0];

  let closeModal = () => {
    emailModal.classList.remove('email-modal--visible');
    setTimeout(() => {
        showModal();
      }, 5000);
  };

  let showThankMessage = () => {
    thankContainer.classList.add('email-thanks--success');
  };

  let showModal = () => {
    emailModal.classList.add('email-modal--visible');
    thankContainer.classList.remove('email-thanks--success');
  }

  emailButton.addEventListener('click', () => {
    showThankMessage();
    console.log('clicked');
  });

  goShopButton.addEventListener('click', () => {
    closeModal();
    setTimeout(() => {
        showModal();
      }, 5000);
  });

  closeButton.addEventListener('click', () => {
    closeModal();
  });

  thanksCloseButton.addEventListener('click', () => {
    closeModal();
  });

};
