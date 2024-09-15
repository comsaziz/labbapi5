function ClickDev(dev) {
    let checkUrl = document.getElementById("website");

    if (dev === 1) {
        window.open(checkUrl.value, "", "width=375, height=812");
    } else if (dev === 2) {
        window.open(checkUrl.value, "", "width=412, height=869");
    } else if (dev === 3) {
        window.open(checkUrl.value, "", "width=1024, height=1366");
    } else if (dev === 4) {
        window.open(checkUrl.value, "", "width=1920, height=1080");
    } else {
        console.log("Invalid size");
    }
}
