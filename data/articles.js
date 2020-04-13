module.exports = [
  {
    id: '1',
    date: '10/04/2020',
    type: 'Tips & Tricks',
    title: '7 Tips For Maximizing Efficiency When Writing React Native Apps',
    subtitle: "React Native is a complex tool, but building apps with it doesn't have to be cumbersome.",
    body: [
      {
        type: 'h2',
        innerText: '1. Get a Mac',
      },
      {
        type: 'p',
        innerText:
          "I can't stress this enough. If you’re e.g. a Windows user and think it would be better to use the OS you’re used accustomed to, let’s just say this one’s non-negotiable — macOS is the way to go when it comes to React Native development.",
      },
      {
        type: 'p',
        innerText: 'There are two major reasons for this:',
      },
      {
        type: 'p',
        className: 'indented',
        innerText:
          '1. MacOS is the only way to build for iOS. Apple really knows its business, and their closed ecosystem tactic It’s no coincidence that all the tutorials take it for granted that you use a Mac — if you want to do cross-platform development, you will, sooner or later, <u>need</u> a Mac.',
      },
      {
        type: 'p',
        className: 'indented',
        innerText: `2. General performance and stability. React Native started as an iOS “thing” and it shows. The simulator, the build process, the Fast Refresh
          features, remote JS debugging — they all work beautifully on macOS. On Windows, npm, React Native itself, and even the Windows command line are all
          sorts of buggy.`,
      },

      {
        type: 'p',
        innerText: `The process of developing React Native is at least twice as fast on a Mac, so if you want to start off on the right foot, make sure you are (or will
            be) a macOS user.`,
      },
      {
        type: 'h2',
        innerText: '2. Get a Better Mac',
      },

      {
        type: 'p',
        innerText: `No really. React Native is one of the techs that can eat as many resources as you give it, and for good reason. The workflow usually benefits from
          having as many iOS/Android emulators open at the same time. This will let you achieve a consistent implementation throughout environments as quickly
          as possible.`,
      },
      {
        type: 'p',
        innerText: `Additionally, as every <code>CTRL+ S</code> in your IDE is a rebuild of the bundle, minimizing build time means minimized waiting between writing a
          piece of code and seeing its effects. Those tens or hundreds of times a day really add up.`,
      },
      {
        type: 'p',
        innerText: `Plus, there’s nothing as satisfying as seeing your code results instantly.`,
      },
      {
        type: 'h2',
        innerText: '3. Make the IDE Do the Work for You',
      },
      {
        type: 'p',
        innerText: ` Every IDE comes with some kind of formatting feature, and you might think that’s enough. But today’s IDE’s have gotten smarter, and are about much,
        much more than just that.`,
      },
      {
        type: 'p',
        innerText: ` Indenting code, removing variables, sorting imports, transforming quotes, and everything else that makes your code cleaner and more consistent— it can
        all be done by your IDE and it should be done by your IDE!`,
      },
      {
        type: 'p',
        innerText: `Get to a point where you don’t even remember the last time you pressed the <code>Tab</code> key.`,
      },
      {
        type: 'img',
        url: 'format.gif',
        alt: 'Code formating GIF',
      },
      {
        type: 'p',
        innerText: `Here's a great resource that guides you in setting up your Prettier+ESlint Airbnb rules integrated into vscode:`,
      },
      {
        type: 'a',
        url: 'https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a',
        innerText: `https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a`,
      },
      {
        type: 'h2',
        innerText: '4. Snippet Everything',
      },

      {
        type: 'p',
        innerText: ` Take the DRY principle to the max. Do you see yourself manually writing <code>&lt;View&gt;&lt;/View&gt;</code> or
                      <code>&lt;Text&gt;&lt;/Text&gt;</code> too often? Turn them into a snippet!`,
      },
      {
        type: 'p',
        innerText: `And don’t stop there — maybe you also want to apply a style to the view you just created, so why not make it just that?`,
      },
      {
        type: 'p',
        innerText: `I have created over 25 snippets during React Native development. I made them available <a href="/vscode-rn-snippets.json">here</a> (I’m using VS
          Code). Feel free to use them as a source of inspiration or as they are.`,
      },
      {
        type: 'img',
        url: 'snippet2.gif',
        alt: 'Code snippet GIF',
      },
      {
        type: 'p',
        innerText: `Just make sure you don’t let the IDE get in your way. Learn how to create them easily and efficiently, so you don’t feel like you’re wasting the time
                  you’re saving.`,
      },
      {
        type: 'p',
        innerText: `Writing 3 characters and generating 30 will always make you feel like a pro.`,
      },
      {
        type: 'h2',
        innerText: '5. Twice the Windows, Twice the Speed?',
      },

      {
        type: 'p',
        innerText: `Not quite… But very helpful nonetheless.`,
      },
      {
        type: 'p',
        innerText: `Whenever you find yourself juggling through the same two files over and over, make a habit of splitting that window in two.`,
      },
      {
        type: 'img',
        url: 'twowindows.jpg',
        alt: 'Two code editor windows',
      },
      {
        type: 'p',
        innerText: `It may seem a bit confusing or overwhelming at first, but, especially if you’ve got the real estate, it’s the bread and butter of coding efficiency.`,
      },
      {
        type: 'p',
        innerText: `Getting friendly with your hotkeys goes a long way towards turning this into a habit. Find and bind the IDE command that works best for you.`,
      },
      {
        type: 'p',
        innerText: `For me, the one that does just what I need (in VS Code) is <code>workbench.action.focusSecondEditorGroup</code>. It removes the hassle of opening a
        new tab, moving the file and then focusing the tab, by doing it with a single key combo (in my case <code>CTRL+ 2</code>).`,
      },
      {
        type: 'p',
        innerText: `For example, having both your markup and styling on-screen while creating UI’s is a much more comfortable experience and will save you time as well.`,
      },
      {
        type: 'h2',
        innerText: '6. Use Fast Refresh for Inspecting Your UI',
      },
      {
        type: 'p',
        innerText: `React Native’s Fast Refresh feature is one of the hottest (pun intended) implementations out there when it comes to previewing code changes.`,
      },
      {
        type: 'p',
        innerText: `Fast Refresh, apart from its contribution to a quicker, more efficient development flow, turns out to be a really helpful element inspection tool as
        well.`,
      },
      {
        type: 'p',
        innerText: `Let’s take a look.`,
      },
      {
        type: 'img',
        url: 'live-reload-ui.gif',
        alt: 'Live Reload demo gif',
      },
      {
        type: 'p',
        innerText: `Combining the power of Fast Refresh with a quick snippet, you can get exactly what you need in no time. All without leaving your IDE.`,
      },
      {
        type: 'p',
        innerText: `Example: Make a <code>bred</code> snippet that creates a red <code>border</code>, use it inside any element, hit <code>CMD+S</code> and see your
        element pop on screen. You can then adjust or enhance your element’s styling to your liking. This might seem simple and limited, but in practice turns
        out to be just what you need 95% of the time.`,
      },
      {
        type: 'p',
        innerText: `This method will also mean you don’t have to open inspect pop-ups and menus, and disrupt your coding workflow. Debug-as-you-go with this simple trick.`,
      },
      {
        type: 'h2',
        innerText: `7. Use Fast Refresh for Debugging Your Code`,
      },
      {
        type: 'p',
        innerText: `An even more useful trick when using Fast Refresh is the ability to check the values of any variables from the current frame. Consider this example:`,
      },
      {
        type: 'img',
        url: `stats.jpg`,
        alt: `iOS Simulator top part`,
      },
      {
        type: 'p',
        innerText: ` This “Player Stats” screen is supposed to show <code>stats</code> of a player. But it looks like something is broken, and we need to find out what it
        is.`,
      },
      {
        type: 'p',
        innerText: `The code looks like this:`,
      },
      {
        type: 'img',
        url: `statscode.jpg`,
        alt: `Code about player statts`,
      },
      {
        type: 'p',
        innerText: `In the screenshot, the <code>stat</code>'s value seems to aways be “-”. This indicates that the stat variable’s structure is not quite right, so we need to inspect it.`,
      },
      {
        type: 'p',
        innerText: `One way to inspect data in React Native is firing up the remote debugger, un-tab the Chrome window (otherwise RN will whine about background tabs),
        open dev tools, open the current file, set a breakpoint right before the <code>return</code> of the <code>render</code> function, reload the app,
        navigate in your app to this exact screen and scenario, pray for no source map bugs, and then inspect your received data.`,
      },
      {
        type: 'p',
        innerText: `We can do this more easily if we log our <code>stats</code> variable, navigate to this screen, and then check the console for the logged data.`,
      },
      {
        type: 'p',
        innerText: `But Fast Refresh enables us to go a step further:`,
      },
      {
        type: 'img',
        url: `statscode2.jpg`,
        alt: `Code about player stats`,
      },
      {
        type: 'p',
        innerText: `Due to the nature of the <code>render</code> function, each and every time it is called, every attribute of every element is evaluated to be then sent
        down as props.`,
      },
      {
        type: 'p',
        innerText: `However, here we don’t care about the “to be sent as props” part, we only care about the “is evaluated” part.`,
      },
      {
        type: 'p',
        innerText: `Assigning <code>console.log(stat)</code> to a completely arbitrary and non-existent attribute (in this case “dog” — a random string that I’ve found
          handy) and then saving to trigger Fast Refresh, our render function will fire, triggering an evaluation of our <code>dog</code> attribute.`,
      },
      {
        type: 'img',
        url: `console.jpg`,
        alt: `Console with code`,
      },
      {
        type: 'p',
        innerText: ` And, of course, we can now see that we actually need to spread <code>stat.content</code> and not <code>stat</code>, as our data was nested under
        <code>content</code>. Nice!`,
      },
      {
        type: 'p',
        innerText: `Happy coding!`,
      },
    ],
  },
  {
    id: '2',
    date: '11/04/2020',
    type: 'Tips & Tricks',
    title: 'How to Navigate To Parent Route From Nested Navigator in React Navigation',
    subtitle: 'When everything else fails, this trick gets you out of trouble.',
    body: [
      {
        type: 'h2',
        innerText: `The setup`,
      },
      {
        type: 'p',
        innerText: `So you have a structure similar to this:`,
      },
      {
        type: 'pre',
        innerText: `
  StackNavigator
    <b>Home</b>
    Login
    Authenticated -> CustomTabNavigator
        ScreenOne -> StackNavigator
            ScreenOneDetails
            ScreenOneSettings
        <b>ScreenTwo</b>`,
      },
      {
        type: 'p',
        innerText: `And you found yourself navigated to <code>Screen Two</code>.`,
      },
      {
        type: 'h2',
        innerText: `The problem`,
      },
      {
        type: 'p',
        innerText: `How do you navigate from <code>Screen Two</code> to <code>Home?</code>`,
      },
      {
        type: 'h2',
        innerText: `The solution(s)`,
      },
      {
        type: 'p',
        innerText: `Store your StackNavigator's reference globally, and use it freely wherever you need.`,
      },
      {
        type: 'p',
        innerText: `App.js (or wherever you render your <code>StackNavigator</code>)`,
      },
      {
        type: 'pre',
        innerText: `
  render() {
    return (
      &lt;StackNavigator 
        <b>ref={(x) => (global.stackNavigator = x)} </b>
      /&gt;)
    }`,
      },
      {
        type: 'p',
        innerText: `Any component:`,
      },
      {
        type: 'pre',
        innerText: `
  <b>global.stackNavigator</b>.dispatch(
    NavigationActions.navigate({
      routeName: 'Home',
      params: { },
    }),
    );`,
      },
      {
        type: 'h2',
        innerText: `Disclaimer`,
      },
      {
        type: 'p',
        innerText: `This solution is by any means not the recommended way of using navigators. Whenever you can, navigate using the <code>this.props.navigation.navigate()</code> as described in the official docs:`,
      },
      {
        type: 'a',
        url: 'https://reactnavigation.org/docs/navigating/',
        innerText: `https://reactnavigation.org/docs/navigating`,
      },
      {
        type: 'p',
        innerText: `However, there are cases which the official way doesn't support, such as a <b>navigator with dynamic routes constructed at runtime</b>:`,
      },
      {
        type: 'a',
        url: `https://reactnavigation.org/docs/4.x/limitations/`,
        innerText: `https://reactnavigation.org/docs/4.x/limitations/`,
      },
      {
        type: 'p',
        innerText: `Follow the entire Github issue here:`,
      },

      {
        type: 'a',
        url: `https://github.com/react-navigation/react-navigation/issues/335`,
        innerText: `https://github.com/react-navigation/react-navigation/issues/335`,
      },
    ],
  },
  {
    id: '3',
    date: '12/04/2020',
    type: 'Tutorial',
    title: 'How to Translate Your React Native App',
    subtitle: 'It\'s not a matter of "if", but "when". Let\'s see how.',
    body: [
      {
        type: 'h2',
        innerText: `Which library should you choose?`,
      },
      {
        type: 'p',
        innerText: `Any translation library that works for React will also do the trick for React Native. There's a about 5 or 6 main options that you could choose from:`,
      },
      {
        type: 'a',
        url: `https://phrase.com/blog/posts/react-i18n-best-libraries/`,
        innerText: `https://phrase.com/blog/posts/react-i18n-best-libraries/`,
      },
      {
        type: 'p',
        innerText: `But after counting up the pros and cons of each one, we decided to go with <a href="https://www.i18next.com/">i18next</a>. It's a library that offers a quick-enough "getting started" routine, as well as a ton of other plug-n-play features which you can opt in for later.`,
      },
      {
        type: 'p',
        innerText: `Let's get started!`,
      },
      {
        type: 'h2',
        innerText: `1. Install i18next`,
      },
      {
        type: 'p',
        innerText: `<code>npm install i18next --save</code>`,
      },
      {
        type: 'h2',
        innerText: `2. Create empty translation file for english`,
      },
      {
        type: 'p',
        innerText: `Create a file and put it in a folder that works best for you (e.g. <code>/translations/en.tsx</code>), and where you will later add translation files for all your supported languages. It should contain something like:`,
      },
      {
        type: 'pre',
        innerText: `
  const translation = {};
  export default translation;`,
      },
      {
        type: 'h2',
        innerText: `3. Initialize the library and supply it with the file you just created`,
      },
      {
        type: 'p',
        innerText: `Put this in your root component:`,
      },
      {
        type: 'pre',
        innerText: `
        
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  
  import en from './translation/en';

  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
    },
  });
        `,
      },
      {
        type: 'p',
        innerText: `The initizalization is pretty straightforward, but can take a ton of configuration options based on your needs. <a href="https://www.i18next.com/overview/configuration-options">See all of them here.</a>`,
      },
      {
        type: 'p',
        innerText: `Right now, we could just go and try it out: `,
      },
      {
        type: 'pre',
        innerText: `
    import <b>i18next</b> from 'i18next';
    render() {
      return (
        &lt;Text><b>i18next.t</b>('Hello world!')&lt;/Text>,
      )
    }`,
      },
      {
        type: 'h2',
        innerText: `4. Make the <code>t</code> function available globally`,
      },
      {
        type: 'p',
        innerText: `This is not a mandatory step, but will save us a lot of time during development.`,
      },
      {
        type: 'p',
        innerText: `Add this in your root component:`,
      },
      {
        type: 'pre',
        innerText: `
  import i18next from 'i18next';
  <b>global.T</b> = i18next.t;`,
      },
      {
        type: 'p',
        innerText: `Now, instead of <code>import</code>ing <code>18next</code> every time, we just call <code><b>T</b></code>:`,
      },
      {
        type: 'pre',
        innerText: `
    render() {
      return (
        &lt;Text><b>T</b>('Hello world!')&lt;/Text>
      )
    }`,
      },
      {
        type: 'p',
        innerText: `Shorter, cleaner, and quicker to write.`,
      },
      {
        type: 'p',
        innerText: `<i>Feel free to use <code>t</code> instead of <code>T</code>. We prefer it for visibility purposes.</i>`,
      },
      {
        type: 'h2',
        innerText: `5. Add strong typing to your <code>T</code> calls`,
      },
      {
        type: 'p',
        innerText: `Again, not mandatory, but with some TS magic and very little code, we can achieve static checking for our keys when calling <code>T</code>. Modify your previous code as follows:`,
      },
      {
        type: 'pre',
        innerText: `
  import i18next from 'i18next';
<b>
  import translation from './translation/en';

  type TranslationKeys = keyof typeof translation;

  function translate<K extends TranslationKeys>(key: K, options?: Object) {
    return i18next.t(key, options);
  }
</b>
  
  global.T = translate;
  `,
      },
      {
        type: 'p',
        innerText: `Now, whenever we try to translate using a non-existing key, we get a static compiler warning: `,
      },
      {
        type: 'img',
        url: `compilererror.jpg`,
        alt: `Compiler error`,
      },
      {
        type: 'h2',
        innerText: `6. NOT adding every single key by hand to our dictionary`,
      },
      {
        type: 'p',
        innerText: `So after we've wrapped code like <code>T('Some key')</code>, we need to somehow get our key into the translation file. `,
      },
      {
        type: 'p',
        innerText: `You could do that manually, but depending on the size of your project it might be really time consuming, and will definitely not feel like a coder's job.`,
      },
      {
        type: 'p',
        innerText: `Here's where one of <b>i18next</b>'s many features come into play. The tool that we will be using to do this for us is called <b>locize</b> (part of i18next). Read more about it and/or register for it <a href="https://locize.com/how-it-works.html">here</a>.`,
      },
      {
        type: 'p',
        innerText: `What it's gonna do for us: whenever we call <code>i18next.t</code> with a certain key, the library will automatically add it to a json that we can easily export and put into our project. Sweet!`,
      },
      {
        type: 'p',
        innerText: `Add the following to your init:`,
      },
      {
        type: 'pre',
        innerText: `
  import i18n from 'i18next';
  //install this before importing
  <b>import Backend from 'i18next-locize-backend';</b> 
  import { initReactI18next } from 'react-i18next';
  
  import en from './translation/en';

<b>
  const locizeOptions = {
    projectId: 'take it from locize',
    apiKey: 'same',
    referenceLng: 'en',
  };
</b>

  i18n
  .use(initReactI18next)<b>
  .use(Backend)</b>
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    <b>saveMissing: true,</b>
    resources: {
      en: {
        translation: en,
      },
    },
  });
        `,
      },
      {
        type: 'p',
        innerText: `Now if you navigate to a screen that uses the <code>T</code> function, your key will automatically be added to locize:`,
      },
      {
        type: 'img',
        url: `locize.jpg`,
        alt: `Locize service interface`,
      },
      {
        type: 'p',
        innerText: `And whenever you feel like it, export it to a JSON using the "...More" context menu in the top right. The JSON will look like this:`,
      },
      {
        type: 'pre',
        innerText: `
  {
    'Be the first to start a discussion!': 'Be the first to start a discussion!',
    'Drum roll for the': 'Drum roll for the',
    'Other key': 'Other key'
  }`,
      },
      {
        type: 'h2',
        innerText: `7. Changing the language`,
      },
      {
        type: 'p',
        innerText: `Wrap the component from which you want to change the language with the <code>withTranslation</code> HOC:`,
      },
      {
        type: 'pre',
        innerText: `
  export default withTranslation()(RootComponent)`,
      },
      {
        type: 'p',
        innerText: `And then it's as simple as calling`,
      },
      {
        type: 'pre',
        innerText: `
  this.props.i18n.changeLanguage(languageCode);`,
      },
      {
        type: 'p',
        innerText: `<code>languageCode</code> being one of the provided keys inside of<br/> <code>resources</code> in the i18next initialization object.`,
      },
      {
        type: 'h2',
        innerText: `8. And we're done!`,
      },
      {
        type: 'p',
        innerText: `There are still nice things you could do, such as putting your <code>T</code> inside of a custom <code>Text</code> component that you would use instead of the default one, to get you writing even less <code>T</code>s, but other than that, these steps will get you to a point in which you can get to a fully translation-ready app in as little as a day. And then it's just a matter of sending the files to the translators!`,
      },
    ],
  },
  {
    id: '4',
    date: '12/04/2020',
    type: 'Tips & Tricks',
    title: 'Use This Fast Refresh Trick To Quickly Debug Your React Native App',
    subtitle: 'Use this trick to inspect values and quickly solve bugs in your code',
    body: [
      {
        type: 'p',
        innerText: `React Native’s Fast Refresh feature is one of the hottest (pun intended) implementations out there when it comes to previewing code changes.`,
      },
      {
        type: 'p',
        innerText: `Due to this, apart from its contribution to a quicker, more efficient development flow, turns out to be a really helpful UI elements & data inspection tool as 
        well.`,
      },
      {
        type: 'h2',
        innerText: '1. Use Fast Refresh for Fixing Your UI',
      },
      {
        type: 'p',
        innerText: `Make a <code>bred</code> snippet that creates a red <code>border</code>, use it inside any element, hit <code>CMD+S</code> and see your
        element pop on screen. You can then adjust or enhance your element’s styling to your liking. Turns out to be just what you need 95% of the time.`,
      },
      {
        type: 'img',
        url: 'img/live-reload-ui.gif',
        alt: 'Live Reload demo gif',
      },
      {
        type: 'p',
        innerText: `This method will also mean you don’t have to open inspect pop-ups and menus and disrupt your coding workflow. Debug-as-you-go with this simple trick.`,
      },
      {
        type: 'h2',
        innerText: `2. Use Fast Refresh for Inspecting Data`,
      },
      {
        type: 'p',
        innerText: `An even more useful trick when using Fast Refresh is the ability to check the value of any variable from the current frame. Consider this example:`,
      },
      {
        type: 'img',
        url: `stats.jpg`,
        alt: `iOS Simulator top part`,
      },
      {
        type: 'p',
        innerText: ` This “Player Stats” screen is supposed to show <code>stats</code> of a player. But it looks like something is broken, and we need to find out what it
        is.`,
      },
      {
        type: 'p',
        innerText: `The code looks like this:`,
      },

      {
        type: 'pre',
        innerText: `
  &lt;View>
    {stats.map(stat => 
      &ltStat {...stat} />
    )}
  &lt;/View>
  
  ...

  export const Stat = ({ value = '', name }) => ...`,
      },
      {
        type: 'p',
        innerText: `In the screenshot, the stat's value seems to aways be “-”. This indicates that the stat variable’s structure has changed. We need to inspect it.`,
      },
      {
        type: 'p',
        innerText: `But instead of firing up the remote debugger, un-tabbing the Chrome window (or RN will whine about background tabs),
        opening dev tools, navigating to current file, setting a breakpoint and reloading the app, and only THEN being able to see our data, we can do this much, much easier with Fast Refresh.`,
      },
      {
        type: 'p',
        innerText: `Just add this in your markup:`,
      },
      {
        type: 'pre',
        innerText: `
  &lt;View>
  {stats.map(stat => 
    &lt;Stat <b>dog={console.log(stat)}</b> {...stat} />  
  )}
  &lt;/View>`,
      },
      {
        type: 'p',
        innerText: `Due to the nature of the <code>render</code> function, each and every time it is called, every attribute of every element is evaluated to be then sent
        down as props.`,
      },
      {
        type: 'p',
        innerText: `Assigning <code>console.log(stat)</code> to a completely arbitrary and non-existent attribute (in this case “dog” — a random string that I’ve found
          handy) and then saving to trigger Fast Refresh, our render function will fire, triggering an evaluation of our <code>dog</code> attribute.`,
      },
      {
        type: 'img',
        url: `console.jpg`,
        alt: `Console with code`,
      },
      {
        type: 'p',
        innerText: `And now we can easily see that we actually need to spread <code>stat.content</code> and not <code>stat</code>, as our data got nested under
        <code>content</code>.`,
      },
      {
        type: 'p',
        innerText: `Enjoy!`,
      },
    ],
  },
];
