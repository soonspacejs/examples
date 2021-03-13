interface State {
    State: {
        _attributes: {
            "gml:id": string;
            serialid: string;
        };
        topoNode: {
            "gml:Node": {
                _attributes: {
                    "gml:id": string;
                    serialid: string;
                };
                "gml:pointProperty": {
                    "gml:Point": {
                        "gml:Pos": string;
                    };
                };
                floor: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                floor_name: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                node_name: string;
                type: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                xcoord: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                ycoord: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                zcoord: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                link_cnt: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                adjacency_link: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
            };
        };
    };
}
interface Transition {
    Transition: {
        _attributes: {
            "gml:id": string;
            serialid: string;
        };
        topoEdge: {
            "gml:Edge": {
                "gml:directedNode": {
                    _attributes: {
                        "xlink:href": string;
                    };
                }[];
                "gml:curveProperty": {
                    "gml:LineString": {
                        "gml:posList": string;
                    };
                };
                link_name: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                snode: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                enode: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                length: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                type: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                move_type: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                passable: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                restrict: {
                    _attributes: {
                        type: string;
                    };
                    '#text': string;
                };
                Width: {
                    _attributes: {
                        type: string;
                    };
                };
            };
        };
    };
}
interface X_floor {
    _attributes: {
        id: string;
        number: string;
        level: string;
        displayname: string;
        index: string;
        lefttop: string;
        rightbottom: string;
    };
    state: State[];
    transition: Transition[];
}
interface GmlJson {
    MultiLayeredGraph: {
        _attributes: {
            version: string;
            xmlns: string;
            "xmlns:gml": string;
            "xmlns:xlink": string;
            "xmlns:xsi": string;
            "xsi:schemaLocation": string;
        };
        X_definition: {
            zcoord: {
                apply_floorheight: string;
            };
            restrict: {
                restrict_bit: string;
            };
        };
        SpaceLayerMember: {
            SpaceLayer: {
                _attributes: {
                    northbound: string;
                };
                class: string;
                "gml:name": string;
                X_floor: X_floor[];
            };
        };
    };
}
export { State, Transition, X_floor, GmlJson };
