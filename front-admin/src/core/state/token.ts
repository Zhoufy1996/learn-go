/** @format */

import { createContainer } from 'unstated-next';
import useLocalStorage from '../../shared/hooks/useLocalStorage';

const useToken = () => {
    return useLocalStorage<string>('token');
};

const TokenContainer = createContainer(useToken);

export default TokenContainer;
