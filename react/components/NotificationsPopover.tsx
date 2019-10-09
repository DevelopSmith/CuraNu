import React from "react";
import { withTranslation, WithTranslation } from 'react-i18next';

interface INotification {
    content: string
}

interface IProps extends WithTranslation{
    notifications: INotification[],
}

export default withTranslation(['translations'], {})((props: IProps) => {
    const { notifications } = props;

    const notificationsHtml = notifications.map((item, index) => {
        return <li key={index} className="row">
            {item.content}
        </li>
    });

    return(
        <div id="notifications">
            <ul className="list">
                {notificationsHtml}
            </ul>
        </div>
    );
});