import { Cordinate } from '../../Interface';
export interface NodeData extends Cordinate {
    id: string | number;
    index: number;
}
export declare enum VisitState {
    unvisited = "unvisited",
    visited = "visited",
    visiting = "visiting",
    processing = "processing",
    inpath = "inpath"
}
export interface TwoWaysLink {
    pointA: NodeData;
    pointB: NodeData;
    weight: number;
    visitState: VisitState;
}
export declare class DistanceFromStartSummary {
    node: NodeData;
    shortestDistanceFromStart: number;
    previousNode: NodeData;
    constructor(node: NodeData);
}
export declare function findPath(nodes: NodeData[], links: TwoWaysLink[], startIndex: number, endIndex: number, recording?: Boolean): SearchResult;
export declare class Recording {
    target: NodeData;
    newVisitState: VisitState;
    constructor(target: NodeData, newVisitState: VisitState);
}
export interface SearchResult {
    recordings: Recording[];
    path: NodeData[] | undefined;
}
