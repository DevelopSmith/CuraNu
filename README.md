## CuraNu

I have converted the design to a working template using **React.js** and **Redux** including all the widgets and the accordion. Since the task is very simple, I added some extra features to showcase some of my experiences. Here is what I have added:

- Drag and Drop: It is very important in a SPA like this to allow the user to organize and order the widgets in his page. So I have added the ability to move the widgets and sort them.
- Collapse the widgets: the widgets will collapse/expand if you click the button next to the title of the widget.
- Hide the widget: if you click the X button in the header of the widget, the widget will disappear.
- Animation: if you collapse/expand the widget, it will do that in a smoother way. Also the accordion is animated when you open or close one of the items.
- Localization: if you click the gear button in the top right of the page, it will open a modal. In this modal, you can choose the language to be English, French or Dutch. I could add more languages by adding a new file for each language in the `react/i18n` folder. But I think I proved what I wanted to do.
- Notifications popover: if you click on the bell icon in the top right of the page, you will see some notifications to appear like what you see in Facebook.
- Redux: I know that it is an overkill for a simple task like this but I thought it should be added anyway.
- API calls: the content of the widgets is being pulled from the API using Node.js and Express.
- I have added a simple page for some of the pages including "Events", "News", "Groups", etc. I also added a 404 page.


### TypeScript
I have implemented TypeScript for the React part but I didn't add it to the Node.js part as the focus of this assessment part is React not Node.js


### APIs
I wanted to pull the content of the widgets from a remote API instead of hard-coding the content in the `JSX` code. The API endpoints has the content hard-coded inside their functions but they return the data as if it was a real API.