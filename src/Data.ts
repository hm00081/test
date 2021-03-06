// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
// import 'normalize.css';
import './styles.css';
import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import { LinkColor, SankeyData } from './types/sankey';
import { SankeyLink, SankeyStatus, SankeyLinkExtended } from '../src/types';

// Data
import { PaperNode } from './data/PaperNode';
import { Node, Papers, Status } from './data/AllPaperData';
import { AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, OriginRepBs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys } from './data/AllPaperData';

// import { CAA20 as rawData } from './data/CAA20';
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { nodeModuleNameResolver } from 'typescript';
import { NONAME } from 'dns';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// console.log(Status.length);
//@ts-ignore
const LinkData = [AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys];
const basicData: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[0],

    //@ts-ignore
    status: Status[0],

    positionStatus: 'init',
};

const targetaa: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[1],
    //@ts-ignore
    status: Status[1],

    positionStatus: 'init',
};

const targetab = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[2],
    //@ts-ignore
    status: Status[2],
};

const targetba = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[3],
    //@ts-ignore
    status: Status[3],
};

const targetbb = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[4],
    //@ts-ignore
    status: Status[4],
};

const targetca = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[5],
    //@ts-ignore
    status: Status[5],
};

const repa = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepAs)) {
            color = 'blueLinkColor';
            // console.log('blue');
        } else {
            color = 'grayLinkColor';
            // console.log('gray');
        }
        return { ...link, color };
        // ?????? ??? link?????? ????????? ??? ?????? id ????????? ????????? ?????? ?????? ?????? (?????? ?????? value??? ?????? ????????? ???????????? ??????..)
        // ??? link?????? id??? ????????? ?????? ?????? ?????? value??? ????????? link??? ???????????? ????????????
        //??? link????????? ?????? id??? ????????? link?????? ????????? ?????? ????????? ??? ??????.
        // ????????? ?????? ?????? ?????? ??????.
        // ????????? ??? ?????? ???????????? ??????????????? ??????.
        // dict??? ????????? ???????????? ???????????????.
        function hasLinkInGroup(wantedLink: SankeyLink, linkGroup: SankeyLink[]) {
            let hasLink: boolean = false;

            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.valueid === 'repa') {
                    hasLink = true;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],
};

const repb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),

    links: RepBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepBs)) {
            color = 'blueLinkColor'; // ?????????
        } else {
            color = 'grayLinkColor'; // ??????
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        // ?????? ??? link?????? ????????? ??? ?????? id ????????? ????????? ?????? ?????? ?????? (?????? ?????? value??? ?????? ????????? ???????????? ??????..)
        // ??? link?????? id??? ????????? ?????? ?????? ?????? value??? ????????? link??? ???????????? ????????????
        //??? link????????? ?????? id??? ????????? link?????? ????????? ?????? ????????? ??? ??????.
        // ????????? ?????? ?????? ?????? ??????.
        // ????????? ??? ?????? ???????????? ??????????????? ??????.
        // dict??? ????????? ???????????? ???????????????.
        // AllPaperData??? CalcSankey??? ???????????? ??????. ?????? ?????????.....
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                    hasLink = true;
                } else hasLink = false;
            }

            return hasLink;
        }
    }),

    //@ts-ignore
    status: Status[7],

    positionStatus: 'init',
};

const repc = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[8],
    //@ts-ignore
    status: Status[8],
};

const repd = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[9],
    //@ts-ignore
    status: Status[9],
};

const repea = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepEAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepEAs)) {
            color = 'blueLinkColor';
            // console.log('blue');
        } else {
            color = 'grayLinkColor';
            // console.log('gray');
        }
        return { ...link, color };

        function hasLinkInGroup(wantedLink: SankeyLink, linkGroup: SankeyLink[]) {
            let hasLink: boolean = false;

            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.valueid === 'repea') {
                    hasLink = true;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[10],
};

const repeb = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[11],
    //@ts-ignore
    status: Status[11],
};

const repf = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[12],
    //@ts-ignore
    status: Status[12],
};

const empty = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[13],
    //@ts-ignore
    status: Status[13],
};

export { basicData, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty };
