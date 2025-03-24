# On the Beach Frontend Test - Philip Thornton

General Approach I took:
- Created the app using react-create-app (just realised this was depreciated in Feb 2025, could use Vite instead)
- Sketched out the general components and relationship that I wanted
- Created the blueprints for the components without all implementation details
- Added the state and props and the functionallity to components including sort
- Added in the styling using React Boostrap and some inline css where needed
- Added in some tests to test rendering and behaciour of components (see note)

My thoughts:
- Mostly happy with how it looks and functions
- I definitely should have written the tests earlier - at least for the core functionallity eg. sort. I found I had to refactor some of the code to make it more testable
- Wasn't that familiar with the async functionallity in js so had to look that up and how to test async
- There's some areas that could be improved. Some ideas:
  - Error handling for incorrect data given eg. unexpected format, missing values maybe
  - The state 'Applied Sort' should be bundled in an object with hotels as I'm changing the state of both at the same time
  - Add a prop passed to SortResults with the sort buttons available - this would make it more reusable in other contexts. 
  - Make some of the functions in HotelResult pure functions and make into a module which can be used by other components. Eg. parsing the currency will probably be done often in multiple places 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
