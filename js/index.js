let originalText = ''; // Declare the global variable
let textarea;
let comp;
let compElement;
let report;
let uniqueId;
var audioButton;
var comButton;
let manualText = '';
let errordetect1 = '';
let errordetect2 = '';
let errordetect3 = '';
let toggleCheckbox = '';
let isToggleSelected = false;

document.addEventListener('DOMContentLoaded', function () {
  // Get the checkbox element
  toggleCheckbox = document.getElementById('toggleCheckbox');

  // Add event listener to the checkbox
  toggleCheckbox.addEventListener('change', function () {
    // Update the value of the variable based on checkbox state
    isToggleSelected = this.checked;
    if (isToggleSelected) {
      isToggleSelected = true;
      // Do something when toggle button is selected
    } else {
      isToggleSelected = false;
      // Do something when toggle button is not selected
    }
  });

  // Now you can use the isToggleSelected variable elsewhere in your code

  var originalTextArea = document.getElementById('OriginalText');
  var manualTextArea = document.getElementById('maualText');
  uploadButton = document.querySelector('.upload-button');
  comButton = document.querySelector('.compare-button');
  textarea = document.getElementById('google');
  comp = document.getElementsByClassName('comp');
  report = document.getElementsByClassName('report123');
  errordetect1 = document.getElementsByClassName('errordetect1');
  errordetect2 = document.getElementsByClassName('errordetect2');
  errordetect3 = document.getElementsByClassName('errordetect3');
  // console.log(report[0]);
  // Add an event listener for the 'input' event
  originalTextArea.addEventListener('input', function () {
    // Log the input value to the console
    originalText = this.value;
  });
  manualTextArea.addEventListener('input', function () {
    // Log the input value to the console
    manualText = this.value;
  });
});
function disableUploadButton(type) {
  // Find the button element
  // var uploadButton = document.querySelector('.upload-button');
  let button;
  if (type === 'upload') {
    button = document.querySelector('.upload-button');
    // console.log(button);
    button.disabled = true;
    return;
  } else if (type === 'compare') {
    button = document.querySelector('.compare-button');
    // console.log(button);
    button.disabled = true;
    return;
  }
}

// console.log(comp);
let url =
  'https://firebasestorage.googleapis.com/v0/b/test-9233a.appspot.com/o/audios%2FAVI%202.wav?alt=media&token=a8352d03-abf9-425a-b077-3ab83a7da8e5';
const firebaseConfig = {
  apiKey: 'AIzaSyCjCM6G2Bb6DUF9DSpK0lFSWAKhsKj9OCI',
  authDomain: 'test-9233a.firebaseapp.com',
  projectId: 'test-9233a',
  storageBucket: 'test-9233a.appspot.com',
  messagingSenderId: '943318464055',
  appId: '1:943318464055:web:ade59a27815c8010e4b1b2',
  measurementId: 'G-Y2VY5WB0TP',
};
firebase.initializeApp(firebaseConfig);

var fileText = document.querySelector('.fileText');
var uploadPercentage = document.querySelector('.uploadPercentage');
var progress = document.querySelector('.progress');
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector('.img');
let fileUrl;
function getFile(e) {
  console.log(e);
  fileItem = e.target.files[0];
  fileName = fileItem.name;
  fileText.innerHTML = fileName;
}

async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

async function compareAudio(type, id) {
  if (type === 'final') {
    // showSpinner('spinner3');
  }

  // Show spinner before the asynchronous operation
  const apiUrl = ' http://127.0.0.1:5000/process_audio';
  let options;
  if (type === 'audio') {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        audio_url: fileUrl,
        id: id,
      }),
    };
  } else {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        original_text: originalText,
        manual_text: manualText,
      }),
    };
  }

  console.log(apiUrl, 'starting');

  try {
    const result = await fetchData(apiUrl, options);
    console.log(apiUrl, 'finishing', result);
    if (type === 'final') {
      // hideSpinner('spinner3');
    }
    return result;
  } catch (error) {
    // Handle errors here if necessary
    console.error('Error:', error);
  } finally {
    // hideSpinner('spinner3'); // Hide spinner after the asynchronous operation (whether it succeeds or fails)
  }
}

