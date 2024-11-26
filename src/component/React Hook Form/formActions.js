import { setLoader } from "../login/loginComponentReducer"


export const formActions = (loading) => {
    return (dispatch, getState) => {
        
        // const { loading } = useSelector(state => state.loading)
        dispatch(setLoader(!loading))
    }
}