/** @format */

import ViewHeadlineSharpIcon from '@material-ui/icons/ViewHeadlineSharp';
import LinkSharpIcon from '@material-ui/icons/LinkSharp';
import FormatBoldSharpIcon from '@material-ui/icons/FormatBoldSharp';
import FormatItalicSharpIcon from '@material-ui/icons/FormatItalicSharp';
import FormatUnderlinedSharpIcon from '@material-ui/icons/FormatUnderlinedSharp';
import StrikethroughSSharpIcon from '@material-ui/icons/StrikethroughSSharp';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import FormatListNumberedSharpIcon from '@material-ui/icons/FormatListNumberedSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import InsertPhotoSharpIcon from '@material-ui/icons/InsertPhotoSharp';
import FormatQuoteSharpIcon from '@material-ui/icons/FormatQuoteSharp';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import TableChartSharpIcon from '@material-ui/icons/TableChartSharp';

import { ToolTeam } from './model';

const tools: ToolTeam[] = [
    {
        name: '文字',
        tools: [
            {
                value: 'header',
                title: '标题',
                Component: ViewHeadlineSharpIcon,
            },
            {
                value: 'bold',
                title: '加粗',
                Component: FormatBoldSharpIcon,
            },
            {
                value: 'italic',
                title: '斜体',
                Component: FormatItalicSharpIcon,
            },
            {
                value: 'underline',
                title: '下划线',
                Component: FormatUnderlinedSharpIcon,
            },
            {
                value: 'strikethrough',
                title: '删除线',
                Component: StrikethroughSSharpIcon,
            },
        ],
    },
    {
        name: '排版',
        tools: [
            {
                value: 'unorderedlist',
                title: '无序列表',
                Component: FormatListBulletedSharpIcon,
            },
            {
                value: 'orderedlist',
                title: '有序列表',
                Component: FormatListNumberedSharpIcon,
            },
            {
                value: 'tasklist',
                title: '任务列表',
                Component: AssignmentTurnedInSharpIcon,
            },
        ],
    },
    {
        name: '资源',
        tools: [
            {
                value: 'link',
                title: '插入链接',
                Component: LinkSharpIcon,
            },
            {
                value: 'insertphoto',
                title: '插入图片',
                Component: InsertPhotoSharpIcon,
            },
            {
                value: 'quote',
                title: '插入引用',
                Component: FormatQuoteSharpIcon,
            },
            {
                value: 'linkcode',
                title: '插入代码块',
                Component: CodeSharpIcon,
            },
            {
                value: 'table',
                title: '插入表格',
                Component: TableChartSharpIcon,
            },
        ],
    },
];

export default tools;