async function openAi(type, id) {
  if (type === 'final') {
    // showSpinner('spinner4');
  }
  // showSpinner('spinner4'); // Show spinner before the asynchronous operation
  const apiUrl = ' http://127.0.0.1:8000/process/';
  let options;
  if (type === 'audio') {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        audio_url: fileUrl,
        id: id,
      }),
    };
  } else {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        original_text: originalText,
        manual_text: manualText,
      }),
    };
  }

  console.log(apiUrl, 'starting');

  try {
    const result = await fetchData(apiUrl, options);
    console.log(apiUrl, 'finishing', result);
    if (type === 'final') {
      // hideSpinner('spinner4');
    }
    return result;
  } catch (error) {
    // Handle errors here if necessary
    console.error('Error:', error);
  } finally {
    // hideSpinner('spinner4'); // Hide spinner after the asynchronous operation (whether it succeeds or fails)
  }
}

async function vkosApi(type, id) {
  if (type === 'final') {
    // showSpinner('spinner4');
  }
  // Show spinner before the asynchronous operation

  const apiUrl = 'http://127.0.0.1:5001/process_audio';
  let options;
  if (type === 'audio') {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        audio_url: fileUrl,
        id: id,
      }),
    };
  } else {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        original_text: originalText,
        manual_text: manualText,
      }),
    };
  }

  console.log(apiUrl, 'starting');

  try {
    const result = await fetchData(apiUrl, options);
    console.log(apiUrl, 'finishing', result);
    if (type === 'final') {
      // hideSpinner('spinner4');
    }
    return result;
  } catch (error) {
    // Handle errors here if necessary
    console.error('Error:', error);
  } finally {
    // hideSpinner('spinner5'); // Hide spinner after the asynchronous operation (whether it succeeds or fails)
  }
}
let audioPlayer;
function generateUniqueId() {
  // Generate a random part
  const randomPart = Math.random().toString(36).substring(2, 10);

  // Generate a timestamp part
  const timestampPart = new Date().getTime().toString(36);

  // Combine the random and timestamp parts
  const uniqueId = randomPart + timestampPart;

  return uniqueId;
}
// Wait for the DOM content to loaduniqueId
document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the audio player
  audioPlayer = document.getElementById('uploaded-audio');
});

function uploadAudio() {
  // Show the spinner with ID "spinner1"
  // showSpinner('spinner1');
  document.getElementById('spinner1').style.display = 'block';
  console.log('doing');

  let storageRef = firebase.storage().ref('audios/' + fileName);
  let uploadTask = storageRef.put(fileItem);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      percentVal = Math.floor(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log(percentVal);
      uploadPercentage.innerHTML = percentVal + '%';
      progress.style.width = percentVal + '%';
    },
    (error) => {
      console.log('Error is ', error);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        fileUrl = url;
        console.log(fileUrl);

        // Set the source of the audio player
        audioPlayer.src = fileUrl;

        // Hide the spinner when the upload is completelog
        // hideSpinner('spinner1');
        document.getElementById('spinner1').style.display = 'none';
        uniqueId = generateUniqueId();

        const result1Promise = compareAudio('audio', uniqueId);
        const result2Promise = vkosApi('audio', uniqueId);
        const result3Promise = openAi('audio', uniqueId);
        console.log(`starting audio to backend with this id ${uniqueId}`);
        disableUploadButton('upload');
        alert('Audio Uploaded');
      });
    }
  );
}

// // Function to show the spinner by ID
// function showSpinner(spinnerId) {
//   document.getElementById(spinnerId).style.display = 'block';
// }

let bigArray = [];
class wordDeacting {
  constructor(index, word, color, clas) {
    // This is the constructorlog
    this.index = index;
    this.word = word;
    this.color = color;
    this.clas = clas;
    let emptyObject = new Object();
    emptyObject.word = word;
    emptyObject.index = index;
    emptyObject.color = color;
    emptyObject.clas = clas;

    bigArray[index] = emptyObject;
  }
}
function removeUntilDifferentClass(arr) {
  let lastIndex = arr.length - 1;
  while (lastIndex >= 0 && arr[lastIndex].Class === 'Deletion') {
    arr.pop();
    lastIndex--;
  }
  return arr;
}

