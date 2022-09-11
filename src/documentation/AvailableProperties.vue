<script setup lang="ts">
</script>

<template>
  <div class="columns">
    <div class="column">
      <p>
        vue-peaks offers the following properties for customization:
      </p>
    </div>
    <div class="column">
      <highlightjs language='vue-typescript' code="const props = defineProps<{
  /** The audio source URL (for the 'simple' mode)
   * @remarks This URL is to be used internally with the default media slot
   * (no slot template or external media element id is expected)
   */
  src?: string;
  /** The unique identifier of an external zoomview element to use.
   * @remarks Allows the use of an external zoomview element.
   * (no slot template is expected or used for the zoomview)
   */
  zoomviewElementId?: string;
  /** The zoomview element to use.
   * @remarks Allows the use of an external zoomview element.
   * (no slot template is expected or used for the zoomview)
   */
  zoomviewElement?: HTMLDivElement;
  /** The unique identifier of an external overview element to use.
   * @remarks Allows the use of an external overview element.
   * (no slot template is expected or used for the overview)
   */
  overviewElementId?: string;
  /** The overview element to use.
   * @remarks Allows the use of an external overview element.
   * (no slot template is expected or used for the overview)
   */
  overviewElement?: HTMLDivElement;
  /** The unique identifier of an external media element to use. (for the 'external' mode)
   * @remarks Allows the use of an external media element.
   * (no slot template or audio source URL is expected)
   */
  mediaElementId?: string;
  /** The external media element to use. (for the 'external' mode)
   * @remarks Allows the use of an external media element.
   * (no slot template or audio source URL is expected)
   */
  mediaElement?: HTMLMediaElement;
  /** The peaks options to use.
   * @remarks The element references to the overview, zoomview and media element
   * should not be provided, because these are handled internally by AudioPeaks.
   * This removes the burden of management of the Vue ref lifecycle from the user.
   * @devdoc Refs to HTML elements can only be accessed after mount.
   * See https://vuejs.org/guide/essentials/template-refs.html#accessing-the-refs
   */
  options?: PeaksOptions;
}>();" />
    </div>
  </div>

</template>
 