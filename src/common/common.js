
const common = {
    auth(nextState, replace, next) {
        if (window.sessionStorage.getItem('isAuth')) {
            next()
        } else {
            // fetch('/user.json').then(response => {
            //     debugger;
            // })
            replace('/login')
            next()
        }

    }
}

export default common
