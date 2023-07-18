import { useEffect, useState } from "react"
import { CreditContext } from "./CreditContext"
import { useDispatch } from "react-redux"
import { startLoadingRoleByName } from "../../store/security/roles"
import { startLoadingCredits } from "../../store/credits/thunks"
import { startLoadingFinancialInterestRate } from "../../store/credits/financialInterestRate/thunks"
import { startLoadingPeriodType } from "../../store/credits/periodType/thunks"
import { startLoadingHousingType } from "../../store/catalogue/housingType/thunks"
import { startLoadingCivilStatus } from "../../store/catalogue/civilStatus/thunks"

export const CreditProvider = ({ children }) => {

    const tablethead = [
        'Nombres',
        'DNI',
        'Préstamo',
        'Estado',
        'Plazo',
        'Tasa Inc',
        'Analista',
        'Cobrador',
    ]

    const dataInfoRight = {
        infoHead: ['Monto', '4', '8', '12'],
        infoBody: [
            ["S/. 1,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
            ["S/. 1,500.00", "S/. 413.00", "S/. 225.00", "S/. 163.00",],
            ["S/. 2,000.00", "S/. 550.00", "S/. 300.00", "S/. 217.00",],
            ["S/. 2,500.00", "S/. 688.00", "S/. 375.00", "S/. 271.00",],
            ["S/. 3,000.00", "S/. 825.00", "S/. 450.00", "S/. 325.00",],
            ["S/. 3,500.00", "S/. 963.00", "S/. 525.00", "S/. 379.00",],
            ["S/. 4,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
            ["S/. 4,500.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
            ["S/. 5,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
            ["S/. 5,500.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
            ["S/. 6,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
            ["S/. 6,500.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
            ["S/. 7,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
            ["S/. 7,500.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
        ],
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingRoleByName('analista'))
        dispatch(startLoadingRoleByName('cobrador'))
    }, [])

    const [currentOffset, setCurrentOffset] = useState(0);

    const [dataForFilter, setDataForFilter] = useState({
        searchValue: '',
        state: null,
        dateRangeFirst: null,
        dateRangeLast: null,
        moneyRangeFirst: null,
        moneyRangeLast: null,
        idAnalista: null,
        idCobrador: null,
    })

    const [parameters, setParameters] = useState({ limit: 10, offset: 0 })

    useEffect(() => {
        setParameters({ limit: 10, offset: currentOffset })
    }, [currentOffset])

    useEffect(() => {
        dispatch(startLoadingCredits(dataForFilter, parameters))
    }, [parameters, dataForFilter])

    useEffect(()=>{
        dispatch(startLoadingFinancialInterestRate())
        dispatch(startLoadingPeriodType())
        dispatch(startLoadingHousingType())
        dispatch(startLoadingCivilStatus())
    }, [])
    

    return (
        <CreditContext.Provider
            value={{
                tablethead,
                dataInfoRight,

                currentOffset,
                setCurrentOffset,

                dataForFilter,
                setDataForFilter,

                parameters,
                setParameters


            }}
        >
            {children}
        </CreditContext.Provider>
    )
}
