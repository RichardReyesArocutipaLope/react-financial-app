import { Header, ModuleContainer, Sidebar } from "../components"

export const FinancialLayout = ({ children }) => {


    return (
        <>
            <Sidebar />
            <div className="content-app">
                <Header />

                <ModuleContainer>
                    {children}
                </ModuleContainer>
            </div>

        </>
    )
}

{/* MODULO CREDITO */ }
// <Route path="/creditos" element={<Credits handleModal={handleModal} />} />

//     <Route path="/" element={<Navigate to="/creditos" />} />
//     <Route path="/*" element={<Navigate to='/creditos' />} />
