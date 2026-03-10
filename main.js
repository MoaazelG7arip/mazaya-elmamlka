(function () {
    // تعيين السنة الحالية في التذييل
    document.getElementById("currentYear").innerText = new Date().getFullYear();

    const waBtns = document.querySelectorAll(".btn-wa");
    const callBtns = document.querySelectorAll(".btn-call");
    const msgDiv = document.getElementById("clickMessage");

    function showClickMessage(platform) {
        if (msgDiv) {
            msgDiv.innerHTML = `<i class="fa-regular fa-hand-pointer"></i> تم النقر على ${platform} – سيتم فتح التطبيق...`;
            setTimeout(() => {
                msgDiv.innerHTML = "";
            }, 3000);
        }
        console.log(
            `[إنجاز كلين] زر ${platform} نقر (${new Date().toLocaleTimeString("ar-EG")})`,
        );
    }

    waBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            showClickMessage("واتساب");
        });
    });

    callBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            showClickMessage("اتصال");
        });
    });


    // لمسة تفاعلية: النقر المزدوج على الأيقونة
    const heroIcon = document.querySelector(".hero-icon");
    if (heroIcon) {
        heroIcon.addEventListener("dblclick", function () {
            const icon = this.querySelector("i");
            if (icon) {
                icon.className = "fa-solid fa-broom";
                setTimeout(() => {
                    icon.className = "fa-solid fa-spray-can-sparkles";
                }, 700);
            }
        });
    }
})();








(function() {
    const copyBtn = document.getElementById('copyTrigger');
    const toast = document.getElementById('copyToast');

    if (!copyBtn || !toast) return;

    // track animation to avoid re-trigger issues
    let hideTimer = null;

    function showToast() {
    // remove any existing 'show' class (restart animation)
    toast.classList.remove('show');
    
    // force reflow to restart animation (tiny trick)
    void toast.offsetWidth;
    
    // add show class → appears, and animation 'toastFadeOut' will auto-hide after 2s
    toast.classList.add('show');

    // optional: we could simulate clipboard copy (optional for demo)
    // but we want pure visual feedback, no actual clipboard write.
    // uncomment next line if you want actual clipboard (requires https or localhost)
    // navigator.clipboard?.writeText('+18005550199').catch(() => {});
    }

    copyBtn.addEventListener('click', (e) => {
    e.preventDefault();   // avoid any accidental form stuff
    showToast();

    // (optional but clean) actual clipboard copy attempt
    try {
        navigator.clipboard.writeText('+966580904198').catch(() => {
        // silent fail — demo still shows toast
        });
    } catch (err) {
        // ignore, still show feedback
    }
    });

    // if you want to remove class after animation ends (not strictly needed because animation hides it)
    // but it's good hygiene to remove class after hide, so next click works cleanly
    toast.addEventListener('animationend', (event) => {
    // when the toastFadeOut ends (after 2s) we remove .show to reset
    if (event.animationName === 'toastFadeOut') {
        toast.classList.remove('show');
        // also ensure inline display none is removed by class removal, so it's hidden but reset
        // (the keyframe sets display:none at 100%, but after removal of class it goes back to default .clipboard-toast which is opacity:0, visibility:hidden, display:inline-flex)
        // all good.
    }
    });

    // Also handle transition end just in case? but animationend is enough.
})();
