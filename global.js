const hyperlinked = document.getElementsByClassName("hyperlinked");
for (const el of hyperlinked) { el.addEventListener("click", goTo); }

function goTo() {

    switch (this.dataset.redirectLink) {

        case ("0"):
            window.location.href = "https://bettermyenglish.com/index.html";
            break;
        
        case ("1"):
            window.location.href = "https://bettermyenglish.com/about.html";
            break;
        
        case ("2"):
            window.location.href = "https://bettermyenglish.com/resources.html";
            break;
        
        case ("3"):
            window.open("https://youtube.com/@bettermyenglish/?sub_confirmation=1");
            break;
        
        case ("4"):
            window.open("https://discord.gg/yuE9Rzpkh");
            break;
        
        case ("5"):
            window.open("https://wa.me/message/TLRNWRKLTA7SM1");
            break;

        case("6"):
            window.open("https://www.instagram.com/bettermyenglishcom/");
            break;

    }

}
