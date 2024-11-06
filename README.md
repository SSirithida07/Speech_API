# Speech-to-Text and Text-to-Speech

This project uses Speech Recognition and Speech Synthesis technologies to convert speech to text and text to speech. It works in browsers that support the Web Speech API.

## Features

### 1. Speech-to-Text
This feature allows users to convert speech into text in the Thai language by speaking into a microphone. The text will be displayed in a `textarea` and updated in real-time as speech is converted.

- Supports continuous speech
- Automatically stops listening after 10 seconds of silence
- Start and stop buttons for controlling speech recognition

### 2. Text-to-Speech
This feature converts text input into speech. It uses the Text-to-Speech API to read aloud the text displayed on the webpage.

## How to Use

### Using Speech-to-Text:
1. Click the "Start Listening" button to start listening to the microphone.
2. Speak the text you want to convert into written form.
3. The converted text will be displayed in the `textarea`.
4. If no speech is detected for 10 seconds, listening will stop automatically.

### Using Text-to-Speech:
1. Type the text you want to convert into speech in the input box.
2. Click the "Convert Text to Speech" button.
3. The text will be read aloud immediately.

## Installation

This project can be used directly in a web browser that supports the Web Speech API.

1.  open the `main.html` file in your web browser. 
2. Start using the **Speech-to-Text** and **Text-to-Speech** features right away.

## Supported Browsers

The **Speech-to-Text** and **Text-to-Speech** features are supported in browsers that support the Web Speech API, including:

- Google Chrome
- Microsoft Edge
- Safari (some versions)
- Firefox (for Text-to-Speech only)

Please ensure that your browser supports these features.

## Further Development

If you'd like to develop further or add new features, such as supporting additional languages for Speech-to-Text or adding more control over Speech Synthesis, you can modify the code related to `SpeechRecognition` and `SpeechSynthesis` as needed.

## Limitations

- Some browsers may not fully support the **Speech-to-Text** or **Text-to-Speech** features.
- The **Speech-to-Text** feature might have lower accuracy depending on the microphone quality and background noise.


