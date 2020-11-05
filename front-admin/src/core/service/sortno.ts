/** @format */

import service from '.';

const baseUrl = '/sortno';

const getSortNoByTableName = (tableName: string): Promise<number[]> => {
    return service.get(`${baseUrl}/tablename/${tableName}`);
};

const updateSortNoByTableName = (
    tableName: string,
    ids: string
): Promise<void> => {
    return service.put(`${baseUrl}/update`, { tableName, ids });
};

const sortNoService = {
    getSortNoByTableName,
    updateSortNoByTableName,
};

export default sortNoService;
