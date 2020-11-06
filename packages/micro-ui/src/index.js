import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MicroUi from './MicroUi';

let parcel = {};

if (process.env.autoMount) {
    ReactDOM.render(
        <MicroUi />,
        document.getElementById('micro-ui')
    );
} else {
    parcel = {
        mount: () => {
            ReactDOM.render(
                <MicroUi />,
                document.getElementById('micro-ui')
            );
        },
        unmount() {
            const node = document.getElementById("micro-ui");
            ReactDOM.unmountComponentAtNode(node);
        }
    }
}



export default parcel;
