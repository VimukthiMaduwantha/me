import React from 'react'

const styles = {
    footer: {
        textAlign: "center",
        bottom: 0,
        width: "100%",
    },
};

function Footer() {
    return (
        <footer style={styles.footer}>
            <p style={{ color: 'white', opacity: '0.5', fontFamily: 'Space Grotesk, serif', }}>&copy; {new Date().getFullYear()}<i>Vimukthi Maduwantha.</i> All rights reserved.</p>
        </footer>
    )
}

export default Footer