import { SankeyData } from '../types/sankey';

const GYS14: SankeyData = {
    nodes: [],

    links: [
        {
            source: 146,
            target: 7,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 146,
            target: 11,
            value: 4,
            valueid: 'repb',
        },
        {
            source: 146,
            target: 16,
            value: 3,
            valueid: 'repb',
        },
        {
            source: 146,
            target: 23,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 7,
            target: 39,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 11,
            target: 47,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 18,
            target: 45,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 18,
            target: 47,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 39,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 45,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 47,
            target: 54,
            value: 3,
            valueid: 'repb',
        },
        {
            source: 47,
            target: 70,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 76,
            value: 4,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 77,
            value: 4,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 78,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 80,
            value: 4,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 92,
            value: 4,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 92,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 70,
            target: 98,
            value: 3,
            valueid: 'repb',
        },
    ],
    status: [
        {
            status: 'repb',
        },
    ],
};

GYS14.links.map((link, index) => {
    link.paperName = 'GYS14';
    link.id = `GYS14-${index}`;
});

export { GYS14 };
