import React, { useEffect } from 'react';
import {
    LiveboardEmbed,
    AuthType,
    init
} from '@thoughtspot/visual-embed-sdk';

const App = () => {
    useEffect(() => {
        init({
            thoughtSpotHost: "https://team3.thoughtspot.cloud/",
            authType: AuthType.None,
        });

        const embed = new LiveboardEmbed('#ts-embed', {
            frameParams: {
                width: '100%',
                height: '100%',
            },
            liveboardId: "b6bb40a3-57dc-4b46-bfdc-9d76fbb74491",
            //vizId: 'your-viz-GUID',
        });

        embed.render();
    }, []);

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div id="ts-embed"></div>
        </div>
    );
};

export default App;
A
