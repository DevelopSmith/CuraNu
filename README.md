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
- Search: both of the 2 search boxes in the page are functional.


### [Live Demo](https://curanu-test.herokuapp.com)
Please follow the following URL to check a live demo of this app (Host on **[Heroku](https://heroku.com)**)
-  https://curanu-test.herokuapp.com

### TypeScript
I have implemented TypeScript for the React part but I didn't add it to the Node.js part as the focus of this assessment part is React not Node.js


### APIs
I wanted to pull the content of the widgets from a remote API instead of hard-coding the content in the `JSX` code. The API endpoints has the content hard-coded inside their functions but they return the data as if it was a real API.


### Internationalization
You can change the app's language from the **Settings** modal. We can add as many languages as we like.

### E2E Testing
I have implemented `Cypress` for the E2E testing. After installing the dependencies, you can run the following command to run the test results.
```
npm run ci:dev
```

Or run the following command if you are server is already running on port `3000`
```
npm run test
```

Cypress will open a new window (actually it is an Electron-based window) and try all the tests which I wrote.


##### To add a new language

1. copy the content of any of the languages in `react/i18n` into a new file and give it a 2-characters name like 'ar' for Arabic, 'it' for Italian, etc.
2. Import the file in `react/i18n/index.js` and and it to the `resources` object.

```
import fr from './en.ts';
...
import YOUR_NEW_LANGUAGE from './YOUR_NEW_LANGUAGE.ts';

resources: {
  nl: {
    translations: nl
  },
  ... Your new language here 
}
```


### Search
When you click the search icon (the magnifying glass icon) in any of the search boxes in the page, if the field next to the button is empty, it will perform a simple shaking animation. However, if the input field is not empty, it will make an API call but the API always returns an empty results array as we don't have any real data.

