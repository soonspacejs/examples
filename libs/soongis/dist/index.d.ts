import { Map, MapOptions, MercatorCoordinate } from 'maplibre-gl';
declare class SoonGIS {
    version: string;
    map: Map;
    MercatorCoordinate: typeof MercatorCoordinate;
    constructor(options: MapOptions);
}
export default SoonGIS;
