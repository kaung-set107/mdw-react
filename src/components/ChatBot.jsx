import React, { Component } from 'react'

export class ChatBot extends Component {

    componentDidMount() {

        (function(d, m){
            var kommunicateSettings = 
                {"appId":"df4bd6c93a0e1b77f1870413a988aaa","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    
    }

    render() {
        return (
            <div></div>
        )
    }

}

// <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/f8fc5ea7-ae0f-4b9d-b803-fc583222da58"></iframe>