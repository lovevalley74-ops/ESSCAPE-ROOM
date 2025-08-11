document.addEventListener('DOMContentLoaded', () => {
    // 게임 상태 변수
    const gameState = {
        solvedPuzzles: {
            paper: false,
            map: false,
            books: false,
            clock: false,
        },
        passwordHints: ['?', '?', '?', '?']
    };

    // DOM 요소 가져오기
    const hintDisplay = document.getElementById('password-hints');

    const modals = {
        paper: document.getElementById('modal-paper'),
        map: document.getElementById('modal-map'),
        books: document.getElementById('modal-books'),
        clock: document.getElementById('modal-clock'),
        chest: document.getElementById('modal-chest')
    };

    const objects = {
        paper: document.getElementById('obj-paper'),
        map: document.getElementById('obj-map'),
        books: document.getElementById('obj-books'),
        clock: document.getElementById('obj-clock'),
        chest: document.getElementById('obj-chest')
    };

    // 힌트 업데이트 함수
    const updateHints = () => {
        hintDisplay.textContent = gameState.passwordHints.join(' ');
    };

    // 모달 열기 함수
    const openModal = (modal) => {
        modal.classList.remove('hidden');
    };

    // 모달 닫기 함수
    const closeModal = (modal) => {
        modal.classList.add('hidden');
    };

    // 모든 모달 닫기 버튼에 이벤트 리스너 추가
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal-container'));
        });
    });

    // 오브젝트 클릭 이벤트 리스너 설정
    objects.paper.addEventListener('click', () => {
        if (!gameState.solvedPuzzles.paper) {
            openModal(modals.paper);
        } else {
            alert('이미 해결한 문제다.');
        }
    });

    objects.map.addEventListener('click', () => {
        if (!gameState.solvedPuzzles.map) {
            openModal(modals.map);
        } else {
            alert('이미 해결한 문제다.');
        }
    });
    
    objects.books.addEventListener('click', () => {
        if (!gameState.solvedPuzzles.books) {
            openModal(modals.books);
        } else {
            alert('이미 해결한 문제다.');
        }
    });

    objects.clock.addEventListener('click', () => {
        if (!gameState.solvedPuzzles.clock) {
            openModal(modals.clock);
        } else {
            alert('이미 해결한 문제다.');
        }
    });

    objects.chest.addEventListener('click', () => {
        openModal(modals.chest);
    });


    // --- 각 퍼즐 정답 처리 ---

    // 1. 낡은 종이 (퀴즈)
    modals.paper.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.dataset.answer === '3') {
                alert('정답! 첫 번째 비밀번호는 [2]입니다.');
                gameState.passwordHints[0] = '2';
                gameState.solvedPuzzles.paper = true;
                updateHints();
                closeModal(modals.paper);
            } else {
                alert('틀렸습니다. 다시 생각해 보세요.');
            }
        });
    });

    // 2. 지도 (입력)
    document.getElementById('map-submit').addEventListener('click', () => {
        const answer = document.getElementById('map-answer').value;
        if (answer.trim() === '0') {
            alert('정답! 두 번째 비밀번호는 [0]입니다.');
            gameState.passwordHints[1] = '0';
            gameState.solvedPuzzles.map = true;
            updateHints();
            closeModal(modals.map);
        } else {
            alert('틀렸습니다. 지도를 잘 살펴보세요.');
        }
    });

    // 3. 책 더미 (입력)
    document.getElementById('books-submit').addEventListener('click', () => {
        const answer = document.getElementById('books-answer').value;
        if (answer.trim() === '2') {
            alert('정답! 세 번째 비밀번호는 [2]입니다.');
            gameState.passwordHints[2] = '2';
            gameState.solvedPuzzles.books = true;
            updateHints();
            closeModal(modals.books);
        } else {
            alert('틀렸습니다. 문제를 다시 읽어보세요.');
        }
    });


    // 4. 시계 (입력)
    document.getElementById('clock-submit').addEventListener('click', () => {
        const answer = document.getElementById('clock-answer').value;
        if (answer.trim() === '5') {
            alert('정답! 네 번째 비밀번호는 [5]입니다.');
            gameState.passwordHints[3] = '5';
            gameState.solvedPuzzles.clock = true;
            updateHints();
            closeModal(modals.clock);
        } else {
            alert('틀렸습니다. 긴 바늘이 가리키는 숫자를 보세요.');
        }
    });

    // 최종. 보물함
    document.getElementById('chest-submit').addEventListener('click', () => {
        const password = document.getElementById('chest-password').value;
        if (password === '2025') {
            alert('철컥-! 보물함이 열리며 안에서 낡은 문 열쇠가 나타났다. 당신은 열쇠로 문을 열고 마침내 서재를 탈출했습니다! 🎉');
            closeModal(modals.chest);
        } else {
            alert('비밀번호가 틀렸습니다.');
        }
    });

    // 초기 힌트 표시
    updateHints();
});