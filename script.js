const correctUsername = 'root';
const correctPassword = 'rootcat';

document.getElementById('scriptLogin').addEventListener('click', function() {
    const username = prompt('아이디를 입력하세요:');
    const password = prompt('비밀번호를 입력하세요:');

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'indexpage/index.html';
    } else {
        document.getElementById('message').textContent = '아이디 또는 비밀번호가 올바르지 않습니다.';
    }
});
