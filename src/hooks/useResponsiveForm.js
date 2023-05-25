import { useEffect, useState } from "react";

const breackPoints = {
    xxs: 480,
    xs: 768,
    s: 1024,
    m: 1280,
    l: 1536,
    xl: 2000,
}
const config = [
    { min: breackPoints.xl, max: 5000, sentinel: ">xl", col: "xxl" },
    { min: breackPoints.l + 1, max: breackPoints.xl, sentinel: "l-xl", col: "xl" },
    { min: breackPoints.m + 1, max: breackPoints.l, sentinel: "m-l", col: "l" },
    { min: breackPoints.s + 1, max: breackPoints.m, sentinel: "s-m", col: "m" },
    { min: breackPoints.xs + 1, max: breackPoints.s, sentinel: "xs-s", col: "s" },
    { min: breackPoints.xxs + 1, max: breackPoints.xs, sentinel: "xxs-xs", col: "xs" },
    { min: 0, max: breackPoints.xxs, sentinel: "<xxs", col: "xxs" },
];

export const useResponsiveForm = (initialResponsive = []) => {

    const [rwd, setRwd] = useState({})
    const [centinela, setCentinela] = useState('firstRender')

    let assignedBreakPoints = [];
    initialResponsive.forEach((item) => { assignedBreakPoints.push(...Object.keys(item)) })
    let assignedBreakPointsFiltering = [...new Set(assignedBreakPoints)]

    useEffect(() => {

        function cambiarEstilo() {
            const { sentinel, col } = config.find((item) =>
                window.matchMedia(`(min-width: ${item.min}px) and (max-width: ${item.max}px)`).matches);

            if (!(centinela !== sentinel)) return;
            setCentinela(sentinel);
            console.log(sentinel);
            if (assignedBreakPointsFiltering.includes(col)) setNewCol(col);
        }

        if (centinela === 'firstRender') cambiarEstilo();

        window.addEventListener("resize", cambiarEstilo);

        return () => {
            window.removeEventListener("resize", cambiarEstilo);
        }

    }, [centinela])

    const setNewCol = (breackPoint) => {
        const updatedRwd = {}
        initialResponsive.forEach((item) => updatedRwd[item.name] = item[breackPoint] || item.col)
        setRwd(updatedRwd)
    }

    return { rwd, }
}
