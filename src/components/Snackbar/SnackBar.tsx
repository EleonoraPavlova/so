import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useSelector } from 'react-redux'
import {
  selectAppError,
  selectAppStatus,
  selectAppSuccess,
  setAppErrorAC,
  setAppStatusAC,
  setAppSuccessAC,
} from 'BLL/reducers/appSlice'
import { useAppDispatch } from 'common/hooks/selectors'
import { forwardRef, SyntheticEvent } from 'react'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function SnackBar() {
  let error = useSelector(selectAppError)
  let statusApp = useSelector(selectAppStatus)
  let success = useSelector(selectAppSuccess)
  const dispatch = useAppDispatch()

  const handleClose = (e?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    dispatch(setAppErrorAC({ error: null }))
    dispatch(setAppSuccessAC({ success: null }))
    dispatch(setAppStatusAC({ status: 'idle' }))
  }

  if (!error && !success) return null

  return (
    <Stack sx={{ width: '100%' }}>
      <Snackbar open={!!error || !!success} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={statusApp === 'succeeded' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {error ? error : success}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
