This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have the latest node, otherwise this might cause conflicts while doing using cocoapods

## Step 1: Install node_modules

```bash
# using npm
npm install

# OR using Yarn
yarn
```

## Step 2: Run cocoapods to linke references

```bash
cd ios && pod install
```

## Step 3 Run metro

You should be able to run the app in the simulators or devices,

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 5: Running the tests

```bash
# using npm
npm run test

# OR using Yarn
yarn test
```

### Now what?

- You should be able to see, catch and get diferent information about your favorites Pokemons

# Troubleshooting

If you can't get this to work, let me know so I can fix it at `rchasenoyola@gmail.com`

# To Do's

Improve tests, so far the coverage it's ok but some tests are just snapshots.
As request of some people I'll try to add a Battle Calculator later on

