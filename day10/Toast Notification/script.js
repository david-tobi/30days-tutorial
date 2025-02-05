let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></>Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></>Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></>Invalid input, check again';

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
}