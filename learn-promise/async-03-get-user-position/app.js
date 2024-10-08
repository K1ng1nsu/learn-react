const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (success) => {
                resolve(success);
            },
            (error) => {
                reject(error);
            },
            opts
        );
    });
    return promise;
};

const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        // Promise로 전달된 함수는 바로 실행됨
        // 이 함수는 2개의 인자를 받음 resolve --> 성공했을 때 넘겨줄 정보, reject --> 실패했을 때 넘겨줄 정보
        setTimeout(() => {
            resolve('Done!');
        }, duration);
    });

    return promise;
};

async function trackUserHandler() {
    try {
        const posData = await getPosition();
        const timerData = await setTimer(2000);
        console.log(timerData, posData);
    } catch (error) {
        console.log(error);
    }

    setTimeout(() => {
        console.log('Timer done!');
    }, 0);
    console.log('Getting position...'); // 이번엔 두 번째로 실행됨 , await을 다 처리하고 오기때문
}

Promise.race([getPosition(), setTimer(1000)]).then((data) => {
    console.log(data);
});

button.addEventListener('click', trackUserHandler);
