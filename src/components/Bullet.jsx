import React from 'react';

function BlinkingBullet() {
    return (
        <>
            <style>
                {`
                .blinking-bullet {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    background-color: #ff0000;
                    border-radius: 50%;
                    animation: blink 1s infinite;
                    margin-right: 8px;
                }

                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                `}
            </style>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="blinking-bullet"></span>
                <span>Live status</span>
            </div>
        </>
    );
}

export default BlinkingBullet;
