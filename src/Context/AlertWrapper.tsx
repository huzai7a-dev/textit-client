import { Alert, Snackbar } from '@mui/material';
import { createContext, useState } from 'react';

interface iContext {
    alert: alertType,
    showAlert:(message:string,status: alertType['status'])=> void
}
interface alertType {
    status?: 'info' | 'success' | 'error' | 'warning',
    show?: boolean,
    message: string,
}

const alertInit: alertType = {
    status: 'info',
    show: false,
    message: 'Alert'
}
const contextInit:iContext = {
    alert:alertInit,
    showAlert:()=> {} 
}
export const AlertContext = createContext<iContext>(contextInit);


const AlertWrapper = ({ children }: { children: JSX.Element }) => {
    const [alert, setAlert] = useState<alertType>(alertInit);

    const handleClose = () => {
        setAlert((prevValue) => {
            return {
                ...prevValue,
                show: false
            }
        })
    }

    const showAlert = (message: string, status: alertType['status']) => {
        setAlert({
            status,
            message,
            show: true
        })
    }

    return (
        <AlertContext.Provider value={{alert,showAlert}}>
            <Snackbar open={alert.show} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.status} sx={{ width: 300 }}>
                    {alert.message}
                </Alert>
            </Snackbar>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertWrapper

