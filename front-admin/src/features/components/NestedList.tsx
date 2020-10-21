/** @format */
import React, { useState } from 'react';
import { random as r, name } from 'faker';
import { Button } from '@material-ui/core';
import { CustomNestedList, ListData } from '../../shared/components/NestedList';
import { random } from '../../shared/utils/random';
import { range } from '../../shared/utils/range';

type ListDataDemo = ListData<{ name: string }>;

const getListFakerData = (): ListDataDemo[] => {
    const depth = random(4, 5.1);

    const recursion = (d: number): ListDataDemo => {
        const result: ListDataDemo = {
            key: r.uuid(),
            data: {
                name: name.jobTitle(),
            },
            render: (
                row: ListDataDemo,
                isOpen: boolean,
                isSelected: boolean
            ) => {
                return <span>{row.data.name}</span>;
            },
        };
        if (d > 0) {
            result.children = range(0, random(4, 7.1)).map((i) => {
                return recursion(d - 1);
            });
        }
        return result;
    };

    return range(0, random(4, 7.1)).map((n) => {
        return recursion(depth);
    });
};

const NestListDemoView = () => {
    const [dataSource, setDataSource] = useState(getListFakerData());
    window.console.log(dataSource);

    return (
        <div>
            <Button
                onClick={() => {
                    setDataSource(getListFakerData());
                }}
            >
                fresh
            </Button>
            <CustomNestedList dataSource={dataSource} />
        </div>
    );
};

export default NestListDemoView;
