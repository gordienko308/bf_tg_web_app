import React from "react";

const header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    }
    
    return(
        <div className={'header'}>
        <button onClick={onClose}>Закрыть</button>
        <span className={'username'}>
            {tg.initDataUsafe?.user?.username}
        </span>

        </div>
    );
};

export default header;