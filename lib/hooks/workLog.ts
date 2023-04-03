import { workLogStatus } from '@/lib/atoms/workLogStates';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

export const useSessionStorageWorkLogStatus = () => {
  const [status, setStatus] = useRecoilState(workLogStatus);
  const [isAtomDefault, setIsAtomDefault] = useState<boolean>(true);
  const getFromSession = async () => {
    const sessionWorkLogStatus = await sessionStorage.getItem('workLogStatus');
    if (sessionWorkLogStatus) {
      setStatus(JSON.parse(sessionWorkLogStatus));
      setIsAtomDefault(false);
    }
  };
  useEffect(() => {
    getFromSession();
  }, []);
  return { status, isAtomDefault };
};
