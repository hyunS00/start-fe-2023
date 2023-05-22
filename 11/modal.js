/* eslint-disable import/prefer-default-export */

//   .modal .body {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .modal .body .close {
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     cursor: pointer;
//   }
//   .modal .body .content {
//     width: 300px;
//     padding: 20px;
//     background-color: #fff;
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

const closeModal = (target, body, modal, content) => {
  if (target !== content) {
    body.removeChild(modal);
  }
};

const openModal = ({ text }) => {
  const $close = document.createElement('div');
  $close.classList.add('close');
  $close.textContent = 'X';

  const $content = document.createElement('div');
  $content.classList.add('content');
  $content.textContent = text;

  const $modal = document.createElement('div');
  $modal.classList.add('modal');
  $modal.style = `
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;`;

  const $body = document.createElement('div');
  $body.classList.add('body');
  $body.addEventListener('click', ({ target }) => {
    closeModal(target, document.body, $modal, $content);
  });

  $body.appendChild($close);
  $body.appendChild($content);

  $modal.appendChild($body);

  document.body.appendChild($modal);
};

export { openModal };
