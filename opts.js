// these are all options in full.
let edges_options = {
    edges: {
        arrows: {
            to: {
                enabled: true,
                scaleFactor: 0.75,
                type: "arrow"
            },
            middle: { enabled: false },
            from: { enabled: false }
        },
        endPointOffset: {
            from: 0,
            to: 0
        },
        arrowStrikethrough: false,
        chosen: false,
        color: {
            color: '#848484',
            highlight: '#848484',
            hover: '#848484',
            inherit: 'from',
            opacity: 1.0
        },
        dashes: false,
        font: {
            color: '#343434',
            size: 14, // px
            face: 'arial',
            background: 'none',
            strokeWidth: 2, // px
            strokeColor: '#ffffff',
            align: 'horizontal',
            multi: false,
            vadjust: 0,
            bold: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'bold'
            },
            ital: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'italic',
            },
            boldital: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'bold italic'
            },
            mono: {
                color: '#343434',
                size: 15, // px
                face: 'courier new',
                vadjust: 2,
                mod: ''
            }
        },
        hidden: false,
        hoverWidth: 1.5,
        label: undefined,
        labelHighlightBold: true,
        length: undefined,
        physics: true,
        scaling: {
            min: 1,
            max: 15,
            label: {
                enabled: true,
                min: 14,
                max: 30,
                maxVisible: 30,
                drawThreshold: 5
            },
        },
        selectionWidth: 1,
        selfReferenceSize: 20,
        selfReference: {
            size: 20,
            angle: Math.PI / 4,
            renderBehindTheNode: true
        },
        shadow: {
            enabled: false,
            color: 'rgba(0,0,0,0.5)',
            size: 10,
            x: 5,
            y: 5
        },
        smooth: {
            enabled: true,
            type: "horizontal",
            roundness: 0.5
        },
        title: undefined,
        value: undefined,
        width: 1,
        widthConstraint: false
    }
}

let interaction_options = {
    interaction: {
        dragNodes: true,
        dragView: true,
        hideEdgesOnDrag: false,
        hideEdgesOnZoom: false,
        hideNodesOnDrag: false,
        hover: false,
        hoverConnectedEdges: true,
        keyboard: {
            enabled: false,
            speed: { x: 10, y: 10, zoom: 0.02 },
            bindToWindow: true,
            autoFocus: true,
        },
        multiselect: false,
        navigationButtons: false,
        selectable: true,
        selectConnectedEdges: true,
        tooltipDelay: 300,
        zoomSpeed: 1,
        zoomView: true
    }
}

let layout_options = {
    layout: {
        randomSeed: 10,
        improvedLayout: true,
        clusterThreshold: 50,
        hierarchical: {
            enabled: false,
            levelSeparation: 100,
            nodeSpacing: 100,
            treeSpacing: 50,
            blockShifting: true,
            edgeMinimization: true,
            parentCentralization: false,
            direction: 'UD',        // UD, DU, LR, RL
            sortMethod: 'directed', // hubsize, directed
            shakeTowards: 'roots'  // roots, leaves
        }
    }
}

let nodes_options = {
    nodes: {
        borderWidth: 1,
        borderWidthSelected: 2,
        brokenImage: undefined,
        chosen: true,
        color: {
            border: '#2B7CE9',
            background: '#97C2FC',
            highlight: {
                border: '#2B7CE9',
                background: '#D2E5FF'
            },
            hover: {
                border: '#2B7CE9',
                background: '#D2E5FF'
            }
        },
        opacity: 1,
        fixed: {
            x: false,
            y: false
        },
        font: {
            color: '#adbac7',
            size: 17, // px
            face: 'monospace',
            background: 'none',
            strokeWidth: 0, // px
            strokeColor: '#ffffff',
            align: 'center',
            multi: false,
            vadjust: 0,
        },
        group: undefined,
        heightConstraint: false,
        hidden: false,
        icon: {
            face: 'FontAwesome',
            code: undefined,
            weight: undefined,
            size: 50,  //50,
            color: '#2B7CE9'
        },
        image: undefined,
        imagePadding: {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
        },
        label: undefined,
        labelHighlightBold: true,
        level: undefined,
        mass: 1,
        physics: true,
        scaling: {
            min: 10,
            max: 30,
            label: {
                enabled: false,
                min: 14,
                max: 30,
                maxVisible: 30,
                drawThreshold: 5
            },
        },
        shadow: {
            enabled: false,
            color: 'rgba(0,0,0,0.5)',
            size: 10,
            x: 5,
            y: 5
        },
        shape: 'ellipse',
        shapeProperties: {
            borderDashes: false, // only for borders
            borderRadius: 6,     // only for box shape
            interpolation: false,  // only for image and circularImage shapes
            useImageSize: false,  // only for image and circularImage shapes
            useBorderWithImage: false,  // only for image shape
            coordinateOrigin: 'center'  // only for image and circularImage shapes
        },
        size: 25,
        title: undefined,
        value: undefined,
        widthConstraint: false,
        x: undefined,
        y: undefined
    }
}


let physics_options = {
    physics: {
        enabled: true,
        barnesHut: {
            theta: 0.5,
            gravitationalConstant: -2000,
            centralGravity: 0.3,
            springLength: 95,
            springConstant: 0.04,
            damping: 0.09,
            avoidOverlap: 0
        },
        forceAtlas2Based: {
            theta: 0.5,
            gravitationalConstant: -50,
            // gravitationalConstant: -40,
            centralGravity: 0.01,
            springConstant: 0.08,
            springLength: 100,
            damping: 0.4,
            avoidOverlap: 0
        },
        repulsion: {
            centralGravity: 0.2,
            springLength: 200,
            springConstant: 0.05,
            nodeDistance: 100,
            damping: 0.1
        },
        hierarchicalRepulsion: {
            centralGravity: 0.0,
            springLength: 100,
            springConstant: 0.01,
            nodeDistance: 120,
            damping: 0.09,
            avoidOverlap: 0
        },
        maxVelocity: 50,
        minVelocity: 0.1,
        // solver: 'barnesHut',
        // solver: 'repulsion',
        solver: 'forceAtlas2Based',
        stabilization: {
            enabled: true,
            iterations: 1000,
            updateInterval: 100,
            onlyDynamicEdges: false,
            fit: true
        },
        timestep: 0.5,
        adaptiveTimestep: true,
        wind: { x: 0, y: 0 }
    }
}

let manipulation_options = {
    manipulation: {
        enabled: false,
        initiallyActive: false,
        addNode: true,
        addEdge: true,
        editNode: undefined,
        editEdge: true,
        deleteNode: true,
        deleteEdge: true,
        controlNodeStyle: {
            // all node options are valid.
        }
    }
}




let options = {
    ...edges_options,
    ...interaction_options,
    ...layout_options,
    ...nodes_options,
    ...physics_options,
    ...manipulation_options
}


console.log(JSON.stringify(options, null, 2))
