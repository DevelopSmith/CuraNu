import React from 'react';
import { connect } from "react-redux";
import { withTranslation, WithTranslation } from 'react-i18next';

// @ts-ignore
import Widget from './Widget.tsx';
// @ts-ignore
import Microblog from './Microblog.tsx';
// @ts-ignore
import history from '../helpers/history.ts';

import {searchInTelephoneBook} from '../actions/widgetsActions.ts';

interface IEvent {
    title: string,
    date: Date
};

interface IBlog {
    title: string,
    date: Date,
    author: string,
    avatar: string,
    comments: number,
    likes: number
};

interface IProps extends WithTranslation{
    items?: any[],
    blog?: IBlog,
    collapse: Function,
    collapsed: Boolean,
    hide: Function,
}

export const Events = withTranslation(['translations'], {})((props: IProps) => {
    const { items, collapse, collapsed, hide, t } = props;

    const eventsHtml = !items ? <div /> : items.map((item: IEvent, index: number) => {
        return <li key={index} className="row">
            <div className="col-4">
                <span className="item-date">{item.date}</span>
            </div>
            <div className="col-8">{item.title}</div>
        </li>
    });

	return(
        <Widget
            widgetTitle={t('events')}
            footerText={t('more_events')}
            footerIcon="/images/arrow-right.svg"
            footerAction={() => history.push('/events')}
            headerIcon="/images/calendar.svg"
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <ul className="list">
                {eventsHtml}
            </ul>
        </Widget>
    );
});

export const News = withTranslation(['translations'], {})((props: IProps) => {
    const { items, collapse, collapsed, hide, t } = props;

    const newsHtml = !items ? <div /> : items.map((item, index) => {
        return <li key={index} className="row">
            <div className="col-3">
                <img src={item.thumb} />
            </div>
            <div className="col-9">
                <div>
                    <div className="item-date pull-left">{item.date}</div>
                    <span className="pull-right likes-comments-count">{item.likes || 0}</span>
                    <img className="pull-right" src="/images/like.svg" />
                    <div className="clearfix"></div>
                </div>

                <h4 className="item-title">{item.title}</h4>
            </div>
        </li>
    });

    return(
        <Widget
            widgetTitle={t('news')}
            footerText={t('more_news')}
            footerIcon="/images/arrow-right.svg"
            headerIcon="/images/newspaper.svg"
            footerAction={() => history.push('/news')}
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <ul className="list">
                {newsHtml}
            </ul>
        </Widget>
    );
})

export const AddWidget = withTranslation(['translations'], {})((props: IProps) => {
    const { t } = props;

	return(<Widget
        footerText={t('add_widget')}
        footerIcon="/images/add.svg"
    />);
})

// Second Column
export const DirectLinks = withTranslation(['translations'], {})((props: IProps) => {
    const { items, collapse, collapsed, hide, t } = props;

    const directLinksHtml = !items ? <div /> : items.map((item, index) => {
        return <li key={index} className="row">
            <div className="col-5 has-centered-img">
                <img className="img-center" src={item.logo} />
            </div>
            <div className="col-7">
                <h4 className="item-title">{item.title}</h4>
            </div>
        </li>
    });

    return(
        <Widget
            widgetTitle={t('directly_to')}
            headerIcon="/images/external-link.svg"
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <ul className="list">
                {directLinksHtml}
            </ul>
        </Widget>
    );
});

export const Blogs = withTranslation(['translations'], {})((props: IProps) => {
    const { blog, collapse, collapsed, hide, t } = props;

    const blogObj = blog || {
        avatar: '',
        author: '',
        date: new Date(),
        likes: 0,
        comments: 0
    };

	return(
        <Widget
            widgetTitle={t('blogs')}
            headerIcon="/images/pen.svg"
            footerText={t('more_blogs')}
            footerIcon="/images/arrow-right.svg"
            footerAction={() => history.push('/blog')}
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <div className="row post-meta">
                <div className="col-3">
                    <img src={blogObj.avatar} />
                </div>
                <div className="col-6">
                    <span className="title pull-left">{blogObj.author}</span>
                    <br />
                    <span className="date">{blogObj.date}</span>
                </div>
                <div className="col-3" style={{textAlign: 'right'}}>
                    <img src="/images/like.svg" style={{height: 15, verticalAlign: 'middle'}} />
                    <span className="likes-comments-count">{blogObj.likes || 0}</span>
                    <img src="/images/comment.svg" style={{marginLeft: 8, verticalAlign: 'middle'}} />
                    <span className="likes-comments-count">{blogObj.comments || 0}</span>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="text">
                <strong>SamenLeving</strong>
                <br />
                Het hebben van een partner die positief in het leven staat, is mogelijk goed voor de...
            </div>
        </Widget>
    );
});

