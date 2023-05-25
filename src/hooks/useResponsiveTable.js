/************************************************************************/
//Mini libreria para hacer que las tablas sean responsive
//Adaptado para laravel 9 y livewire
//Hecho por Richard Reyes Arocutipa Lope

let table = null;
let thead = null;
let tbody = null;
let numTR = null;

let svgcont = [];
let maxColumns = [];

/**
 * ARRAY CON LOS BREAKPOINTS
 */
const tableBreakPoints = [
    {
        maxColumns: 11,
        minWindowWidth: 3000,
        message: "MONITOR 4K",
    },
    {
        maxColumns: 10,
        minWindowWidth: 2500,
        message: "MONITOR 1440P",
    },
    {
        maxColumns: 7,
        minWindowWidth: 1500,
        message: "MONITOR 1080P",
    },
    {
        maxColumns: 6,
        minWindowWidth: 1024,
        message: "MONITOR 720P",
    },
    {
        maxColumns: 5,
        minWindowWidth: 768,
        message: "TABLET L",
    },
    {
        maxColumns: 4,
        minWindowWidth: 640,
        message: "TABLET M",
    },
    {
        maxColumns: 2,
        minWindowWidth: 480,
        message: "CELULAR L",
    },
    {
        maxColumns: 1,
        minWindowWidth: 300,
        message: "CELULAR S",
    },
];

let buttonSvg = [
    {
        elementHtml:
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' style='display:block'><path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'/></svg>",
        class1: "iconSVGadd",
        background: "#0fdd7d",
    },
    {
        elementHtml:
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' style='display:block'><path d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z'/></svg>",
        class1: "iconSVGless",
        background: "rgb(215, 4, 4)",
    },
];

const createButtonForTableResponsive = (button) => {
    let svg = document.createElement("span");
    svg.innerHTML = button.elementHtml;
    svg.classList.add(button.class1);
    svg.classList.add("iconResponsive");
    svg.style.display = "none";
    svg.style.width = "1.3rem";
    svg.style.height = "1.3rem";
    svg.style.position = "absolute";
    svg.style.backgroundColor = button.background;
    svg.style.borderRadius = "50%";
    svg.style.padding = ".3rem";
    svg.style.boxShadow = "0px 0px 10px 0px rgb(120, 120, 120)";
    svg.style.left = ".1rem";

    return svg;
};

/**
 * FUNCION ENCARGADA DE QUE LA TABLA SE VUELVA RESPONSIVE
 * @param {number} maxColumns - Numero maximo de columnas para la tabla
 * @param {array} thead - Cabeceras de la tabla
 * @param {array} tbody - Contenido de la tabla
 * @return {void} No devuelve nada
 */
const tableResponsive = (thead, tbody, numTable) => {
    let TDvalues = [];
    let THvalues = [];

    thead.map((th, index) => {
        th.style.display = "table-cell";
        let optionRegister = th.classList.contains("option-register");
        if (index > maxColumns[numTable] - 1 && !optionRegister) {
            THvalues.push(th.textContent);
            th.style.display = "none";
        }
    });

    let removeChildren = document.querySelectorAll(".children" + numTable);
    if (removeChildren) {
        let ArrayRemoveChildren = Array.from(removeChildren);
        ArrayRemoveChildren.map((element) => {
            element.remove();
        });
    }

    numTR = Array.from(document.querySelectorAll(".tr-body" + numTable));
    numTR = numTR.length;

    tbody.map((tr) => {
        let trArray = Array.from(tr.children);
        trArray.map((td, index) => {
            td.style.display = "table-cell";
            let optionRegister = td.classList.contains("option-register");
            if (index > maxColumns[numTable] - 1 && !optionRegister) {
                TDvalues.push(td.innerHTML);
                td.style.display = "none";
            }
        });

        if (TDvalues.length > 0) {
            const newTR = document.createElement("tr");
            newTR.classList.add("children" + numTable);

            TDvalues.map((element, index) => {
                let newTD = document.createElement("td");
                let newSPAN1 = document.createElement("span");
                newSPAN1.classList.add("th-responsive");
                let newSPAN2 = document.createElement("span");
                newSPAN2.classList.add("td-responsive");

                newSPAN1.textContent = THvalues[index];
                newSPAN2.innerHTML = element;
                newTD.appendChild(newSPAN1);
                newTD.appendChild(newSPAN2);
                newTR.appendChild(newTD);
            });

            tr.insertAdjacentElement("afterend", newTR);

            if (svgcont[numTable] <= numTR) {
                tr.children[0].style.position = "relative";
                tr.children[0].style.paddingLeft = "2.5rem";
                const newSVGadd = createButtonForTableResponsive(buttonSvg[0]);
                const newSVGless = createButtonForTableResponsive(buttonSvg[1]);
                let primerHijo = tr.children[0].firstChild;
                tr.children[0].insertBefore(newSVGadd, primerHijo);
                tr.children[0].insertBefore(newSVGless, primerHijo);
                svgcont[numTable]++;

                //eventos con el click
                tr.children[0].children[0].addEventListener("click", () => {
                    tr.classList.toggle("active");
                });
                tr.children[0].children[1].addEventListener("click", () => {
                    tr.classList.toggle("active");
                });
            }
        } else {
            let iconos = Array.from(tr.children[0].children);
            if (iconos.length != 0) {
                if (
                    iconos[0].classList.contains("iconResponsive") &&
                    iconos[1].classList.contains("iconResponsive")
                ) {
                    iconos[0].remove();
                    iconos[1].remove();
                    tr.children[0].style.paddingLeft = ".5rem";
                    svgcont[numTable]--;
                }
            }
        }
        TDvalues = [];
    });
    THvalues = [];
};
/**
 * Funcion que recibe el ancho de pantalla, para comparar con los
 * breakpoints y luego deacuerdo a eso llama a la funcion que hace
 * que las tabla sea responsive.
 */
const tableOnResize = (windowWidth, index) => {
    let enable = true;
    tableBreakPoints.map((breakPoint) => {
        if (enable && windowWidth > breakPoint.minWindowWidth) {
            if (maxColumns[index] != breakPoint.maxColumns) {
                maxColumns[index] = breakPoint.maxColumns;
                console.log(breakPoint.message);
                table = document.getElementById("table" + index);
                thead = Array.from(table.tHead.children[0].children);
                tbody = Array.from(table.tBodies[0].children);
                tableResponsive(thead, tbody, index);
                table.style.display = "table";
            }
            enable = false;
        }
    });
};
/************************************************************************/

/************************************************************************/
/**
 * Eventos listener y de livewire para llamar la funcion responsive
 */
let numTable = Array.from(document.querySelectorAll(".table-rwd")).length;

Livewire.on("setNumTable", function () {
    numTable = Array.from(document.querySelectorAll(".table-rwd")).length;
});

Livewire.on("tableResponsiveLaravel", function () {
    let windowWidth = window.outerWidth;
    for (let index = 1; index <= numTable; index++) {
        svgcont[index] = 1;
        maxColumns[index] = null;
        tableOnResize(windowWidth, index);
    }
});

addEventListener("resize", (e) => {
    let windowWidth = e.target.outerWidth;
    for (let index = 1; index <= numTable; index++) {
        tableOnResize(windowWidth, index);
    }
});

addEventListener("load", (e) => {
    let windowWidth = e.target.documentElement.clientWidth;
    for (let index = 1; index <= numTable; index++) {
        svgcont[index] = 1;
        maxColumns[index] = null;
        tableOnResize(windowWidth, index);
    }
});