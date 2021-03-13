interface Floor {
    _attributes: {
        baseFloor: string;
        groupID: string;
        id: string;
        isMain: string;
        name: string;
    };
    BoundingBox: {
        _attributes: {
            maximum: string;
            minimum: string;
        };
    };
    FileSource: {
        _attributes: {
            name: string;
            type: string;
        };
    };
}
interface Entity {
    _attributes: {
        id: string;
        longname: string;
        name: string;
        type: string;
    };
    Entity: {
        _attributes: {
            area: string;
            id: string;
            longname: string;
            name: string;
            posX: string;
            posY: string;
            posZ: string;
            position: string;
            scale: string;
            orient: string;
            type: string;
            visible: string;
        };
    }[];
}
interface FloorSpaceInfo {
    _attributes: {
        baseFloor: string;
        id: string;
        level: string;
        longname: string;
        name: string;
    };
    Space: {
        _attributes: {
            area: string;
            id: string;
            longname: string;
            name: string;
            posX: string;
            posY: string;
            posZ: string;
            type: string;
            visible: string;
        };
    };
}
interface ProjectInfo {
    _attributes: {
        gkxmlVersion: string;
    };
    Title: string;
}
interface Building {
    _attributes: {
        northAxis: string;
        sourceType: string;
    };
    DefaultBuilding: string;
    DefaultFloor: string;
    EarthReferenceSystem: {
        _attributes: {
            type: string;
        };
        Location: {
            altitude: string;
            latitude: string;
            longitude: string;
        };
        Orientation: {
            heading: string;
            roll: string;
            tilt: string;
        };
        altitudeMode: string;
    };
    ExportOptions: {
        Item: {
            _attributes: {
                name: string;
                value: string;
            };
        }[];
    };
    Floors: {
        Floor: Floor | Floor[];
    };
    ObjectHierarchy: {
        Entity: Entity | Entity[];
    };
    SpaceInfo: {
        Floor: FloorSpaceInfo | FloorSpaceInfo[];
    };
    Unit: string;
}
interface SbmXmlJson {
    Project: {
        ProjectInfo: ProjectInfo;
        Building: Building;
    };
}
export { Floor, Entity, FloorSpaceInfo, ProjectInfo, Building, SbmXmlJson };