function generateHighlightedHTML(merged, pauses, hesitations, selfCorrections) {
  let html = ''; // Initialize the HTML string
  let data = merged;
  if (isToggleSelected) {
    let updated = removeUntilDifferentClass(data);
    data = updated;
  }

  // Store words already processed to prevent duplicate markings
  const processedWords = new Set();

  // Process each element in the merged data
  data.forEach((element) => {
    // Calculate duration in seconds
    const duration =
      element.Timing && element.Timing.End && element.Timing.Start
        ? (element.Timing.End - element.Timing.Start).toFixed(2)
        : 0;

    // Create an HTML string for each span with the corresponding class and inline style
    let spanHTML = `<span class="tooltip" style="background-color: ${element.Color}; margin-right: 5px;">`;

    // Add word content
    spanHTML += `${element.Word}`;

    // Add tooltip if timing exists and color is not 'Red'
    if (
      element.Timing &&
      Object.keys(element.Timing).length > 0 &&
      element.Color !== 'Red'
    ) {
      spanHTML += `
        <span class="tooltiptext">
          Start Time: ${element.Timing.Start}<br>
          End Time: ${element.Timing.End}<br>
          Duration: ${duration}s<br>
        </span>`;
    }

    // Close the span tag
    spanHTML += '</span>';

    // Concatenate the HTML string to the result
    html += spanHTML;

    // Check if the current word has a pause or hesitation and hasn't been processed yet
    if (!processedWords.has(element.Word)) {
      const pauseWord = pauses.find((pause) => pause[0] === element.Word);
      const hesitationWord = hesitations.find(
        (hesitation) => hesitation[0] === element.Word
      );

      // Add '-' or '---' after the word if a pause or hesitation is found
      if (pauseWord) {
        // Format the pause duration to two decimal points
        const pauseDuration = parseFloat(pauseWord[1]).toFixed(2);
        // Add a pause marker with a background color and a tooltip for the pause duration
        html += `<span class="pause" style="background-color: lightblue; font-size: larger;" title="Pause: ${pauseDuration}s">[-]</span>`;
        processedWords.add(element.Word);
      } else if (hesitationWord) {
        // Add a hesitation marker with a background color and a tooltip for the hesitation duration
        html += `<span class="hesitation" style="background-color: lightcoral; font-size: larger;" title="Hesitation: ${hesitationWord[1]}s">[--]</span>`;
        processedWords.add(element.Word);
      }
    }
  });

  // Add self-corrections
  selfCorrections.forEach((selfCorrection) => {
    html += `<span class="self-correction">${selfCorrection[0]}</span>`;
  });

  // Reset bigArray
  bigArray = [];

  return html;
}

