import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {useStyles} from "./AtmmTreeStyles";
import AtmmTreeItem from "./AtmmTreeItem";
import c from "./AtmmTreeItem.module.css"

const AtmmTreeView = () => {
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
                <AtmmTreeItem className={c.atmmUpdate}
                    nodeId="6" labelText="Updates" labelIcon={InfoIcon} labelInfo="2,294"

                />
                <AtmmTreeItem className={c.atmmTree}
                    nodeId="7"
                    labelText="Forums"
                    labelIcon={ForumIcon}
                    labelInfo="3,566"
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

export default AtmmTreeView;