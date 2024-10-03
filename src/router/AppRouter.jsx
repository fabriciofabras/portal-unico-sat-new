import { PanelUnicoRoutes } from "../routes/PanelUnicoRoutes"

export const AppRouter = () =>{
    return (
        <>
        <Routes>
            <Route path="/*" element={<PanelUnicoRoutes/>}/>
        </Routes>
        </>
    )
}