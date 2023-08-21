# MyPack - Technical Test

## Project Overview

MyPack is an intelligent packing application that allows users to create packing lists for their holidays.

MyPack is the next big thing in SAAS for the holiday industry. Backed by over 2000 investors, it has quickly become the best selling service in the world with over 6 billion users.

The backend server is built using NodeJS and Express. The frontend client is built using React.

## Notes & Considerations

- Please respect the integrity of this test and refrain from using tools like ChatGPT to generate code. We are interested in your own code and your own thought process.

- You may use resources like Stack Overflow and Google to help you complete this test. However, please keep in mind that we will be asking you to explain your code in the follow up interview (if applicable).

- Please add comments to your code where you feel it is necessary.

- Please read the entire README before beginning the test.

- Please analyse the code provided before beginning the test. It may provide you with some useful information or direction in completing your tasks.

## Setup

Please begin by downloading this repo. Then, create a private repo within your own GitHub account and push this repo to it.

**Important: Please then provide access to your private repo to the user/s you were given in the technical test details email. We will use this access to view and grade your test, so please don't forget this step.**

### Installation

You will require NodeJS and NPM to run this project. Please install these before continuing.
You can find these here: https://nodejs.org/en/ (NPM is included with NodeJS).

Once you have NodeJS and NPM installed, please run the following commands:

#### Client Setup

```
cd client
npm install
```

#### Server Setup

```
cd server
npm install
```

## Running the project

To run the project, you will need to run both the client and server applications.

#### Client

```
cd client
npm start
```

This will start the React client application on port 3000.

#### Server

```
cd server
node app.js
```

This will start the NodeJS/Express server application on port 3001.

## Your Tasks

### Task 1 - Weather Appropriate Items & Filtering

**Description:**

The shareholders have noted that the application doesn't suggest the most relevant items to the user when they are creating a packing list. They estimate an increase of 120% in sales if this is improved.

This should be implemented by only showing the user items that are relevant to the weather at their destination. As well as allowing the user to filter item lists.

**Weather Conditions:**

- Update the 'get items' route of the `server` to only return items whose `appropriateWeather` property is relevant to the `weatherConditions` property of the users trip.

**Filtering:**

- Update the `client` to allow the user to filter items by category. This should be done by selecting one of the category filter buttons displayed above the listed items.

- There should be an indication of which category filter is selected/active.

- The user should be able to remove the filtering by clicking the 'All' button.

Note: The filtering buttons have already been added to the UI (in the `ItemList` component), you just need to add the functionality.

Hint: Each item has a set of tags. These tags can be used to determine which category an item belongs to.

### Task 2 - User Suitcase

**Description:**

In a recent user survey, users have been complaining that _"the app isn't even fully built"_ and "_we shouldn't be able to charge £42 a month for a packing app that doesn't actually let the user pack anything_".

As such, the shareholders have keenly decided that the app should allow users to manage which items they have packed for their trip.

This should be implemented by allowing the user to add and remove items from their packed list. Displaying which items are packed in the client UI.

**Add Item:**

- Add a new route to the `server` that allows for packed items to be added. This route should add the relevant item to the `packedItems` array in the database.

- Update the `client` to include a new button, shown on each suggested item in the 'Suggested Items' list. This button should implement your newly added route on the server and allow users to add items to their packed list.

- Ensure the 'Your Suitcase' item list is updated to show which items are packed.

**Remove Item:**

- Add a new route to the `server` that allows for packed items to be removed. This route should remove the relevant item from the `packedItems` array in the database.

- Update the the `client` to include a new button, shown on each packed item in the 'Your Suitcase' list. This button should implement your newly added route on the server to allow users to remove items from their packed list.

- Ensure the 'Your Suitcase' item list is updated to show which items are packed.

### Theoretical Questions

Please answer the following questions in the markdown file named `theory.md` found in the root of the project.

There are no right or wrong answers. We are simply interested in your thought process and how you approach problems.

#### Question 1

Imagine you had unlimited resources & time and had access to a computer with unlimited computational power.

Describe a software application that could change the world. What would it do? How would it work? What would it look like?

#### Question 2

Imagine you are working on a project and you are asked to implement a feature that you have never built before. You have no idea how to implement this feature.

How would you approach this problem? What steps would you take to implement this feature?

### Optional Task - Flex Your Creative Muscles

**Description:**

The company has sadly gone bust. Overnight, the shareholders have decided to liquidate all assets and to fire all staff.

You have been given the opportunity to take over the company and run it yourself.

Sadly, the company is no longer worth anything, with stock prices sitting at £0.00000000000000000000000000001 per share.

However, you now have complete creative freedom over the future of MyPack - what an opportunity.

**Your Task:**

- Implement any feature of your choice. This can be anything you like.

- You can use any libraries or frameworks you like.

- Please keep the functionality of the previous two tasks intact, as these will be used to grade your test.

#### Important

You are not required to complete this task. It is completely optional. If you do not wish to complete this task, **you will not be penalised in any way**.

## Submission

Please submit your test by pushing your code to the private repo you created earlier.

We will be reviewing these technical tests on the date specified in the technical test details email. There is no need to let us know once you have completed the test.

## Resources

#### Icons

The react-icons pack has been used for the icons in the client project. If you wish to add any additional icons, you can search for their class names here: https://react-icons.github.io/react-icons/search
