const path = "/users/download/index.html"

let isHtml = path => {
    let requiredExt = ".html";

    let pathExt = path.slice(-5);

    return pathExt === requiredExt
}
console.log(isHtml(path))