import React, {useRef, useEffect} from "react";

import { Application } from "pixi.js";

export default function PixiMinmimalTest() {
    const ref = useRef(null);

    useEffect(() => {
        const app = new Application({
            width: 800,
            height: 600,
            backgroundColor: 0x5BBA6F,
        });

        ref.current.appendChild(app.view);
        app.start();

        return () => {
            app.destroy(true, true);
        };
    }, [Application, ref]);

    return <div ref={ref} />;
}