async function handleApi() {
  // showSpinner('spinner2');
  document.getElementById('spinner2').style.display = 'block';
  disableUploadButton('compare');
  const paragraphs = document.querySelectorAll('p.orignal-test-brief');
  paragraphs.forEach((paragraph) => {
    // Set the text content of each paragraph to the originalText
    paragraph.textContent = originalText;
  });

  try {
    const startTime = performance.now();
    // Corrected the comment to mention openAi
    const result1Promise = compareAudio('final', uniqueId);
    const result2Promise = vkosApi('final', uniqueId);
    const result3Promise = openAi('final', uniqueId);
    console.log(`starting final respons to backend with this id ${uniqueId}`);
    // Display results as soon as they are available for any URL
    const result1 = await result1Promise;
    // console.log(result1);

    // document.getElementById('google').textContent = result1.transcribed_text;
    let targetElement1 = document.getElementById('Words-Reads');
    targetElement1.textContent = result1.error_metrics.WR;

    let targetElement2 = document.getElementById('Words-Correct');
    targetElement2.textContent = result1.error_metrics.WC;

    let targetElement3 = document.getElementById('Words-Correct-Perr');
    targetElement3.textContent =
      result1.error_metrics['Words Correct per Minute'];

    let targetElement4 = document.getElementById('Deletions');
    targetElement4.textContent = result1.deleted_words.length;

    let targetElement5 = document.getElementById('Insertions');
    targetElement5.textContent = result1.inserted_words.length;

    let targetElement6 = document.getElementById('Repetitions');
    // targetElement6.textContent = result1.analysis_result['word_repetitions'];

    let targetElement7 = document.getElementById('Substitutions');
    targetElement7.textContent = result1.substituted_words.length;

    let targetElement8 = document.getElementById('Pauses');
    targetElement8.textContent = result1.pauses.length;
    console.log('google pauses', result1.pauses.length);

    let targetElement9 = document.getElementById('Hesitations');
    targetElement9.textContent = result1.hesitations.length;
    console.log('google hesitations', result1.hesitations.length);

    let targetElement10 = document.getElementById('Self');
    targetElement10.textContent = result1.self_corrections.length;
    console.log('google self_corrections', result1.self_corrections);
    const htmlContent1 = generateHighlightedHTML(
      result1.merged,
      result1.pauses,
      result1.hesitations,
      result1.self_corrections
    );
    document.getElementById('tooltipParagraph1').innerHTML = htmlContent1;

    let targetElement11 = document.getElementById('Skipped');
    targetElement11.textContent = result1.skipped_lines;

    let targetElement12 = document.getElementById('Jumped');
    targetElement12.textContent = 2;

    let targetElement13 = document.getElementById('Duplicate');
    targetElement13.textContent = result1.duplicate_lines;

    let targetElement14 = document.getElementById('Accuracy');
    targetElement14.textContent = result1.accuracy.toFixed(2) + '%';

    let targetElement15 = document.getElementById('audio-duration');
    targetElement15.textContent = `${result1.audio_duration} sec`;

    let targetElement16 = document.getElementById('transcription');
    targetElement16.textContent = 0;

    let targetElement17 = document.getElementById('transcription-orginal-text');
    targetElement17.textContent = result1.original_vs_audio.toFixed(2) + '%';

    let targetElement18 = document.getElementById('Manual-transcription');
    targetElement18.textContent = result1.manualVsTrans.toFixed(2) + '%';

    let targetElement19 = document.getElementById('Manual-original');
    targetElement19.textContent = result1.manualVsorginal.toFixed(2) + '%';

    const result2 = await result2Promise;

    // document.getElementById('vkos').textContent = result2.transcribed_text;
    let targetElement20 = document.getElementById('Words-Reads-1');
    targetElement20.textContent = result2.error_metrics.WR;

    let targetElement21 = document.getElementById('Words-Correct-1');
    targetElement21.textContent = result2.error_metrics.WC;

    let targetElement22 = document.getElementById('Words-Correct-Perr-1');
    targetElement22.textContent = Math.floor(
      result2.error_metrics['Words Correct per Minute']
    );

    let targetElement23 = document.getElementById('Deletions-1');
    targetElement23.textContent = result2.deleted_words.length;

    let targetElement24 = document.getElementById('Insertions-1');
    targetElement24.textContent = result2.inserted_words.length;

    let targetElement25 = document.getElementById('Repetitions-1');
    // targetElement25.textContent = result2.analysis_result['word_repetitions'];

    let targetElement26 = document.getElementById('Substitutions-1');
    targetElement26.textContent = result2.substituted_words.length;

    let targetElement27 = document.getElementById('Pauses-1');
    targetElement27 = result2.pauses.length;
    console.log('vosk pauses', result2.pauses.length);

    let targetElement100 = document.getElementById('Hesitations-1');
    targetElement100.textContent = result2.hesitations.length;
    let targetElement29 = document.getElementById('Self-1');
    targetElement29.textContent = result2.self_corrections.length;
    console.log('vosk self_corrections', result2.self_corrections.length);
    const htmlContent2 = generateHighlightedHTML(
      result2.merged,
      result2.pauses,
      result2.hesitations,
      result2.self_corrections
    );
    // console.log(htmlContent2);
    document.getElementById('tooltipParagraph2').innerHTML = htmlContent2;

    let targetElement30 = document.getElementById('Skipped-1');
    targetElement30.textContent = result2['skipped_lines'];

    let targetElement31 = document.getElementById('Jumped-1');
    targetElement31.textContent = 3;

    let targetElement32 = document.getElementById('Duplicate-1');
    targetElement32.textContent = result2['duplicate_lines'];

    let targetElement33 = document.getElementById('Accuracy-1');
    targetElement33.textContent = result2.accuracy.toFixed(2) + '%';

    let targetElement34 = document.getElementById('audio-duration-1');
    targetElement34.textContent = result2.audio_duration;

    let targetElement35 = document.getElementById('transcription-1');
    targetElement35.textContent = 0;

    let targetElement36 = document.getElementById(
      'transcription-orginal-text-1'
    );
    targetElement36.textContent = result2.original_vs_audio.toFixed(2) + '%';

    let targetElement37 = document.getElementById('Manual-transcription-1');
    targetElement37.textContent = result2.manualVsTrans.toFixed(2) + '%';

    let targetElement38 = document.getElementById('Manual-original-1');
    targetElement38.textContent = result2.manualVsorginal.toFixed(2) + '%';
    console.log('vkos', htmlContent2);

    // console.log(htmlContent3);
    const result3 = await result3Promise;

    // document.getElementById('OpenAI').textContent = result3.transcribed_text;
    let targetElement39 = document.getElementById('Words-Reads-2');
    targetElement39.textContent = result3.error_metrics.WR;

    let targetElement40 = document.getElementById('Words-Correct-2');
    targetElement40.textContent = result3.error_metrics.WC;

    let targetElement41 = document.getElementById('Words-Correct-Perr-2');
    targetElement41.textContent = Math.floor(
      result3.error_metrics['Words Correct per Minute']
    );

    let targetElement42 = document.getElementById('Deletions-2');
    targetElement42.textContent = result3.deleted_words.length;

    let targetElement43 = document.getElementById('Insertions-2');
    targetElement43.textContent = result3.inserted_words.length;

    let targetElement44 = document.getElementById('Repetitions-2');
    // targetElement44.textContent = result3.error_metrics.WR;

    let targetElement45 = document.getElementById('Substitutions-2');
    targetElement45.textContent = result3.substituted_words.length;

    let targetElement46 = document.getElementById('Pauses-2');
    targetElement46.textContent = result3.pauses.length;
    console.log('openai pauses', result3.pauses.length);

    let targetElement47 = document.getElementById('Hesitations-2');
    targetElement47.textContent = result3.hesitations.length;
    console.log('openai hesitations', result3.hesitations.length);

    let targetElement48 = document.getElementById('Self-2');
    targetElement48.textContent = result3.self_corrections.length;
    console.log('openai self_corrections', result3.self_corrections.length);

    const htmlContent3 = generateHighlightedHTML(
      result3.merged,
      result3.pauses,
      result3.hesitations,
      result3.self_corrections
    );
    document.getElementById('tooltipParagraph3').innerHTML = htmlContent3;

    let targetElement49 = document.getElementById('Skipped-2');
    targetElement49.textContent = result3['skipped_lines'];

    let targetElement50 = document.getElementById('Jumped-2');
    targetElement50.textContent = 0;

    let targetElement51 = document.getElementById('Duplicate-2');
    targetElement51.textContent = 0;

    let targetElement52 = document.getElementById('Accuracy-2');
    targetElement52.textContent = result3.accuracy.toFixed(2) + '%';

    let targetElement53 = document.getElementById('audio-duration-2');
    targetElement53.textContent = result3.audio_duration;

    let targetElement54 = document.getElementById('transcription-2');
    targetElement54.textContent = 0;

    let targetElement55 = document.getElementById(
      'transcription-orginal-text-2'
    );
    targetElement55.textContent = result3.original_vs_audio.toFixed(2) + '%';

    let targetElement56 = document.getElementById('Manual-transcription-2');
    targetElement56.textContent = result3.manualVsTrans.toFixed(2) + '%';

    let targetElement57 = document.getElementById('Manual-original-2');
    targetElement57.textContent = result3.manualVsorginal.toFixed(2) + '%';
    // result3.error_metrics.WR;
    console.log('openAi', htmlContent3);

    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    console.log(`Time taken : ${timeTaken} milliseconds`);
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
  } finally {
    // hideSpinner('spinner1');
    // hideSpinner('spinner2');
    document.getElementById('spinner2').style.display = 'none';
  }
}

// function showSpinner(spinnerId) {
//   document.getElementById(spinnerId).style.display = 'block';
// }

// function hideSpinner(spinnerId) {
//   document.getElementById(spinnerId).style.display = 'none';
// }
