window.addEventListener(
    'load',
    () => {
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

        RAFPromise()
            .then(() =>
                animate(mainText, {
                    opacity: 1,
                    transition:
                        'opacity 1.47s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.16s',
                })
            )
            .then(() =>
                animate(bart, {
                    transform: 'translateY(-40px)',
                    opacity: 1,
                    transition:
                        'transform 0.24s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.17s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                })
            )
            .then(() =>
                animate(verduijn, {
                    transform: 'translateY(-40px)',
                    opacity: 1,
                    transition:
                        'transform 0.18s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.19s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                })
            );
    },
    false
);
