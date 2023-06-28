let part = document.getElementById("section_integration_js");
let set = {
    data: [
        {
            title_day: "lun",
            title_dat: "20",
            icon: "img/chance-storm.png",
            tmp_max: 14,
            tmp_min: 6,
            special_classe: "",
        },
        {
            title_day: "mar",
            title_dat: "21",
            icon: "img/smoke.png",
            tmp_max: 8,
            tmp_min: 1,
            special_classe: "",
        },
        {
            title_day: "mer",
            title_dat: "22",
            icon: "img/blizzard.png",
            tmp_max: 6,
            tmp_min: -6,
            special_classe: "",
        },
        {
            title_day: "jeu",
            title_dat: "23",
            icon: "img/snow.png",
            tmp_max: 4,
            tmp_min: -2,
            special_classe: "",
        },
        {
            title_day: "ven",
            title_dat: "24",
            icon: "img/sunny.png",
            tmp_max: 14,
            tmp_min: 10,
            special_classe: "",
        },
        {
            title_day: "sam",
            title_dat: "25",
            icon: "img/thunder-storm.png",
            tmp_max: 16,
            tmp_min: 12,
            special_classe: "",
        },
        {
            title_day: "dim",
            title_dat: "26",
            icon: "img/fog.png",
            tmp_max: 8,
            tmp_min: 5,
            special_classe: "",
        },
        {
            title_day: "lun",
            title_dat: "27",
            icon: "img/wind.png",
            tmp_max: 4,
            tmp_min: -3,
            special_classe: "",
        },
        {
            title_day: "mar",
            title_dat: "28",
            icon: "img/sleet.png",
            tmp_max: 7,
            tmp_min: 0,
            special_classe: "spn",
        },
        {
            title_day: "mer",
            title_dat: "29",
            icon: "img/hazy.png",
            tmp_max: 4,
            tmp_min: -2,
            special_classe: "spn",
        },
    ],
}
for (let i = 0; i !== 10; i++) {
    part.innerHTML += `
    <article class="add_card_by_js ${set.data[i].special_classe}">
        <h2>${set.data[i].title_day}</h2>
        <p>${set.data[i].title_dat}</p>
        <img src="${set.data[i].icon}" alt="image représentent le temp">
        <p><span class="deger_psedo_element">${set.data[i].tmp_max}</span> | <span class="deger_psedo_element">${set.data[i].tmp_min}</span></p>
    </article>
`
}
