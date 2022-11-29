var videos = [];

const SavedVideos = [
  { 'name': 'video1' },
  { 'name': 'video2' },
  { 'name': 'video3' },
  { 'name': 'video4' },
  { 'name': 'video5' },
  { 'name': 'video6' }
];

// Create an instance of a db object for us to store our database in
let db;

// Finds the lowest index in videos that is not filled
function getNextUnusedVideoIndex() {
  for (let i = 0; i < videos.length; i++) {
    if (videos[i] == null || videos[i] == "")
      return i;
  }
  return videos.length;
}


// Define the storeVideo() function
function storeVideo(mp4Blob, name) {
  // Open transaction, get object store; make it a readwrite so we can write to the IDB
  let objectStore = db.transaction(['videos_os'], 'readwrite').objectStore('videos_os');
  // Create a record to add to the IDB
  let record = {
    mp4: mp4Blob,
    name: name
  }

  // Add the record to the IDB using add()
  let request = objectStore.add(record);

  request.onsuccess = function () {
    console.log('Record addition attempt finished');
  }

  request.onerror = function () {
    console.log(request.error);
  }

}

function updateStoredVideo(mp4Blob, name) {
  // Open transaction, get object store; make it a readwrite so we can write to the IDB
  let objectStore = db.transaction(['videos_os'], 'readwrite').objectStore('videos_os');
  // Create a record to add to the IDB
  let record = {
    mp4: mp4Blob,
    name: name
  }

  // Add the record to the IDB using add()
  let request = objectStore.put(record);

  request.onsuccess = function () {
    console.log('Record successfully updated');
  }

  request.onerror = function () {
    console.log(request.error);
  }

}

function deleteStoredVideo(name) {
  console.log("Trying to delete data with key " + name);

  // Open transaction, get object store; make it a readwrite so we can write to the IDB
  let objectStore = db.transaction(['videos_os'], 'readwrite').objectStore('videos_os');

  // delete the record from the IDB using delete()
  let request = objectStore.delete(name);

  request.onsuccess = function () {
    console.log('Record successfully deleted');
  }

  request.onerror = function () {
    console.log(request.error);
  }
}

// Define the displayVideo() function
function displayVideo(mp4Blob, title) {
  // Create object URLs out of the blobs
  let mp4URL = URL.createObjectURL(mp4Blob);
  //let webmURL = URL.createObjectURL(webmBlob);

  // Create DOM elements to embed video in the page
  /*const article = document.createElement('article');
  const h2 = document.createElement('h2');
  h2.textContent = title;
  const video = document.createElement('video');
  video.controls = true;
  const source1 = document.createElement('source');
  source1.src = mp4URL;
  source1.type = 'video/mp4';
  const source2 = document.createElement('source');
  source2.src = webmURL;
  source2.type = 'video/webm';*/

  const section = document.getElementsByClassName('vid')[0];
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  h2.textContent = title;
  const video = document.createElement('video');
  video.controls = true;
    video.width = "320";
            video.height = "240";
  const source1 = document.createElement('source');
  source1.src = mp4URL;
  source1.type = 'video/mp4';
  const source2 = document.createElement('source');
  source2.src = mp4URL;
  source2.type = 'video/webm';

  // Embed DOM elements into page
  section.appendChild(article);
  article.appendChild(h2);
  article.appendChild(video);
  video.appendChild(source1);
  video.appendChild(source2);

  console.log("Display videos done");
}



function showVideo() {
  var vid = document.getElementById("record2");
  //console.log(videos);
  var video1 = JSON.parse(localStorage.getItem("videos"));
  console.log("after parse" + video1);
  // videoArr=video1.split(',');
  // console.log(videoArr);
  // vid.src=videoArr[0];
  vid.src = video1[0];
  console.log(vid.src);
}



