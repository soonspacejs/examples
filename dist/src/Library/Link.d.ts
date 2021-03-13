import { Line, LineInfo } from './Line';
interface LinkInfo extends LineInfo {
}
declare class Link extends Line {
    constructor(param: LinkInfo);
}
export { Link, LinkInfo };
