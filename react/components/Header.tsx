import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Popover from 'react-popover';
import {SkyLightStateless} from 'react-skylight';

// @ts-ignore
import NotificationsPopover from './NotificationsPopover.tsx';
import {loadUserDetails} from '../actions/userActions.ts';
import {searchInTelephoneBook} from '../actions/widgetsActions.ts';

interface IState {
	showNotificationsPopover: Boolean,
	showSettingsModal: Boolean,
	language: string,
	searchWord: string,
	shake: Boolean
}

class Header extends Component<any, IState> {
    state = {
        showNotificationsPopover: false,
		showSettingsModal: false,
		language: 'nl',
        searchWord: '',
        shake: false,
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

	toggleNotificationsPopover = (status: Boolean) => this.setState({ showNotificationsPopover: status });
	toggleSettingsModal = (status: Boolean) => this.setState({ showSettingsModal: status });

    changeLanguage = (language: string) => {
		this.setState({ language });
		this.props.i18n.changeLanguage(language);
    }
    
    componentDidMount(){
        this.props.loadUserDetails();
    }

    render(){
		const {t} = this.props;
		const {showNotificationsPopover, showSettingsModal, language, searchWord, shake} = this.state;
		const {notifications} = this.props.userRdcr;

        const popoverProps = {
            isOpen: showNotificationsPopover,
            place: 'below',
			onOuterAction: () => this.toggleNotificationsPopover(false),
			body: <NotificationsPopover notifications={notifications || []} />,
		}

		const dialogStyles = {
			height: 220,
			minHeight: 'auto',
			color: '#657189',
		};

        return(<section>
			<SkyLightStateless
				dialogStyles={dialogStyles}
				isVisible={showSettingsModal}
				onCloseClicked={() => {this.toggleSettingsModal(false)}}
				title={t('settings')}
			>
				<strong style={{marginRight: 20, fontSize: 14}}>{t('change_language')}</strong>
				<select defaultValue={language} onChange={e => this.changeLanguage(e.target.value)}>
					<option value="en">{t('english')}</option>
					<option value="fr">{t('french')}</option>
					<option value="nl">{t('dutch')}</option>
				</select>
			</SkyLightStateless>  

			{/* Top Menu */}
			<div id="top-menu-section" className="container">
				<ul id="top-menu">
					<li>
						<Link className="menu-item" to="groups">{t('groups')}</Link>
					</li>
					<li>
						<Link className="menu-item" to="/">{t('contact')}</Link>
					</li>
					<li>
						<Link className="menu-item" to="/">FAQ</Link>
					</li>
					<li>
						<Link className="menu-item" to="/">Smoelenboek</Link>
					</li>
					<li>
						<Link className="menu-item" to="/">{t('microblog')}</Link>
					</li>
					<li>
						<Link className="menu-item" to="/">{t('about_us')}</Link>
					</li>
				</ul>

				<div id="user-settings">
					<div className="square-button" onClick={() => this.toggleSettingsModal(true)}>
						<img src="/images/black-settings-button.svg" className="img-center" alt={t('settings')} />
					</div>
					<Popover {...popoverProps} place="below">
						<div className="square-button" onClick={() => this.toggleNotificationsPopover(true)}>
							<img src="/images/bell.png" className="img-center" alt={t('notifications')} />
						</div>
					</Popover>
				</div>

				<div className="clearfix" />
			</div>

			{/* Logo */}
			<div id="logo-section" className="container">
                <Link to="/">
                    <img src="/images/logo.png" alt="CuraNu" />
                </Link>
				<h3>Intranet</h3>
				<div className="clearfix" />
			</div>

			{/* Main Menu */}
			<div id="main-menu-section">
				<div className="container">
					<ul id="main-menu">
						<li>
							<Link className="menu-item" to="blog">{t('articles')}</Link>
						</li>
						<li>
							<Link className="menu-item" to="news">{t('news')}</Link>
						</li>
						<li>
							<Link className="menu-item" to="events">{t('events')}</Link>
						</li>
						<li>
							<Link className="menu-item" to="quality-manual">{t('quality_manual')}</Link>
						</li>
					</ul>

					<div id="search-box" className={shake ? 'shake' : ''}>
						<input type="search" placeholder={t('search')} value={searchWord} onChange={ e => this.updateTelephoneBookSearch(e)} />
						<div className="search-button" onClick={this.searchTelephoneBook}>
							<img src="/images/zoeken.svg" className="img-center" alt={t('search')} />
						</div>
					</div>

					<div className="clearfix" />
				</div>
			</div>
        </section>);
    }
}

const mapStateToProps = (state: any) => {
	return {
		userRdcr: state.userReducer,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		loadUserDetails: () => dispatch(loadUserDetails()),
        searchInTelephoneBook: (searchWord: string) => dispatch(searchInTelephoneBook(searchWord)),
	};
};

export default withTranslation(['translations'], {})(connect(mapStateToProps, mapDispatchToProps)(Header));
