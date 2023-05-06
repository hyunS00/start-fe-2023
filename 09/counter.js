// const $count = document.querySelector('.count');
// const $pulsBtn = document.querySelector('.plus');
// const $minusBtn = document.querySelector('.minus');

// let count = 10;

// const onClick = (btn, cb) => {
//     btn.addEventListener('click', cb);
// };

// const countPlus = () => {
//     count++;
//     updateCount();
// };

// const countMinus = () => {
//     count--;
//     updateCount();
// };

// const updateCount = () => {
//     $count.innerText = count;
// };

// onClick($pulsBtn, countPlus);
// onClick($minusBtn, countMinus);
// updateCount();

const $root = document.querySelector('#root');

function createButton({ text = '', onClick }) {
    const $btb = document.createElement('button');
    $btn.innerContent = text;
    $btn.addEventListener('click', onClick);

    return $btn;
}
