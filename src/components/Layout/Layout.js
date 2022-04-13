import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import * as styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <AppHeader />
      <main className={styles.layout}>{children}</main>
      <AppFooter />
    </>
  );
}
