import { useEffect } from "react";
import { useState } from "react";

export const useResponsiveForm = (initialResponsive = []) => {

    const breackPoints = {
        xxxs: 350,
        xxs: 640,
        xs: 768,
        s: 960,
        m: 1024,
        l: 1280,
        xl: 1536,
        xxl: 2560,
        xxxl: 3000,
    }

    const [rwd, setRwd] = useState({})
    const [centinela, setCentinela] = useState('hola')

    let assignedBreakPoints = [];
    initialResponsive.forEach((item) => {
        assignedBreakPoints.push(...Object.keys(item))
    })

    let assignedBreakPointsFiltering = [...new Set(assignedBreakPoints)]

    useEffect(() => {
        function cambiarEstilo() {
            switch (true) {
                case window.matchMedia(`(min-width: ${breackPoints.xxxl}px)`).matches:
                    if (centinela == '>xxxl') break;
                    setCentinela('>xxxl');
                    if (!assignedBreakPointsFiltering.includes('xxxl')) break;
                    setNewCol('xxxl')
                    console.log('>3000')
                    break;
                case window.matchMedia(`(max-width: ${breackPoints.xxxl - 1}px) and (min-width: ${breackPoints.xxl}px)`).matches:
                    if (centinela == 'xxxl-xxl') break;
                    setCentinela('xxxl-xxl');
                    if (!assignedBreakPointsFiltering.includes('xxl')) break;
                    setNewCol('xxl')
                    console.log('2999-2560')
                    break;

                case window.matchMedia(`(max-width: ${breackPoints.xxl - 1}px) and (min-width: ${breackPoints.xl}px)`).matches:
                    if (centinela == 'xxl-xl') break;
                    setCentinela('xxl-xl');
                    if (!assignedBreakPointsFiltering.includes('xl')) break;
                    setNewCol('xl')
                    console.log('2559-1536')
                    break;

                case window.matchMedia(`(max-width: ${breackPoints.xl - 1}px) and (min-width: ${breackPoints.l}px)`).matches:
                    if (centinela == 'xl-l') break;
                    setCentinela('xl-l');
                    if (!assignedBreakPointsFiltering.includes('l')) break;
                    setNewCol('l')
                    console.log('1535-1280')
                    break;

                case window.matchMedia(`(max-width: ${breackPoints.l - 1}px) and (min-width: ${breackPoints.m}px)`).matches:
                    if (centinela == 'l-m') break;
                    setCentinela('l-m');
                    if (!assignedBreakPointsFiltering.includes('m')) break;
                    setNewCol('m')
                    console.log('1279-1024')
                    break;

                case window.matchMedia(`(max-width: ${breackPoints.m - 1}px) and (min-width: ${breackPoints.s}px)`).matches:
                    if (centinela == 'm-s') break;
                    setCentinela('m-s');
                    if (!assignedBreakPointsFiltering.includes('s')) break;
                    setNewCol('s')
                    console.log('1023-960')
                    break;

                case window.matchMedia(`(max-width: ${breackPoints.s - 1}px) and (min-width: ${breackPoints.xs}px)`).matches:
                    if (centinela == 's-xs') break;
                    setCentinela('s-xs');
                    if (!assignedBreakPointsFiltering.includes('xs')) break;
                    setNewCol('xs')
                    console.log('959-768')
                    break;

                case window.matchMedia(`(max-width: ${breackPoints.xs - 1}px) and (min-width: ${breackPoints.xxs}px)`).matches:
                    if (centinela == 'xs-xxs') break;
                    setCentinela('xs-xxs');
                    if (!assignedBreakPointsFiltering.includes('xxs')) break;
                    setNewCol('xxs')
                    console.log('767-640')
                    break;

                case window.matchMedia(`(max-width: ${breackPoints.xxs - 1}px) and (min-width: ${breackPoints.xxxs}px)`).matches:
                    if (centinela == 'xxs-xxxs') break;
                    setCentinela('xxs-xxxs');
                    if (!assignedBreakPointsFiltering.includes('xxxs')) break;
                    setNewCol('xxxs')
                    console.log('639-350')
                    break;

                case window.matchMedia(`(max-width: ${breackPoints.xxxs - 1}px)`).matches:
                    if (centinela == '<xxxs') break;
                    setCentinela('<xxxs');
                    if (!assignedBreakPointsFiltering.includes('xxxs')) break;
                    setNewCol('xxxs')
                    console.log('<350')
                    break;

                default:
                    break;
            }
        }

        window.addEventListener("resize", cambiarEstilo);

        return () => {
            window.removeEventListener("resize", cambiarEstilo);
        }
    }, [centinela, assignedBreakPointsFiltering, rwd])


    const setNewCol = (breackPoint) => {
        const updatedRwd = {}
        initialResponsive.forEach((item) => {
            updatedRwd[item.name] = item[breackPoint] || item.col;
        })
        setRwd(updatedRwd)
    }

    return {
        rwd,
    }
}
