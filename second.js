//-------------------------------------------
const books = [
    {
        class: "sower",
        title: "Liknelsen om Sådden",
        author: "Butler, Octavia",
        published: 2019,
        form: "Bok, fysiskt material",
        order: 1,
        genre: ["classic", "sci-fi", "dystopia", "fantasy"],
        lang: "sve"
    },
    {
        class: "died",
        title: "The Man Who Died Twice",
        author: "Osman, Richard",
        published: 2021,
        form: "Bok, fysiskt material",
        order: 2,
        genre: ["mystery", "crime"],
        lang: "eng"
    },
    {
        class: "crime",
        title: "Crime and Punsihment",
        author: "Dostojevskij, Fjodor",
        published: 2018,
        form: "Bok, fysiskt material",
        order: 3,
        genre: ["classic"],
        lang: "eng"
    },
    {
        class: "sea",
        title: "Somewhere Beyond the Sea",
        author: "Klune, TJ",
        published: 2024,
        form: "Bok, fysiskt material",
        order: 4,
        genre: ["fantasy", "romance"],
        lang: "eng"
    }
];

const listSection = document.querySelector(".books.listings");

// RENDER BOOKS ----------------------------------
const renderBooks = (book) => {
    listSection.innerHTML = "";
    for (let b of book) {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("bok", `${b.class}`);
        bookDiv.innerHTML = `
        <img src="img/thumbnail-${b.class}.jpg" alt="">
                <!-- bokomslag -->
                <span>
                    <p>${b.title} (${b.published})</p>
                    <p>${b.author}</p>
                    <p>${b.form}</p>
                </span>
                <span class="buttons">
                    <button class="reserve ${b.class}">Reservera</button>
                    <button class="remove ${b.class}">Ta bort 🗑️</button>
                </span>
                <button class="expand ${b.class}">▼</button>`;
        listSection.append(bookDiv);
    }
}

// FILTERING BOOKS -----------------------------------
let genreF;
let langF;

const filterResult = () => {
    let filtered;

    // sortera --------------------
    if (sort.value === "recent") {
        books.sort((a, b) => a.order - b.order);
    } else if (sort.value === "oldest") {
        books.sort((a, b) => b.order - a.order);
    } else if (sort.value === "title") {
        books.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort.value === "title-rev") {
        books.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort.value === "author") {
        books.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sort.value === "author-rev") {
        books.sort((a, b) => b.author.localeCompare(a.author));
    } else if (sort.value === "year-old") {
        books.sort((a, b) => a.published - b.published)
    } else if (sort.value === "year-rec") {
        books.sort((a, b) => b.published - a.published)
    }

    // filter ---------------------------
    console.log(genreF)
    if (genreF === "all") {
        genreF = "";
    }
    const genreMatch = (b) => !genreF || b.genre.includes(genreF);
    if (langF === "all") {
        langF = "";
    }
    const langMatch = (b) => !langF || b.lang.includes(langF);

    filtered = books.filter(b =>
        genreMatch(b)
        && langMatch(b)
    );

    renderBooks(filtered);
}

// EVENTLISTENERS --------------------------------
const sort = document.getElementById("sort");
const genre = document.getElementById("genre");
const lang = document.getElementById("lang");

sort.addEventListener("input", () => {
    filterResult();
})

genre.addEventListener("input", () => {
    genreF = genre.value;
    filterResult();
})

language.addEventListener("input", () => {
    langF = language.value;
    filterResult();
})


// RESERVE REMOVE ---------------------------------
const sowerBook = document.querySelector(".bok.sower");
const reserveBtn = document.querySelector(".reserve.sower");
reserveBtn.addEventListener("click", () => {
    const uSure = document.createElement("div");
    uSure.classList.add("u-sure");
    uSure.innerHTML = `
        <p>Din bok är reserverad! Vill du ta bort den från listan?</p>
        <button id="yes">Ja, ta bort</button>
        <button id="no">Nej, ha kvar</button>`;
    sowerBook.append(uSure);

    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    yesBtn.addEventListener("click", () => {
        sowerBook.remove();
    });
    noBtn.addEventListener("click", () => {
        uSure.style.visibility = "hidden";
    })
})

const removeBtn = document.querySelector(".remove.sower");
removeBtn.addEventListener("click", () => {
    sowerBook.remove();
})

const expandBtn = document.querySelector(".expand");
const expandDiv = document.querySelector("#expandable");
expandBtn.addEventListener("click", () => {
    if (expandBtn.classList.contains("infolded")) {
        console.log("utfälld");
        expandBtn.classList.replace("infolded", "outfolded");
        expandDiv.style.position = "relative";
        expandDiv.style.visibility = "visible";
        expandDiv.style.top = "-0.55em";
        expandDiv.style.left = "unset";
    } else {
        console.log("infälld");
        expandBtn.classList.replace("outfolded", "infolded");
        expandDiv.style.position = "absolute";
        expandDiv.style.visibility = "hidden";
        expandDiv.style.top = "22em";
        expandDiv.style.left = "50em";
    }


})

//---VIKTIGT---
// - Reservera från minneslistan ("vill du ta bort från listan?")
// - Ta bort från minneslistan
// X Fixa filter, sortera