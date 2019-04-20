# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)

## Q: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?

## Q: Using class-based components and function-based components is largely a matter of preference.  However, (excluding the recent "hooks" addition to React), there are 2 things class-based components give you that function-based components do not.  What are those 2 things? 

## Q: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain (such as jsonstore.io).  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  

## Q: Follow-up: Using the above scenario, explain what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`

## Q: Additional follow-up: Using the above scenario, explain what changes you would make to your JSX if you were putting your JSX and server on a host on a site such as `http://favorite-cats-with-hats.com` (Not a real site)

## Q: I have said that you can only pass data "down" in React, not "up".  What does that mean?

## Q: Follow-up: If you can't pass data "up", how can anything that is "down" change data?

## Q: A component should not set its own state (if it has one) based on props it was passed in.  Why?  What is the problem with setting state based on props?

## Q: Why should you have only a few components that have state?  What is wrong with having many components that have state? 
