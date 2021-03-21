// VARIABLES

helptime = document.querySelector("#help-time")
helpsound = document.querySelector("#help-sound")
help = document.querySelector(".aide")
I_info = document.querySelector("#I")
soundon = document.querySelector("#soundon")
soundoff = document.querySelector("#soundoff")
play = document.querySelector("#play")
pause = document.querySelector("#pause")
icons = [soundon, soundoff, play, pause]
xylo1 = document.querySelector("#xylo1")
xylo2 = document.querySelector("#xylo2")
xylo3 = document.querySelector("#xylo3")
xylo4 = document.querySelector("#xylo4")
xylo5 = document.querySelector("#xylo5")
xylo6 = document.querySelector("#xylo6")
body = document.querySelector("body")
sun = document.querySelector("#sun")
moon = document.querySelector(".moon")
venus = document.querySelector(".venus")
mars = document.querySelector(".mars")
mercury = document.querySelector(".mercury")
jupiter = document.querySelector(".jupiter")
uranus = document.querySelector(".uranus")
neptune = document.querySelector(".neptune")
saturn = document.querySelector(".saturn")
earth = document.querySelector(".earth")
asteroid = document.querySelector(".asteroid")
label_exp = document.querySelector(".earth > .label")
label_base = document.querySelector(".saturn > .label")
label_studies = document.querySelector(".jupiter > .label")
label_contact = document.querySelector(".uranus > .label")
label_skills = document.querySelector(".neptune > .label")
label_qualities = document.querySelector(".asteroid > .label")
info_base = document.querySelector("#name")
info_studies = document.querySelector("#studies")
info_contact = document.querySelector("#contact")
info_skills = document.querySelector("#skills")
info_exp = document.querySelector("#exp")
info_qualities = document.querySelector("#qualities")
info = [info_contact, info_studies, info_base, info_skills, info_exp, info_qualities]
planets = [mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune, asteroid]
audio = 0

I_info.addEventListener('click', function() {
    info.forEach(element => {
        element.classList.add("none")
    });
    help.classList.toggle("none")
    I_info.classList.toggle("info_on")
})

soundoff.addEventListener('click', function() {
    soundon.classList.remove("none")
    soundoff.classList.add("none")
    audio = 1
})

soundon.addEventListener('click', function() {
    soundoff.classList.remove("none")
    soundon.classList.add("none")
    audio = 0
})

pause.addEventListener('click', function() {
    planets.forEach(element => {
        element.classList.add("paused")
    });
    play.classList.remove("none")
    pause.classList.add("none")
})

play.addEventListener('click', function() {
    planets.forEach(element => {
        element.classList.remove("paused")
    });
    pause.classList.remove("none")
    play.classList.add("none")
})

neptune.addEventListener('mouseenter', function() {
    label_skills.classList.remove("none")
})

neptune.addEventListener('mouseleave', function() {
    label_skills.classList.add("none")
})

asteroid.addEventListener('mouseenter', function() {
    label_qualities.classList.remove("none")
})

asteroid.addEventListener('mouseleave', function() {
    label_qualities.classList.add("none")
})

saturn.addEventListener('mouseenter', function() {
    label_base.classList.remove("none")
})

saturn.addEventListener('mouseleave', function() {
    label_base.classList.add("none")
})

jupiter.addEventListener('mouseenter', function() {
    label_studies.classList.remove("none")
})

jupiter.addEventListener('mouseleave', function() {
    label_studies.classList.add("none")
})

earth.addEventListener('mouseenter', function() {
    label_exp.classList.remove("none")
})

earth.addEventListener('mouseleave', function() {
    label_exp.classList.add("none")
})

uranus.addEventListener('mouseenter', function() {
    label_contact.classList.remove("none")
})

uranus.addEventListener('mouseleave', function() {
    label_contact.classList.add("none")
})

saturn.addEventListener('click', function() {
    if(audio == 0) {
        xylo2.play()
    }
    info.forEach(element => {
        element.classList.add("none")
    });
    info_base.classList.toggle("none")
})

asteroid.addEventListener('click', function() {
    if(audio == 0) {
        xylo6.play()
    }
    info.forEach(element => {
        element.classList.add("none")
    });
    info_qualities.classList.toggle("none")
})

jupiter.addEventListener('click', function() {
    if(audio == 0) {
        xylo1.play()
    }
    info.forEach(element => {
        element.classList.add("none")
    });
    info_studies.classList.toggle("none")
})

uranus.addEventListener('click', function() {
    if(audio == 0) {
        xylo3.play()
    }
    info.forEach(element => {
        element.classList.add("none")
    });
    info_contact.classList.toggle("none")
})

neptune.addEventListener('click', function() {
    if(audio == 0) {
        xylo4.play()
    }
    info.forEach(element => {
        element.classList.add("none")
    });
    info_skills.classList.toggle("none")
})

info.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.add("none")
    })
    
});

earth.addEventListener('click', function() {
    if(audio == 0) {
        xylo5.play()
    }
    info.forEach(element => {
        element.classList.add("none")
    });
    info_exp.classList.toggle("none")
})
