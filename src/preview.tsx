import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Graphics, GraphicsSystem } from '@eva/plugin-renderer-graphics'
import { Img, ImgSystem } from '@eva/plugin-renderer-img'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Preview = ({ confs }: any) => {

    const canvasRef = useRef(null)

    const [bgcolor, setBgColor] = useState("0xde3249")
    const [postion, setPostion] = useState({
        x: 100,
        y: 100
    })
    const [size, setSize] = useState({
        width: 100,
        height: 100
    })

    const [imageRes, setImageRes] = useState({
        name: uuidv4(),
        src: "/chrome-100.png"
    })

    useEffect(() => {
        confs.forEach((conf: any) => {
            console.log(conf)
            const { id, type, kv }: any = conf
            if (id === "background_component") {
                const c = kv['color'].replace('#', '0x')
                setBgColor(c)
            }
            if (id === "Transform_for_player") {
                setPostion({
                    x: kv.x,
                    y: kv.y
                })
                setSize({
                    width: kv.width,
                    height: kv.height
                })
            }
            if (id === "image") {
                console.log('set src', kv.src)
                setImageRes({
                    name: uuidv4(),
                    src: kv.src
                })
            }
        });
    }, [confs])

    resource.addResource([
        {
            name: imageRes.name,
            type: RESOURCE_TYPE.IMAGE,
            src: {
                image: {
                    type: 'png',
                    url: imageRes.src
                }
            },
            preload: true
        }
    ])

    const rendererSystem = new RendererSystem({
        canvas: canvasRef.current,//document.querySelector('#canvas'), // Optional, automatically generated canvas hanging on game.canvas
        width: 276,
        height: 478,
        transparent: false,
        resolution: window.devicePixelRatio / 2, // Optional, if it is 2 times the image design, it can be divided by 2
        enableScroll: true, // Enable page scrolling
        renderType: 0 // 0: automatic judgment, 1: WebGL, 2: Canvas, it is recommended to use Canvas below android6.1 ios9, business judgment is required.
    })

    const game = new Game({
        frameRate: 60, // Optional, game frame rate, default 60
        autoStart: true, // optional, start automatically
        systems: [
            rendererSystem,
            new GraphicsSystem(),
            new ImgSystem()
        ]
    })

    const bg = new GameObject('bg', {
        position: {
            x: 0,
            y: 0
        },
        origin: {
            x: 0.5,
            y: 0.5
        }
    })

    const g = bg.addComponent(new Graphics())
    g.graphics.beginFill(bgcolor, 1)
    g.graphics.drawRect(0, 0, 276, 478, 12)
    g.graphics.endFill()
    game.scene.addChild(bg)


    const image = new GameObject('chrome', {
        size: size,
        origin: { x: 0.5, y: 0.5 },
        position: postion,
        scale: {
            x: 0.5,
            y: 0.5
        }
    })

    // 为 game object 添加 Image Component
    image.addComponent(
        new Img({
            resource: imageRes.name
        })
    )
    game.scene.addChild(image)

    return (
        <div className="preview">
            <img className="iphone" src="iphone.png" width="300" alt="" />
            {/* <div className="previewCanvas"></div> */}
            <canvas id="canvas" ref={canvasRef} className="previewCanvas"></canvas>
        </div>
    )
}
export default Preview