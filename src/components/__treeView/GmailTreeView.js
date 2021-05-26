import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AtmmTreeStyles, {useStyles} from "../AtmmTree/AtmmTreeStyles";
import AtmmTreeItem from "../AtmmTree/AtmmTreeItem";

// const useTreeItemStyles = makeStyles((theme) => ({
//     root: {
//         color: theme.palette.text.secondary,
//         '&:hover > $content': {
//             backgroundColor: theme.palette.action.hover,
//         },
//         '&:focus > $content, &$selected > $content': {
//             backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
//             color: 'var(--tree-view-color)',
//         },
//         '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
//             backgroundColor: 'transparent',
//         },
//     },
//     content: {
//         color: theme.palette.text.secondary,
//         borderTopRightRadius: theme.spacing(2),
//         borderBottomRightRadius: theme.spacing(2),
//         paddingRight: theme.spacing(1),
//         fontWeight: theme.typography.fontWeightMedium,
//         '$expanded > &': {
//             fontWeight: theme.typography.fontWeightRegular,
//         },
//     },
//     group: {
//         marginLeft: 0,
//         '& $content': {
//             paddingLeft: theme.spacing(2),
//         },
//     },
//     expanded: {},
//     selected: {},
//     label: {
//         fontWeight: 'inherit',
//         color: 'inherit',
//     },
//     labelRoot: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0.5, 0),
//     },
//     labelIcon: {
//         marginRight: theme.spacing(1),
//     },
//     labelText: {
//         fontWeight: 'inherit',
//         flexGrow: 1,
//     },
// }));

// function StyledTreeItem(props) {
//     const classes = AtmmTreeStyles();
//     const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
//
//     return (
//         <TreeItem
//             label={
//                 <div className={classes.labelRoot}>
//                     <LabelIcon color="inherit" className={classes.labelIcon} />
//                     <Typography variant="body2" className={classes.labelText}>
//                         {labelText}
//                     </Typography>
//                     <Typography variant="caption" color="inherit">
//                         {labelInfo}
//                     </Typography>
//                 </div>
//             }
//             style={{
//                 '--tree-view-color': color,
//                 '--tree-view-bg-color': bgColor,
//             }}
//             classes={{
//                 root: classes.root,
//                 content: classes.content,
//                 expanded: classes.expanded,
//                 selected: classes.selected,
//                 group: classes.group,
//                 label: classes.label,
//             }}
//             {...other}
//         />
//     );
// }
//
// StyledTreeItem.propTypes = {
//     bgColor: PropTypes.string,
//     color: PropTypes.string,
//     labelIcon: PropTypes.elementType.isRequired,
//     labelInfo: PropTypes.string,
//     labelText: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles({
//     root: {
//         height: 264,
//         flexGrow: 1,
//         maxWidth: 400,
//     },
// });

export default function GmailTreeView() {
    const classes = useStyles();

    return (
        <TreeView
            className={classes.root}
            defaultExpanded={['3']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
        >
            <AtmmTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />

            <AtmmTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
                <AtmmTreeItem nodeId="9" labelText="SubCategories" labelIcon={Label}>
                    <AtmmTreeItem nodeId="5"  labelText="Social" labelIcon={SupervisorAccountIcon} labelInfo="90"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                    />
                </AtmmTreeItem>
                <AtmmTreeItem nodeId="10" labelText="SubCategories2" labelIcon={Label}>
                    <AtmmTreeItem nodeId="5"  labelText="Social" labelIcon={SupervisorAccountIcon} labelInfo="90"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                    />
                </AtmmTreeItem>
                <AtmmTreeItem nodeId="5"  labelText="Social" labelIcon={SupervisorAccountIcon} labelInfo="90"
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                />
                <AtmmTreeItem nodeId="6" labelText="Updates" labelIcon={InfoIcon} labelInfo="2,294"
                    color="#e3742f"
                    bgColor="#fcefe3"
                />
                <AtmmTreeItem
                    nodeId="7"
                    labelText="Forums"
                    labelIcon={ForumIcon}
                    labelInfo="3,566"
                    color="#a250f5"
                    bgColor="#f3e8fd"
                />
                <AtmmTreeItem
                    nodeId="8"
                    labelText="Promotions"
                    labelIcon={LocalOfferIcon}
                    labelInfo="733"
                    color="#3c8039"
                    bgColor="#e6f4ea"
                />
            </AtmmTreeItem>
            <AtmmTreeItem nodeId="4" labelText="History" labelIcon={Label} />
            <AtmmTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
        </TreeView>
    );
}