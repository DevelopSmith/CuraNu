import { withTranslation } from 'react-i18next';

export default withTranslation(['translations'], {})(props => {
    const { notifications, t } = props;

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