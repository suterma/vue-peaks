<script setup lang="ts">
import {
    ref,
    shallowRef,
    onMounted,
    type ShallowRef,
    onBeforeUnmount,
} from 'vue';
import Peaks, { type PeaksOptions } from 'peaks.js';

const props = defineProps<{
    /** The audio source URL (for the "simple" mode)
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

    /** The unique identifier of an external media element to use. (for the "external" mode)
     * @remarks Allows the use of an external media element.
     * (no slot template or audio source URL is expected)
     */
    mediaElementId?: string;

    /** The external media element to use. (for the "external" mode)
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
    options?: Peaks.PeaksOptions;
}>();

/** The peaks instance MUST NOT be deeply reactive for performance reasons.
 * @devdoc See https://github.com/bbc/peaks.js/issues/406#issuecomment-1225885020 in peaks.js
 * and this documentation https://vuejs.org/api/reactivity-advanced.html#shallowref about shallow references
 */
const peaksInstance = shallowRef<Peaks.PeaksInstance | undefined>(undefined);
const overview = shallowRef(null);
const overviewSlot = shallowRef(null);
const zoomview = shallowRef(null);
const zoomviewSlot = shallowRef(null);
const audio = shallowRef(null);
const audioSlot = shallowRef(null);
const zoomLevel = shallowRef<number | undefined>(undefined);

onMounted(() => {
    createPeaksInstance();
});

onBeforeUnmount(() => {
    destroyPeaksInstance();
});

/** Initializes the peaks instance
 * @remarks If no options are provided by the respective component property, some default options are used.
 * @devdoc Must be called only after mount, because the expected HTML elements must be addressable already by their id.
 * @devdoc A currently unused variant for referencing an audio element from the template via reference uses
 * // reference on the component level
 * const audio = shallowRef(null);
 * // getting the element
 * (audio.value as unknown as HTMLAudioElement)
 */
function createPeaksInstance() {
    console.debug('AudioPeaks::createPeaksInstance:options:', props.options);

    const overviewElement = get<HTMLDivElement>(
        props.overviewElement,
        props.overviewElementId,
        overview,
        overviewSlot,
        'div'
    );
    const zoomviewElement = get<HTMLDivElement>(
        props.zoomviewElement,
        props.zoomviewElementId,
        zoomview,
        zoomviewSlot,
        'div'
    );
    const mediaElement = get<HTMLMediaElement>(
        props.mediaElement,
        props.mediaElementId,
        audio,
        audioSlot,
        'audio'
    );

    if (props.options) {
        (props.options.containers = {
            overview: overviewElement,
            zoomview: zoomviewElement,
        }),
            (props.options.mediaElement = mediaElement);
    }

    const options: PeaksOptions = props.options
        ? props.options
        : {
            containers: {
                overview: overviewElement,
                zoomview: zoomviewElement,
            },
            mediaElement: mediaElement,
            webAudio: {
                audioContext: new AudioContext(),
            },
            zoomLevels: [256, 512, 1024, 2048, 4096],
        };

    Peaks.init(options, function (err, peaks) {
        console.error(err);
        peaksInstance.value = peaks;
        zoomLevel.value = peaks?.zoom.getZoom();
    });
}

/** Destroys the peaks instance
 */
function destroyPeaksInstance() {
    peaksInstance.value?.destroy();
}

/** Gets the HTML element to act upon, using the first of the provided options
 * @remarks This is either (first in the following order)
 * - the element provided as object
 * - the element provided by id
 * - the element from the (internal) slot template
 * - the first element from a provided external slot template
 * If none is found 'undefined' is returned, which will throw an error in peaks.js
 * @param elm The element
 * @param htmlElementId The HTML element id
 * @param ref The reference to the element
 * @param slotRef The reference to the slot containing the element
 * @param slotRefHtmlTagName The required tag name of the element in the slot //TODO later remove this parameter by selecting by the HTML element type
 * @return The found element or undefined if none is found
 */
function get<HEType extends HTMLElement>(
    elm: HEType | undefined,
    htmlElementId: string | undefined,
    ref: ShallowRef,
    slotRef: ShallowRef,
    slotRefHtmlTagName: string
): HEType | undefined {
    if (elm) {
        console.debug('AudioPeaks::Found elm: ', elm);
        return elm;
    }
    if (htmlElementId) {
        console.debug('AudioPeaks::Found element by id: ', htmlElementId);
        return document.getElementById('' + htmlElementId) as unknown as HEType;
    }

    // The reference can be used only with the default slot
    const elementByRef = ref.value as unknown as HEType;
    if (elementByRef) {
        console.debug('AudioPeaks::Found element by Ref: ', elementByRef);
        return elementByRef;
    }

    // With external slot templates, the element can not be referenced with a ref directly
    // (because external slot templates can not set refs to enclosed elements from the outside)
    // First get a reference to the slot then find the first element of the given type
    const externalSlot = slotRef.value as unknown as HTMLElement;
    if (externalSlot) {
        const elementByFirstInSlot = externalSlot.getElementsByTagName(
            slotRefHtmlTagName
        )[0] as unknown as HEType;
        if (elementByFirstInSlot) {
            console.debug(
                'AudioPeaks::Found element by first in slot: ',
                elementByFirstInSlot
            );
            return elementByFirstInSlot;
        }
    }
}

function zoomIn(): void {
    peaksInstance.value?.zoom.zoomIn();
    zoomLevel.value = peaksInstance.value?.zoom.getZoom();
}
function zoomOut(): void {
    peaksInstance.value?.zoom.zoomOut();
    zoomLevel.value = peaksInstance.value?.zoom.getZoom();
}
</script>

<template>
    <div ref="overviewSlot">
        <!-- If an external overview element is referenced, the overview slot is not used -->
        <slot name="overview" v-if="!props.overviewElementId && !props.overviewElement">
            <div class="peaks-overview" ref="overview"></div>
        </slot>
    </div>

    <div ref="zoomviewSlot">
        <!-- If an external zoomview element is referenced, the zoomview slot is not used -->
        <slot name="zoomview" v-if="!props.zoomviewElementId && !props.zoomviewElement">
            <div class="peaks-zoomview" ref="zoomview"></div>
        </slot>
    </div>

    <div ref="audioSlot">
        <!-- If an external media element is referenced, the default slot is not used -->
        <slot name="default" v-if="!props.mediaElementId && !props.mediaElement">
            <!-- The default content slot for the "slot" mode -->
            <audio class="peaks-audio" ref="audio" controls>
                <source :src="src" />
            </audio>
        </slot>
    </div>
    <slot name="controls">
        <div class="peaks-controls">
            <button @click="zoomIn()">Zoom in</button>&nbsp;
            <button @click="zoomOut()">Zoom out</button>&nbsp;
            <span>Zoom level: {{ zoomLevel }}</span>
        </div>
    </slot>
</template>

<style scoped>
.peaks-audio,
.peaks-overview,
.peaks-zoomview {
    width: 100%;
}

.peaks-overview,
.peaks-zoomview {
    height: 100px;
}
</style>
