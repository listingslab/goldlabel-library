import * as React from 'react';
import { useLibrarySelect, selectUser } from '../AppState';
import { Mobile, Desktop } from './';

export type LayoutProps = {
  type?: 'default' | 'special';
  children?: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  /*
    Layout passes children to the selected template. 
    Either Desktop or Mobile, depending on ViewWidth
    View widths > 800px show Desktop, anything smaller is Mobile
  */
  let isMobile = true;
  const { children, type } = props;
  const user = useLibrarySelect(selectUser);

  if (!isMobile) {
    return <Desktop>{children}</Desktop>;
  }

  return <Mobile>{children}</Mobile>;
}
