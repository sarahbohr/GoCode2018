# 
![gocode-logo](https://cloud.githubusercontent.com/assets/100216/12792545/96727a8e-ca69-11e5-9b9a-cddfa80d1c4b.png)
--
Foster The Bananas is a team of four developers and Web Development Immersive students from Galvanize. Our application is called GiveMatch, a Business-to-Non-Profit relationship builder.  We are comprised of Sarah Battey, Jacob Crane (both front-end specialists), Malcom Foster and Roberto Santos (both back-end specialists).
# What probelm are we aiming to solve?
The process of Businesses finding Non-Profits and vice versa are often difficult.  On top of the tideous work of finding a partner, the relationships are often strained, they are often one-sided and involve more work come tax season.  We are here to solve that!
# How can we help?
GiveMatch integrates public data about Colorado charities to HUMANIZE the relationships between local Non-Profit Organizations and their business counterparts.
## What does that mean?
As companies visit GiveMatch, they are presented with non-profits that have a need for donations or partnerships.  As these companies fill out more of their information, our system uses multiple sources of public information in Colorado non-profits in order to refine the matches provided.  This refinement is derived from what we call the GiveMatch Score.  We talk more about that in a minute but, please take a look at our landing page to get a feel for the user interface:
![GiveMatch landing page displaying its user interface and how it brings data to its users.](https://github.com/GoCodeColorado/FosterTheBananas/blob/master/screenshots/GiveMatch.png)
## What is happening under the hood?
Currently, we are using two sources of data from the Colorado Information Marketplace.  The first source populates financial information of many types to calculate need on a monetary level.  The second source allows us to find each NPOs mission statement which we can then parse through to determine keywords to match a company's values or needs to the correct mission statement.  Both sources use Federal Employer Identification Number to ensure we are using data that matches that NPO.  Here is an example of real financial data being populated:
![Financial data being parsed and displayed in browser.](https://github.com/GoCodeColorado/FosterTheBananas/blob/master/screenshots/FinancialData.png)
[Waffle Board](https://waffle.io/GoCodeColorado/FosterTheBananas)

