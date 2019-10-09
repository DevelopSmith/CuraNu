import React, { Component } from 'react';
import { connect } from "react-redux";

import {collapseAccordionItem} from '../actions/widgetsActions.ts';

interface IAccordionItem {
    title: string,
    text: string,
    collapsed: Boolean
}

interface IState {}

class Accordion extends Component<any, IState> {
    handleCollapsing = (itemIndex: number) => {
		this.props.collapseAccordionItem(itemIndex);
	}

	render(){
        const { items } = this.props;
        
        const itemsHtml = items.map((item: IAccordionItem, index: number) => {
            return (<div key={index} className={item.collapsed ? 'item collapsed' : 'item'}>
                <div className="header" onClick={() => this.handleCollapsing(index)}>
                    <h3 className="title">{item.title}</h3>

                    <div className="icon">
                        <img className="img-center" src={item.collapsed ? '/images/arrow-right.svg' : '/images/arrow-down.svg'} />
                    </div>
                </div>

                <div className="text">{item.text}</div>
            </div>);
        });

		return <section className="accordion">
			{itemsHtml}
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
		collapseAccordionItem: (itemIndex: number) => dispatch(collapseAccordionItem(itemIndex)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
