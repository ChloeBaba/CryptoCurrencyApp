==============================================================
Crypto Currency App functionalities:

1/ Homepage

See a list of all the crypto currencies with requested values (name, price USD, change price over the last 24h)
Each crypto currency can be added to the tracker page (if not already)
Data is refreshing on swipe down
2/ Tracker page

See all the added crypto currencies
Remove crypto currencies from the personalised list

3/ Navigation

Button is implemented on Homepage to access Tracker page

==============================================================

# React-native challenge

Our React-native coding challenge is a simple "Crypto Tracker". Users should be able to add new cryptocurrencies, visualize the current price and the change in price in % for the last 24 hours, and also be able to remove a cryptocurrency from the app.

# App setup

The project was initialised using [Expo](http://www.expo.io) and is ready to run after installing the dependencies (`yarn` was used to create this project but you can also use `npm`). Feel free to add/remove packages as you see fit and try to showcase your knowledge!
In case you are not familiar with Expo toolkit, have a look at their [documentation](https://docs.expo.io/).

# Instructions

 - Clone this project and save it as a private repository in your github account.
 - Install the dependencies.
 - When you finish the task, invite the user `dmdmd` on your project and let your review manager know.
 - Include another markdown file with instructions/comments/remarks file when applicable.
 - Please leave the task as if it was ready to be deployed to production.

# Main Features of the app

### 1) List of cryptocurrencies
Users should be able to visualize the list of cryptocurrencies they add on the app.

### 2) Current price and percentage change in the last 24h
Users should also be able to visualize:
* Current price for the cryptocurrencies added.
* Change in percentage in USD in the last 24h.

### 3) API to get pricing and percentage change
Feel free to use the pricing and percentage change provider of your preference. One of the simplest ones that doesn't require registration is [Messari](https://messari.io/api/docs). You can find a sample bellow:
https://data.messari.io/api/v1/assets/btc/metrics

### 4) Remove a cryptocurrency
From the list, users should be able to remove a cryptocurrency from the "Crypto Tracker".

### 5) (Nice-to-have) Pricing and percentage change update
The Crypto Tracker should update the current price and percentage change in USD (or EUR) to the user. Chose your preferred way to update the data.

### Bonus
- Tests
- Typescript
- Graphql
