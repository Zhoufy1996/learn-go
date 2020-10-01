/** @format */
import useLocalStorage from '../../shared/hooks/useLocalStorage';

// eslint-disable-next-line react-hooks/rules-of-hooks
const localToken = useLocalStorage<string>('token');

export default localToken;
