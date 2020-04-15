module.exports = {
  date: '06/03/2020',
  type: 'Answer',
  title: 'How Do You Hide The Keyboard in React Native?',
  subtitle: '',
  body: [
    {
      type: 'h2',
      innerText: `1. Hiding The Keyboard in Response to A User Tap`,
    },
    {
      type: 'p',
      innerText: `This method will allow the user to be able to hide the keyboard when tapping almost anywhere on the screen outside of your <code>TextInput</code>'s area.`,
    },
    {
      type: 'p',
      innerText: `Wrap the content of your page with a <code>ScrollView</code>(if it is not already), and add the <code>keyboardDismissMode</code> property:`,
    },
    {
      type: 'pre',
      innerText: `
<ScrollView contentContainerStyle={{flexGrow: 1}}
  keyboardShouldPersistTaps='handled'
>
  <TextInput keyboardType='numeric'/>
</ScrollView>
      `,
    },
  ],
};
