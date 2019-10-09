import React, { Component } from 'react';
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {loadWidgetsData} from '../actions/widgetsActions.ts';
import Accordion from '../components/Accordion.tsx';

import {
	AddWidget, Events, News,
	DirectLinks, Blogs, QualityManual, Polls, MyLinks,
	TelephoneBook, MicroblogWidget, Groups
} from '../components/Widgets.tsx';

interface IWidget {
	id: string,
	column: string,
	hidden: Boolean,
	collapsed?: Boolean
}

interface IState {
	widgets: IWidget[],
}

const columns = ['col_1', 'col_2', 'col_3'];

class Main extends Component<any, IState> {
	state = {
		widgets: [
			{
				id: 'accordion',
				column: 'col_1',
				hidden: false
			},
			{
				id: 'events',
				column: 'col_1',
				hidden: false,
				collapsed: true,
			},
			{
				id: 'news',
				column: 'col_1',
				hidden: false,
				collapsed: false,
			},
			{
				id: 'add_widget',
				column: 'col_1',
				hidden: false
			},

			{
				id: 'direct_links',
				column: 'col_2',
				hidden: false
			},
			{
				id: 'blogs',
				column: 'col_2',
				hidden: false,
				collapsed: false
			},
			{
				id: 'quality_manual',
				column: 'col_2',
				hidden: false,
				collapsed: false
			},
			{
				id: 'polls',
				column: 'col_2',
				hidden: false,
				collapsed: false
			},
			{
				id: 'my_links',
				column: 'col_2',
				hidden: false,
				collapsed: false
			},

			{
				id: 'telebook',
				column: 'col_3',
				hidden: false
			},
			{
				id: 'microblog',
				column: 'col_3',
				hidden: false,
				collapsed: false
			},
			{
				id: 'groups',
				column: 'col_3',
				hidden: false,
				collapsed: false
			},
		],
	}

    componentDidMount(){
        this.props.loadWidgetsData();
    }

	// Moves an item from one list to another list.
	move = (list: IWidget[], oldIndex: number, newIndex: number) : Array<any> => {
		if (newIndex >= list.length) {
			let x = newIndex - list.length + 1;
	
			while (x--) {
				list.push({} as IWidget);
			}
		}

		list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
		return list;
	};

	isCollapsed = (id: string) : Boolean | undefined => {
		const widgets: IWidget[] = this.state.widgets;
		const widget = widgets.find((widget: IWidget) => widget.id == id)

		return widget ? widget.collapsed : false;
	}

	collapse = (id: string): void => {
		const widgets: IWidget[] = this.state.widgets;
		const widgetId = widgets.findIndex((widget: IWidget) => widget.id === id)

		if (widgetId >= 0) {
			widgets[widgetId].collapsed = !widgets[widgetId].collapsed;
			this.setState({ widgets })
		}
	}

	hide = (id: string): void => {
		const widgets: IWidget[] = this.state.widgets;
		const widgetId = widgets.findIndex((widget: IWidget) => widget.id === id)

		if (widgetId >= 0) {
			widgets[widgetId].hidden = true;
			this.setState({ widgets })
		}
	}

	getBlockComponent = (block: string) => {
		switch (block) {
			case 'accordion':
				const {accordion} = this.props.widgetsRdcr.widgetsData;

				return <Accordion items={accordion || []} />

			case 'events':
				const {events} = this.props.widgetsRdcr.widgetsData;

				return <Events items={events || []} collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			case 'news':
				const {news} = this.props.widgetsRdcr.widgetsData;

				return <News items={news || []} collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			case 'add_widget':
				return <AddWidget />

			case 'direct_links':
				const {directLinks} = this.props.widgetsRdcr.widgetsData;

				return <DirectLinks items={directLinks || []} collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			case 'blogs':
				const {blog} = this.props.widgetsRdcr.widgetsData;

				return <Blogs blog={blog || []} collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			case 'quality_manual':
				const {qualityManual} = this.props.widgetsRdcr.widgetsData;

				return <QualityManual items={qualityManual || []} collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			case 'polls':
				return <Polls collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			case 'my_links':
				const {myLinks} = this.props.widgetsRdcr.widgetsData;

				return <MyLinks items={myLinks || []} collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			case 'telebook':
				return <TelephoneBook />

			case 'microblog':
				return <MicroblogWidget collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			case 'groups':
				const {groups} = this.props.widgetsRdcr.widgetsData;

				return <Groups items={groups || []} collapsed={this.isCollapsed(block)} collapse={() => this.collapse(block)} hide={() => this.hide(block)} />

			default:
				return <div className="no_block_type" />
		}
	}

	onDragEnd = (results: any) => {
		const { source, destination } = results;

		// dropped outside the list
		if (!destination) {
			return;
		}

		const widgets: IWidget[] = this.state.widgets;
		const sourceColumn = this.getList(source.droppableId);
		const destinationColumn = this.getList(destination.droppableId);

		const movedWidget = sourceColumn[source.index];
		const distinationWidget = destinationColumn[destination.index];

		const oldIndex = widgets.findIndex(widget => widget.id == movedWidget.id);
		const newIndex = widgets.findIndex(widget => widget.id == distinationWidget.id);
		const reorderedWidgets = this.move(widgets, oldIndex, newIndex);

		if (source.droppableId !== destination.droppableId) {
			movedWidget.column = destination.droppableId;
		}

		this.setState({ widgets: reorderedWidgets });
	}

	getList = (columnId: string) => this.state.widgets.filter(item => item.column === columnId && item.hidden === false);

    render(){
		return <section>
			<div id="widgets-section" className="container">
				<div className="row">

					<DragDropContext onDragEnd={this.onDragEnd}>
						{columns.map((column: string) => {
							const columnList = this.getList(column);

							return (<Droppable key={column} droppableId={column}>
								{(provided, snapshot) => (
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
										className="col-4"
										id={column}
									>
										{columnList.map((widget, index) => <Draggable
											key={widget.id}
											draggableId={widget.id}
											index={index}
										>
											{(provided, snapshot) => (<div
												id={`draggable-${column}-${widget.id}`}
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												{this.getBlockComponent(widget.id)}
											</div>)}
										</Draggable>)}
		
										{provided.placeholder}
									</div>
								)}
							</Droppable>)
						})}
					</DragDropContext>

				</div>
			</div>
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
		loadWidgetsData: () => dispatch(loadWidgetsData()),
	};
};

export default withTranslation(['translations'], {})(connect(mapStateToProps, mapDispatchToProps)(Main));
