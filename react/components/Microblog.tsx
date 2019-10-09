import React, { Component } from 'react';
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import Popup from 'react-popup';

import {createMicroblog} from '../actions/widgetsActions.ts';
import DragAndDrop from './DragAndDrop.tsx';

interface IMicroblog {
    author: string,
    url: string,
    content: string,
    image: string,
    date: Date
}

interface IState extends IMicroblog{
}

/** Prompt plugin */
Popup.registerPlugin('prompt', (defaultValue: any, title: string, callback: Function) => {
    let promptValue: string = defaultValue;
    let promptChange = (e: any) => promptValue = e.target.value;

    Popup.create({
        title,
        content: <input type="text" placeholder={title} className="mm-popup__input" defaultValue={promptValue} onChange={promptChange} />,
        buttons: {
            left: ['cancel'],
            right: [{
                text: 'Save',
                key: '⌘+s',
                className: 'success',
                action: function () {
                    callback(promptValue);
                    Popup.close();
                }
            }]
        }
    });
});

/** Image Uploader plugin */
Popup.registerPlugin('uploader', (defaultValue: any, title: string, callback: Function) => {
    // let promptValue: string = defaultValue;
    const uploadItem = (file: File) => console.log(file);

    Popup.create({
        title,
        className: 'uploader',
        content: <DragAndDrop uploadItem={uploadItem} />,
    });
});

class Microblog extends Component<any, IState> {
    state = {
        author: 'John Smith',
        url: '',
        content: '',
        image: '',
        date: new Date()
    }

    updateContent = (val: string) => {
		this.setState({ content: val });
	}

    openLinkPopup = () => {
		Popup.plugins().prompt(this.state.url, 'Enter the URL', (value: string) => {
            console.log(value);
        });
	}

    openImageUploaderPopup = () => {
		Popup.plugins().uploader(this.state.image, 'Upload an Image', (value: string) => {
            console.log(value);
        });
	}

    submitMicorblog = () => {
        const microblog = this.state;
        microblog.image = this.props.widgetsRdcr.microblogImageUrl;

		this.props.createMicroblog(this.state);
	}

	render(){
        const { content } = this.state;
        const { t } = this.props;
        
		return <section>
            <div className="microblog-wrap">
                <textarea id="microblog-text" className="microblog-input" rows={10} value={content} onChange={e => this.updateContent(e.target.value)} />

                <div>
                    <img src="/images/camera.svg" className="pull-left icon" onClick={this.openImageUploaderPopup} />
                    <img src="/images/link.svg" className="pull-left icon" onClick={this.openLinkPopup} />
                    <button
                        onClick={this.submitMicorblog}
                        id="submit-microblog"
                        className="primary-button pull-right uppercase"
                    >
                        {t('place')}
                    </button>
                </div>

                <div className="clearfix"></div>
            </div>

            <div className="row post-meta">
                <div className="col-3">
                    <img src="/images/author-01.png" />
                </div>
                <div className="col-6">
                    <span className="title pull-left">Ria de Vries</span>
                    <br />
                    <span className="date">12/09/2016 - 11:10</span>
                </div>
                <div className="col-3" style={{textAlign: 'right'}}>
                    <img src="/images/like.svg" style={{height: 15, verticalAlign: 'middle'}} />
                    <span className="likes-comments-count">{0}</span>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="text">Nieuwe campagne CuraNed gisteren van start gegaan</div>
            <img src="/images/banner.png" />
            <br/>
            <br/>
            <strong className="bold">Lees meer en reacties (0)</strong>
		</section>
	}
}

const mapStateToProps = (state: any) => {
	return {
        widgetsRdcr: state.widgetsReducer,
    };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		createMicroblog: (microblog: IMicroblog) => dispatch(createMicroblog(microblog)),
	};
};

export default withTranslation(['translations'], {})(connect(mapStateToProps, mapDispatchToProps)(Microblog));
