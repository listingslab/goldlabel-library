import * as React from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { useLibraryDispatch } from '../AppState';
// import { Icon } from '../Design';

export default function PermaNav() {
  const dispatch = useLibraryDispatch();

  const onItemClick = (path: string) => {
    // dispatch(navigateTo(path, '_self'));
  };

  return (
    <>
      <List>
        <ListItemButton
          onClick={() => {
            onItemClick('/');
          }}
        >
          {/* <ListItemIcon>
            <Icon icon="home" color="primary" />
          </ListItemIcon> */}
          <ListItemText primary="Home" />
        </ListItemButton>

      </List>
    </>
  );
}
