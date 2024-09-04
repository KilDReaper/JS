pythonImages = document.querySelectorAll("#pythonlink");
javaImages = document.querySelectorAll("#javalink");
jsImages = document.querySelectorAll("#jslink");

pythonImages.forEach((python_image) => {
    python_image.addEventListener("click", () => {
        window.open("https://github.com/KilDReaper/Python_Parking-management-System", "_blank")
    })
});

javaImages.forEach((java_image) => {
    java_image.addEventListener("click", () => {
        window.open("https://github.com/nirajchand/Online-Voting-System-", "_blank")
    })
});

jsImages.forEach((js_image) => {
    js_image.addEventListener("click", () => {
        window.open("https://github.com/KilDReaper/JS", "_blank")
    })
});
