import React from 'react'

export default (props: any) => {
	const {
		children, collapsed, collapse, hide,
		widgetTitle, headerIcon, footerText, footerIcon, footerAction
	} = props;

	const handleFooterAction = () => {
		if(footerAction){
			footerAction();
		}
	}

	return <section className="widget">
		{widgetTitle && (<div className="widget-header">
			{headerIcon && <div className="header-icon icon-left">
				<img className="img-center" src={headerIcon} />
			</div>}

			<div className="title-section">
				<h2 className="title">{widgetTitle}</h2>
				<div className="collapse-icon" onClick={collapse}>
					<img className="img-center" src={collapsed ? '/images/arrow-right.svg' : '/images/arrow-down.svg'} />
				</div>
			</div>

			<div className="header-icon icon-right">
				<img className="img-center" src="/images/close.svg" onClick={hide} />
			</div>
		</div>)}

		{children && <div className={collapsed ? 'widget-body collapsed' : 'widget-body'}>{children}</div>}

		{footerText && <div className="widget-footer">
			<h4 className="title">{footerText}</h4>
			<div className="icon" onClick={handleFooterAction}>
				<img className="img-center" src={footerIcon} />
			</div>
			<div className="clearfix" />
		</div>}
	</section>
}