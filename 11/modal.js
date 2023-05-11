/* eslint-disable import/prefer-default-export */
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