window.onload = function () {
  


  function init() {
    console.log("initial");
    console.log(SavedVideos);
    // Loop through the video names one by one
    for (let i = 0; i < SavedVideos.length; i++) {
      // Open transaction, get object store, and get() each video by name
      let objectStore = db.transaction('videos_os').objectStore('videos_os');
      let request = objectStore.get(SavedVideos[i].name);
      request.onsuccess = function () {
        // If the result exists in the database (is not undefined)
        if (request.result) {
            //calibration.html/example.html
          if (document.URL.includes("calibration.html")) {
            console.log('taking videos from IDB');
            displayVideo(request.result.mp4, request.result.name);
          }
          //storeVideo(blob0,SavedVideos[i]);
        }
      };

      request.onerror = function () {
        console.log("Error loading videos!");
      }
      }
    }

  

  //newly add IndexedDB, calibration.html
  if (document.URL.includes("calibration.html")) {
    const section = document.querySelector('section');
      console.log("load calibration.html");
  }
  // Create constants
  //const section = document.querySelector('section');





  // Open our database; it is created if it doesn't already exist
  // (see onupgradeneeded below)
  let request = window.indexedDB.open('videos_db', 9);

  // onerror handler signifies that the database didn't open successfully
  request.onerror = function () {
    console.log('Database failed to open');
  };

  // onsuccess handler signifies that the database opened successfully
  request.onsuccess = function (e) {
    /*db = e.target.result;
    console.log('Database opened succesfully');
    var clearReq = db.transaction(['videos_os'], 'readwrite').objectStore('videos_os').clear();
    clearReq.onsuccess = function (event) {
      console.log("Cleared object store!");
    }
    clearReq.onerror = function (event) {
      console.log("Failed to clear object store");
    }*/
    // Store the opened database object in the db variable. This is used a lot below
    db = request.result;
    init();
  };

  // Setup the database tables if this has not already been done
  request.onupgradeneeded = function (e) {

    // Grab a reference to the opened database
    let db = e.target.result;

    // Create an objectStore to store our videos in (basically like a single table)
    // including a auto-incrementing key
    //db.deleteObjectStore('videos_os');
    let objectStore = db.createObjectStore('videos_os', { keyPath: 'name' });

    // Define what data items the objectStore will contain
    objectStore.createIndex('mp4', 'mp4', { unique: false });
    //objectStore.createIndex('webm', { unique: false });

    console.log('Database setup complete');
  };

  if (document.URL.includes("miming.html")) {
    //Code here
      for (let x = 0; x < 6; x++) {
     //document.getElementById("start"+x).style.display="none";
     document.getElementById("vid"+x).style.display="none";
  }
    navigator.mediaDevices.getUserMedia(constraintObj)
      .then(function (mediaStreamObj) {
        //connect the media stream to the first video element
        let video = document.querySelector('video');
        if ("srcObject" in video) {
          video.srcObject = mediaStreamObj;
        } else {
          //old version
          video.src = window.URL.createObjectURL(mediaStreamObj);
        }
        video.onloadedmetadata = function (ev) {
          //show in the video element what is being captured by the webcam
          video.play();
        };
  
        //$("#start"+j).show();
        //$("#vid"+j).show();
        //create an array to store videos
  
        let start = document.getElementById("start1");
        start.style.display = "block";
        let stop = document.getElementById("stop");
  
        let preview = document.getElementById("preview");
        let redo = document.getElementsByClassName("redo");
  
        let mRecorder = true;
        var pid = "";
  
        // let vidSave = document.getElementById("vid1");
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        let redoRecorder = new MediaRecorder(mediaStreamObj);
        //let chunks = [[],[],[],[],[],[]];
        // let redoChunks=[[],[],[],[],[],[]];
        let chunk = [];
        let redoChunk = [];
  
        start.addEventListener('click', (ev) => {
          mRecorder = true;
          mediaRecorder.start();
          console.log(mediaRecorder.state);
  
        })
        //
        for (let j = 0; j < redo.length; j++) {
          redo[j].addEventListener('click', (ev) => {
            // console.log("redo click");
            redoRecorder.start();
  
            console.log(redoRecorder.state);
            mRecorder = false;
  
            pid = ev.target.parentNode.id;
            pid = pid.charAt(3);
  
          })
        }
  
        for (let k = 0; k < 6; k++) {
          document.getElementById("delete" + k).addEventListener('click', (e) => {
            //delete video[k] from videos array
            videos[k] = "";
            //decrease index
            if (k == videos.length) {
              document.getElementById("video" + k).remove();
            }
            else {
              for (let n = k; n < videos.length; n++) {
                document.getElementById("video" + n).src = videos[n];
              }
            }

            // delete video from indexedDB
            deleteStoredVideo(SavedVideos[k].name);
          })
        }
  
        stop.addEventListener('click', (ev) => {
          document.getElementById('write').style.display = "block";
          if (mRecorder) {
            mediaRecorder.stop();
            console.log(mediaRecorder.state);
            //stream.style.display="none";
          }
          else {
            redoRecorder.stop();
            console.log(redoRecorder.state);
          }
  
  
        });
        mediaRecorder.ondataavailable = function (ev) {
  
          chunk.push(ev.data);
          console.log(chunk);
  
        }
        redoRecorder.ondataavailable = function (ev) {
          redoChunk.push(ev.data);
        }
        mediaRecorder.onstop = (ev) => {
          let curVidIndex = getNextUnusedVideoIndex();
          console.log("next index is " + curVidIndex);
          var vidSavei = document.getElementById('vid' + curVidIndex);
          console.log(curVidIndex);
          vidSavei.style.display = "block";
          // vidSavei.width="320";
          // vidSavei.height="240";
  
          var mp4Blob = new Blob(chunk, { 'type': 'video/mp4;' });
          let videoURL = window.URL.createObjectURL(mp4Blob);
          storeVideo(mp4Blob, SavedVideos[curVidIndex].name);
          console.log("videoURL" + curVidIndex + " is " + videoURL);
          videos[curVidIndex] = videoURL;
  
  
          //release video memory
          chunk = [];
  
          // let blob = new Blob(chunks[i], { 'type' : 'video/mp4;' });
          // //chunks = [];
          // console.log(chunks[i]);
          
          if (document.getElementById("video" + curVidIndex)) {
            var vid = document.getElementById("video" + curVidIndex);
            vid.src = videos[curVidIndex];
            vid.controls = true;
            vid.width = "320";
            vid.height = "240";
          }
          else {
            var vtry = document.createElement("video");
            var idx = document.createElement("p");
            idx.innerHTML = "Video" + (curVidIndex + 1);
            vidSavei.appendChild(idx);
            vtry.id = "video" + curVidIndex;
            vtry.src = videos[curVidIndex];
            vtry.controls = true;
            vtry.width = "320";
            vtry.height = "240";
            vidSavei.appendChild(vtry);
            // localStorage.setItem("url1",videoURL1);
            // vidSavei.src = videoURL;
            console.log(videos);
          }

          localStorage.setItem("videos", JSON.stringify(videos));
        }
  
        redoRecorder.onstop = (ev) => {
          let mp4Blob = new Blob(redoChunk, { 'type': 'video/mp4;' });
          redoChunk = [];
          let redoURL = window.URL.createObjectURL(mp4Blob);
          document.getElementById("video" + pid).src = redoURL;
          videos[pid] = redoURL;
          updateStoredVideo(mp4Blob, SavedVideos[pid].name);
        }
  
  
  
      })
      .catch(function (err) {
        console.log(err.name, err.message);
      });
  }

}