export const QualityManual = withTranslation(['translations'], {})((props: IProps) => {
    const { items, collapse, collapsed, hide, t } = props;

    const qualityManualHtml = !items ? <div /> : items.map((item, index) => {
        return <li key={index} className="row">
            <span>{item.title}</span>
            <br />
            <span className="item-date italic">{t('updated')} / {item.date}</span>
        </li>
    });

	return(
        <Widget
            widgetTitle={t('quality_manual')}
            footerText={t('to_quality_manual')}
            footerIcon="/images/arrow-right.svg"
            headerIcon="/images/bars.svg"
            footerAction={() => history.push('/quality-manual')}
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <ul className="list">
                {qualityManualHtml}
            </ul>
        </Widget>
    );
});

export const Polls = withTranslation(['translations'], {})((props: IProps) => {
    const { collapse, collapsed, hide, t } = props;

	return(
        <Widget
            widgetTitle={t('polls')}
            headerIcon="/images/bars.svg"
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <div className="text">{t('polls_are_available')}</div>
        </Widget>
    );
});

export const MyLinks = withTranslation(['translations'], {})((props: IProps) => {
    const { items, collapse, collapsed, hide, t } = props;

    const myLinksHtml = !items ? <div /> : items.map((item, index) => <li key={index}><a href={item.url}>{item.title}</a></li>)

	return(
        <Widget
            widgetTitle={t('my_links')}
            headerIcon="/images/external-link.svg"
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <ul className="list">
                {myLinksHtml}
            </ul>
        </Widget>
    );
});

// Third Column
class TelephoneBookClass extends React.Component<any> {
    state = {
        searchWord: '',
        shake: false
    }

    shake = () => {
        this.setState({ shake: true });

        setTimeout(() => {
            this.setState({ shake: false }); 
        }, 1500);
    }

    searchTelephoneBook = () => {
        if(this.state.searchWord != ''){
            // do the search
            this.props.searchInTelephoneBook(this.state.searchWord);
        }else{
            this.shake();
        }
    }

    updateTelephoneBookSearch = (e: any) => {
        this.setState({ searchWord: e.target.value })
    }

	render(){
        const { t } = this.props;
        const { searchWord, shake } = this.state;

        return(<div className="telephone-book">
            <h2 className="title uppercase">{t('telephone_book')}</h2>
            <h4 className="sub-title">{t('telephone_book_subtitle')}</h4>

            <div className={shake ? 'search-box shake' : 'search-box'}>
                <input type="search" placeholder={t('search')} value={searchWord} onChange={ e => this.updateTelephoneBookSearch(e)} />
                <div className="search-button" onClick={this.searchTelephoneBook}>
                    <img src="/images/zoeken.svg" className="img-center" alt={t('search')}/>
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = (state: any) => {
    return {
        widgetsRdcr: state.widgetsReducer,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        searchInTelephoneBook: (searchWord: string) => dispatch(searchInTelephoneBook(searchWord)),
    };
};

export const TelephoneBook = withTranslation(['translations'], {})(connect(mapStateToProps, mapDispatchToProps)(TelephoneBookClass));

export const MicroblogWidget = withTranslation(['translations'], {})((props: IProps) => {
    const { collapse, collapsed, hide, t } = props;

	return(
        <Widget
            widgetTitle={t('microblog')}
            headerIcon="/images/pen.svg"
            footerText={t('show_more')}
            footerIcon="/images/arrow-right.svg"
            footerAction={() => history.push('/blog')}
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <Microblog />
        </Widget>
    );
});

export const Groups = withTranslation(['translations'], {})((props: IProps) => {
    const { items, collapse, collapsed, hide, t } = props;

    const groupsHtml = !items ? <div /> : items.map((item, index) => {
        return <li key={index} className="row">
            <div className="col-3 has-centered-img">
                <img className="img-center" src={item.logo} />
            </div>
            <div className="col-9">
                <h4 className="item-title">{item.title}</h4>
            </div>
        </li>
    });

    return(
        <Widget
            widgetTitle={t('my_groups')}
            headerIcon="/images/groups.svg"
            footerText={t('more_groups')}
            footerIcon="/images/arrow-right.svg"
            footerAction={() => history.push('/groups')}
            collapse={collapse}
            collapsed={collapsed}
            hide={hide}
        >
            <ul className="list">
                {groupsHtml}
            </ul>
        </Widget>
    );
});