export default class utils {

    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return ((
            ((rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || rect.top <= 0) &&
            ((rect.left >= 0 && rect.left <= (window.innerWidth || document.documentElement.clientWidth)) || rect.left <= 0)
        ));
    }
}