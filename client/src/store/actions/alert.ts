import { toast } from 'react-toastify';

export const setAlert = (msg: string,type='info') => (dispatch: any) => {
  if(type === 'warning'){
    toast.error(msg);
    return;
  }
  toast.info(msg)
};
