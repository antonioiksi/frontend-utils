import React from 'react';
import DownloadLink from 'react-download-link'
import {Button} from "react-bootstrap";

class DownloadJson extends React.Component {
    render() {
        return(
            <div>
                <h1>DownloadJson</h1>
                <DownloadLink
                    filename="myfile.txt"
                    label="Save to disk"
                    exportFile={() => "My cached data"} />
            </div>
        )
    }
}

export default DownloadJson;