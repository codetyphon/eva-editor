const nodes: any[] = [
    {
        id: 'game',
        type: "Game",
        data: { label: 'Game' },
        position: { x: 600, y: 300 },
    },
    {
        id: 'default_scene',
        type: "Scene",
        data: { label: 'default' },
        position: { x: 450, y: 350 },
    },
    {
        id: 'config',
        type: "Config",
        data: {
            label: 'Config',
            fields: [
                {
                    name: "PhysicsSystem",
                    title: "PhysicsSystem",
                    component: "Checkbox",
                    dataSource: [
                        {
                            label: '选项1',
                            value: 1,
                        },
                        {
                            label: '选项2',
                            value: 2,
                        },
                    ],
                    value: "1"
                }
            ]
        },
        position: { x: 450, y: 250 },
    },
    {
        id: 'background_gameobject',
        type: "GameObject",
        data: {
            label: 'background',
            fields: [
                {
                    name: "name",
                    title: "name",
                    component: "Input",
                    value: "background"
                }
            ]
        },
        position: { x: 250, y: 200 },
    },
    {
        id: 'player_gameobject',
        type: "GameObject",
        data: {
            label: 'player',
            fields: [
                {
                    name: "name",
                    title: "name",
                    component: "Input",
                    value: "player"
                }
            ]
        },
        position: { x: 250, y: 400 },
    },
    {
        id: 'background_component',
        type: "Graphics",
        data: {
            label: 'background',
            fields: [
                {
                    name: "name",
                    title: "name",
                    component: "Input",
                    value: "background"
                },
                {
                    name: "color",
                    title: "color",
                    component: "Color"
                }
            ]
        },
        position: { x: 50, y: 100 },
    },
    {
        id: 'Transform_for_bg',
        type: "Transform",
        data: {
            label: 'Transform',
            fields: [
                {
                    name: 'name',
                    title: 'name',
                    value: 'Transform',
                    component: "Input"
                },
                {
                    name: 'x',
                    title: 'x',
                    value: 0,
                    component: "InputNumber"
                },
                {
                    name: 'y',
                    title: 'y',
                    value: 0,
                    component: "InputNumber"
                },
                {
                    name: "width",
                    title: "width",
                    component: "InputNumber",
                    value: 276
                },
                {
                    name: "height",
                    title: "height",
                    component: "InputNumber",
                    value: 478
                }
            ]
        },
        position: { x: 50, y: 200 },
    },
    {
        id: 'Transform_for_player',
        type: "Transform",
        data: {
            label: 'Transform',
            fields: [
                {
                    name: 'x',
                    title: 'x',
                    value: 100,
                    component: "InputNumber"
                },
                {
                    name: 'y',
                    title: 'y',
                    value: 100,
                    component: "InputNumber"
                },
                {
                    name: "width",
                    title: "width",
                    component: "InputNumber",
                    value: 100
                },
                {
                    name: "height",
                    title: "height",
                    component: "InputNumber",
                    value: 100
                }
            ]
        },
        position: { x: 50, y: 450 },
    },
    {
        id: 'image',
        type: "Image",
        data: {
            label: 'Image',
            fields: [
                {
                    name: 'name',
                    title: 'name',
                    value: 'image',
                    component: "Input"
                },
                {
                    name: 'src',
                    title: 'src',
                    value: '/chrome-100.png',
                    component: "Input"
                }
            ]
        },
        position: { x: 50, y: 350 },
    },
    // link edge
    { id: 'e1', source: 'config', target: 'game' },
    { id: 'e2', source: 'default_scene', target: 'game' },
    { id: 'e3', source: 'background_gameobject', target: "default_scene" },
    { id: 'e4', source: "background_component", target: "background_gameobject" },
    { id: 'e5', source: "player_gameobject", target: "default_scene" },
    { id: 'e6', source: "Transform_for_player", target: "player_gameobject" },
    { id: 'e7', source: "image", target: "player_gameobject" },
    { id: 'e8', source: "Transform_for_bg", target: "background_gameobject" },
    
]

export default nodes