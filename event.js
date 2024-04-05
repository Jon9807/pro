
document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const moreText = this.parentNode.querySelector('.more-text');

            if (moreText.style.display === 'none') {
                moreText.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                moreText.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toastEl = document.getElementById('toast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
});



