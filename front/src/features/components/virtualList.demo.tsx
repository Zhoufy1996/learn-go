/** @format */
/** @format */
import React, { useState, useEffect, useCallback } from 'react';
import faker from 'faker';
import VirtualList from '../../shared/components/VirtualList/index4';

interface FakerData {
    id: number;
    data: string;
}

const VirtualListDemo = () => {
    const [data, setData] = useState<FakerData[]>([]);

    useEffect(() => {
        const mockDataCount = 100;
        const result: FakerData[] = [];
        for (let i = 0; i < mockDataCount; i += 1) {
            result.push({
                id: i,
                data: faker.lorem.sentences(),
            });
        }
        setData(result);
    }, []);
    const render = useCallback((row: FakerData, index: number) => {
        return (
            <div key={index}>
                <span>{index + 1}</span>
                <span>:</span>
                <span>{row.data}</span>
            </div>
        );
    }, []);
    return (
        <div>
            <VirtualList
                data={data}
                render={render}
                height={800}
                rowHeight={10}
                rowKey={(row) => row.id}
            />
        </div>
    );
};

export default VirtualListDemo;
