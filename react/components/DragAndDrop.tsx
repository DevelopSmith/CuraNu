import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';

interface IState {
    //
}

class DragAndDrop extends Component<any, IState> {
    state = {
    }

    attachFiles = (e: Event) => {
        this.props.uploadItem(e.target.files[0]);
    }

	clickAttachFilesBtn = (e: Event) => {
		const event = new MouseEvent('click', {
			view: window, 
			bubbles: true, 
			cancelable: false
		});

		const node = document.getElementById('attachFilesInput');
		node.dispatchEvent(event);
    }
    
    onDrop = (acceptedFiles: File[], rejectedFiles: File[]) => {
		// Do something with files
		console.log({acceptedFiles, rejectedFiles});

		acceptedFiles.forEach((file: File) => this.props.uploadItem(file));
	}

    render(){
        return (<div>
            <input type="file" id="attachFilesInput" className="hidden" onChange={ this.attachFiles } />

            <div onClick={ this.clickAttachFilesBtn }>
                <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps, isDragActive}) => {
                        return (<div {...getRootProps()} className={classNames('dropzone uploader-drag-drop-area', {'dropzone-isActive': isDragActive})}>
                            <input {...getInputProps()} />
                            { isDragActive ? <h3>Drop files here...</h3> : <span className="bigger-span">+</span> }
                        </div>)
                    }}
                </Dropzone>
            </div>
        </div>);
    }
}

export default withTranslation(['translations'], {})(DragAndDrop);