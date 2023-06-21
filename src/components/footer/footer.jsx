import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright_container}>
      <span className={styles.copyright}>© 2023</span><span className={styles.brand}>Simple Reports</span>
      </div>
    </footer>
  )
}

export default Footer
