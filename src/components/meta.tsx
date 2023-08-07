import React from 'react'
import {Helmet} from 'react-helmet'

class Meta extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <meta Content-Security-Policy-Report-Only = {
                        'script-src https://accounts.google.com/gsi/client;' +
                        ' frame-src https://accounts.google.com/gsi; ' +
                        'connect-src https://accounts.google.com/gsi'
                    }
                    />
                    <title>GameMate</title>
                    <link rel="canonical" href="https://mysite.com/example"/>
                </Helmet>
            </div>
        )
    }
}

export default Meta


const meta = {
    title: 'My Awesome Blog',
    description: 'This is my awesome blog',
    canonical: 'https://example.com',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        },
        ContentSecurityPolicyReportOnly: {
            'script-src': 'https://accounts.google.com/gsi/client',
            'frame-src': 'https://accounts.google.com/gsi',
            'connect-src': 'https://accounts.google.com/gsi'
        }
    }
}