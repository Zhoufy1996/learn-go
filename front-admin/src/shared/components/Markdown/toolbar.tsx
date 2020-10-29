/** @format */
import React from 'react';
import { Tooltip } from '@material-ui/core';

import useStyle from './styles';
import { Tool, ToolBarProps, ToolTeam } from './model';

const Toolbar = ({ tools }: ToolBarProps) => {
    const classes = useStyle();
    return (
        <div className={classes.toolbar}>
            {tools.map((toolteam) => {
                return (
                    <div key={toolteam.name} className={classes.toolteam}>
                        {toolteam.tools.map((tool) => {
                            return (
                                <Tooltip title={tool.title} key={tool.value}>
                                    <tool.Component className={classes.icon} />
                                </Tooltip>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Toolbar;
