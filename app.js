let part = document.getElementById("section_integration_js");
let set = {
    data: [
        {
            title_day: "lun",
            title_dat: "20",
            icon: "img/chance-storm.png",
            tmp_max: 14,
            tmp_min: 6,
        },
        {
            title_day: "mar",
            title_dat: "21",
            icon: "img/smoke.png",
            tmp_max: 8,
            tmp_min: 1,
        },
        {
            title_day: "mer",
            title_dat: "22",
            icon: "img/",
            tmp_max: 6,
            tmp_min: -6,
        },
        {
            title_day: "jeu",
            title_dat: "23",
            icon: "img/",
            tmp_max: 4,
            tmp_min: -2,
        },
        {
            title_day: "ven",
            title_dat: "24",
            icon: "img/",
            tmp_max: 14,
            tmp_min: 10,
        },
        {
            title_day: "sam",
            title_dat: "25",
            icon: "img/",
            tmp_max: 16,
            tmp_min: 12,
        },
        {
            title_day: "dim",
            title_dat: "26",
            icon: "img/",
            tmp_max: 8,
            tmp_min: 5,
        },
        {
            title_day: "lun",
            title_dat: "27",
            icon: "img/",
            tmp_max: 4,
            tmp_min: -3,
        },



        // {
        //     title_day: "",
        //     title_dat: "",
        //     icon: "img/",
        //     tmp_max: 14,
        //     tmp_min: 6,
        // },
        // {
        //     title_day: "",
        //     title_dat: "",
        //     icon: "img/",
        //     tmp_max: 14,
        //     tmp_min: 6,
        // },


    ],
}
for (let i = 0; i !== 9; i++) {
    part.innerHTML += `
    <article class="add_card_by_js">
        <h3>${set.data[i].title_day}</h3>
        <p>${set.data[i].title_dat}</p>
        <img src="${set.data[i].icon}" alt="image représentent le temp">
        <p><span>${set.data[i].tmp_max}</span> | <span>${set.data[i].tmp_min}</span></p>
    </article>
`
}
