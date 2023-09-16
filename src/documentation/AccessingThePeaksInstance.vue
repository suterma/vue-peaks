<template>
  <div class="columns">
    <div class="column">
      <p>
        You might need to access the peaks.js instance to call various functions
        on their extensive
        <a href="https://github.com/bbc/peaks.js#api>">API</a>.
      </p>
      <p>
        In the hosting component, get a reference to the AudioPeaks child
        component and, for convenience, a directly computed property to the
        actual peaks.js instance:
      </p>
      <p>
        <highlightjs
          language="vue-typescript"
          code="/** Reference to the AudioPeaks component */
const audioPeaks = shallowRef<InstanceType<typeof AudioPeaks>>()

/** Accessor to the peaks instance from the AudioPeaks component
 * @remarks Allows access to the peaks.js instance 
 * to call various functions on the API.
 */
const peaksInstance = computed(() => audioPeaks.value?.peaksInstance);"
        />
      </p>
      <p>
        Now you can access the instance and it's methods by using the reference,
        like in this example:
      </p>
      <p>
        <highlightjs
          language="vue-typescript"
          code="/** Sets a bookmark at the current position
 */
function setBookmark() {
  const currentTime = peaksInstance.value?.player.getCurrentTime();
  if (currentTime) {
    peaksInstance.value?.points.add({
      time: currentTime
    });
    state.bookmark = currentTime;
  }
}"
        />
      </p>
      <p>
        Remember, that the instance is available only after the child has been
        mounted and peaks.js has been initialized.
      </p>
    </div>
  </div>
</template>
