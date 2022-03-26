function setTheme (loading) {
    let theme = localStorage.getItem('data-theme');
    console.log(theme)
    // document.documentElement.setAttribute('data-theme', theme)

    if (theme === "light") {
        !loading && changeThemeToDark()
        loading && changeThemeToChoco()
    }
    else {
        !loading && changeThemeToChoco()
        loading && changeThemeToDark()

    }


}


function changeThemeToChoco () {
    var sun = document.getElementById("sun")
    var moon = document.getElementById("moon")
    document.documentElement.setAttribute('data-theme', 'light')
    console.log(document.documentElement.ATTRIBUTE_NODE)
    localStorage.setItem('data-theme', 'light')
    sun.classList.add("active-theme");
    moon.classList.remove("active-theme");
}

function changeThemeToDark () {
    var sun = document.getElementById("sun")
    var moon = document.getElementById("moon")
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('data-theme', 'dark')
    sun.classList.remove("active-theme");
    moon.classList.add("active-theme");
}





export { setTheme }