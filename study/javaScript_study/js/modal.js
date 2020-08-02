const openBtn = document.getElementById('open');
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.modarl_overlay');
const closeBtn = modal.querySelector('button');

function openModal() {
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add("hidden");
}
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
