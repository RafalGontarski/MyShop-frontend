import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CategoryNavbar = () => {
    return (
        <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
                <ListItemText primary="Kategoria 1" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Kategoria 2" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Kategoria 3" />
            </ListItem>
        </List>
    );
}

export default CategoryNavbar;
