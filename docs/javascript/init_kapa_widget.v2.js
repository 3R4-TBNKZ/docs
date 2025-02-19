/*
    ======================================================================================
     # This script is used to initialize the Kapa AI widget on the documentation website.
    ======================================================================================
*/
document.addEventListener("DOMContentLoaded", function () {
    var script = document.createElement("script");
    script.src = "https://widget.kapa.ai/kapa-widget.bundle.js";
    script.setAttribute("data-website-id", "95d8dc11-e509-42cb-a7ee-f7e06df52017");
    script.setAttribute("data-project-name", "3R4");
    script.setAttribute("data-project-color", "#2894F3");
    script.setAttribute("data-project-logo", "https://avatars.githubusercontent.com/u/78708182?s=128");
    script.setAttribute("data-modal-disclaimer", "You can find further support on our [Discord server](https://discord.gg/gjUJHeguN6) or [our GitHub Discussions](https://github.com/GOD-TBnkz/3R4-OS/discussions). Remember that not all answers are accurate, as results are AI-generated.")
    script.setAttribute("data-modal-example-questions", "Does 3R4 support Windows Defender?,Who is 3R4 for?,What does 3R4 do?")
    script.setAttribute("data-modal-example-questions-col-span", "12")
    script.async = true;

    script.onload = () => {
        const kapaLoadedCheck = setInterval(() => {
            const kapaStyle = document.head.querySelector('style[data-emotion="mantine"]');
            if (kapaStyle && kapaStyle.sheet) {
                clearInterval(kapaLoadedCheck);
                const cssRules = Array.from(kapaStyle.sheet.cssRules).map(rule => rule.cssText).join('\n');
                const node = document.body.appendChild(kapaStyle);
                node.appendChild(document.createTextNode(cssRules));
            }
        }, 150);
    };

    document.head.appendChild(script);
});

function clickKapaAi() {
    const button = document.querySelector('#kapa-widget-container > button')
    if (button) button.click()
}
