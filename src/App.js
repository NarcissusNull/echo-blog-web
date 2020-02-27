import React from 'react'
import './App.css'
import 'github-markdown-css/github-markdown.css'
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme'
import Routes from './routes/Routes'
import { HashRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory()

function App() {
    // const cardStyle = cardStyles()
    return (
        <ThemeProvider theme={theme}>
            <HashRouter history={browserHistory}>
                <Routes/>
            </HashRouter>
        </ThemeProvider>
    )
    // return (
    //     <div>
    //         <SearchAppBar/>
    //         <Grid
    //             container
    //             spacing={4}
    //         >
    //             <Grid
    //                 item
    //                 lg={8}
    //                 md={12}
    //                 xl={9}
    //                 xs={12}
    //             >
    //                 <Container>
    //                     <Card container raised={true} className={cardStyle.root}>
    //                         <div className={['markdown-body',]}>
    //                             <ReactMarkdown
    //                                 source={testMd}
    //                                 escapeHtml={false}
    //                             />
    //                         </div>
    //                     </Card>
    //                 </Container>
    //             </Grid>
    //             <Grid
    //                 item
    //                 lg={4}
    //                 md={6}
    //                 xl={3}
    //                 xs={12}
    //             >
    //             </Grid>
    //         </Grid>
    //     </div>
    // );
}

export default App;
