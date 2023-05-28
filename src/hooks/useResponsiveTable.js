import { useEffect } from "react";
import { useState } from "react";

const breackPoints = {
    xxs: 480,
    xs: 768,
    s: 1024,
    m: 1280,
    l: 1536,
    xl: 2000,
}
const config = [
    { min: breackPoints.xl, max: 5000, sentinel: ">xl", col: "xxl", maxColumns: 10 },
    { min: breackPoints.l + 1, max: breackPoints.xl, sentinel: "l-xl", col: "xl", maxColumns: 8 },
    { min: breackPoints.m + 1, max: breackPoints.l, sentinel: "m-l", col: "l", maxColumns: 6 },
    { min: breackPoints.s + 1, max: breackPoints.m, sentinel: "s-m", col: "m", maxColumns: 5 },
    { min: breackPoints.xs + 1, max: breackPoints.s, sentinel: "xs-s", col: "s", maxColumns: 4 },
    { min: breackPoints.xxs + 1, max: breackPoints.xs, sentinel: "xxs-xs", col: "xs", maxColumns: 2 },
    { min: 0, max: breackPoints.xxs, sentinel: "<xxs", col: "xxs", maxColumns: 1 },
];

export const useResponsiveTable = () => {

    const [maxColumns, setMaxColumns] = useState(1)
    const [centinela, setCentinela] = useState('firstRender')

    useEffect(() => {
        function responseTable() {
            const { sentinel, maxColumns } = config.find((item) =>
                window.matchMedia(`(min-width: ${item.min}px) and (max-width: ${item.max}px)`).matches);

            if (!(centinela !== sentinel)) return;
            setCentinela(sentinel);
            console.log(sentinel);
            setMaxColumns(maxColumns);
        }

        if (centinela === 'firstRender') responseTable();
        window.addEventListener("resize", responseTable);

        return () => {
            window.removeEventListener("resize", responseTable);
        }

    }, [centinela])

    return {
        maxColumns
    }
}