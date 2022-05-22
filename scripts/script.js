function domGuard() {
    let observer = new MutationObserver(() => { alert("Do not modify the DOM!"); location.reload()});
    observer.observe(document.body, {
        attributes: true,
    });
}

setTimeout(domGuard, 100)
