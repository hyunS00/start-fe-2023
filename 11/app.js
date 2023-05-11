/* eslint-disable import/extensions */
import { openModal } from './modal.js';

const $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {
  openModal({
    text: '모달입니다.',
  });
});
