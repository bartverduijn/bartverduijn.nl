const header = document.querySelector('.js-header');
const main = document.querySelector('.js-main');
const mainText = document.querySelector('.js-fade');
const bart = document.querySelector('.js-bart');
const verduijn = document.querySelector('.js-verduijn');

function transitionEndPromise(element) {
    return new Promise(resolve => {
        element.addEventListener('transitionend', function f(event) {
            if (event.target !== element) return;
            element.removeEventListener('transitionend', f);
            resolve();
        });
    });
}

function RAFPromise() {
    return new Promise(resolve => requestAnimationFrame(resolve));
}

function animate(element, animationStyles) {
    Object.assign(element.style, animationStyles);
    return transitionEndPromise(element).then(() => RAFPromise());
}

const initializePageLoadAnimationPromise = Promise.all([
    animate(header, {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1,
        transition:
            'transform 0.77s cubic-bezier(0.64,-0.64, 0.73, 1.15), opacity 0.77s cubic-bezier(0.64,-0.64, 0.73, 1.15)',
    }),
    animate(main, {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1,
        transition:
            'transform 0.93s cubic-bezier(0.64,-0.64, 0.73, 1.15) 0.12s, opacity 0.93s cubic-bezier(0.64,-0.64, 0.73, 1.15) 0.12s',
    }),
    animate(mainText, {
        opacity: 1,
        transition:
            'opacity 1.47s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.58s',
    }),
]);

RAFPromise()
    .then(() => initializePageLoadAnimationPromise)
    .then(() =>
        animate(bart, {
            transform: 'translateY(-40px)',
            opacity: 1,
            transition:
                'transform 0.24s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.24s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        }).then(() =>
            animate(verduijn, {
                transform: 'translateY(-40px)',
                opacity: 1,
                transition:
                    'transform 0.18s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.18s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            })
        )
    );
