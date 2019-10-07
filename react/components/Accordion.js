import React from 'react';

export default class Accordions extends React.Component {
    state = {
        accordionItems: [
            {
                title: 'Accordion 1',
                text: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
                collapsed: true
            },
            {
                title: 'Accordion 2',
                text: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
                collapsed: false
            },
            {
                title: 'Accordion 3',
                text: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
                collapsed: true
            },
        ]
    }

    handleCollapsing = index => {
		this.setState(state => {
			state.accordionItems[index].collapsed = !state.accordionItems[index].collapsed;

			return state;
		});
	}

	render(){
        const { accordionItems } = this.state;
        
        const itemsHtml = accordionItems.map((item, index) => {
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