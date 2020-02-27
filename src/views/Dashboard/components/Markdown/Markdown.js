import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Divider
} from '@material-ui/core';
import ReactMarkdown from "react-markdown";
import {testMd} from '../../../../markdownResource/md'

const useStyles = makeStyles(() => ({
    root: {},
    chartContainer: {
        // height: 400,
        position: 'relative'
    },
    actions: {
        justifyContent: 'flex-end'
    }
}));

const Markdown = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className, 'markdown-body')}
        >
            <CardHeader
                title="API"
            />
            <Divider/>
            <CardContent>
                <div className={classes.chartContainer}>
                    <ReactMarkdown
                        source={testMd}
                        escapeHtml={false}
                    />
                </div>
            </CardContent>

        </Card>
    );
};

Markdown.propTypes = {
    className: PropTypes.string
};

export default Markdown;
