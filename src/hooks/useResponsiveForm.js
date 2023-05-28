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
    { min: breackPoints.xl, max: 5000, sentinel: 3000, col: "xxl" },
    { min: breackPoints.l + 1, max: breackPoints.xl, sentinel: 2000, col: "xl" },
    { min: breackPoints.m + 1, max: breackPoints.l, sentinel: 1536, col: "l" },
    { min: breackPoints.s + 1, max: breackPoints.m, sentinel: 1280, col: "m" },
    { min: breackPoints.xs + 1, max: breackPoints.s, sentinel: 1024, col: "s" },
    { min: breackPoints.xxs + 1, max: breackPoints.xs, sentinel: 768, col: "xs" },
    { min: 0, max: breackPoints.xxs, sentinel: 480, col: "xxs" },
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

    return { rwd, centinela }
}
