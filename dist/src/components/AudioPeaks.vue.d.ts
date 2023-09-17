import { type ShallowRef } from 'vue';
import { type PeaksInstance, type PeaksOptions as PeaksOptions } from 'peaks.js';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    src: {
        type: import("vue").PropType<string>;
    };
    video: {
        type: import("vue").PropType<boolean>;
    };
    eager: {
        type: import("vue").PropType<boolean>;
    };
    zoomviewElementId: {
        type: import("vue").PropType<string>;
    };
    zoomviewElement: {
        type: import("vue").PropType<HTMLDivElement>;
    };
    overviewElementId: {
        type: import("vue").PropType<string>;
    };
    overviewElement: {
        type: import("vue").PropType<HTMLDivElement>;
    };
    mediaElementId: {
        type: import("vue").PropType<string>;
    };
    mediaElement: {
        type: import("vue").PropType<HTMLMediaElement>;
    };
    options: {
        type: import("vue").PropType<PeaksOptions>;
    };
}, {
    /** The peaks.js instance is deliberately exposed, to allow direct use of the various APIs.
     * @remarks The instance is only available after the mounted lifecycle event and once
     * peaks.js has properly initialized.
     */
    peaksInstance: ShallowRef<PeaksInstance | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (error: Error) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: import("vue").PropType<string>;
    };
    video: {
        type: import("vue").PropType<boolean>;
    };
    eager: {
        type: import("vue").PropType<boolean>;
    };
    zoomviewElementId: {
        type: import("vue").PropType<string>;
    };
    zoomviewElement: {
        type: import("vue").PropType<HTMLDivElement>;
    };
    overviewElementId: {
        type: import("vue").PropType<string>;
    };
    overviewElement: {
        type: import("vue").PropType<HTMLDivElement>;
    };
    mediaElementId: {
        type: import("vue").PropType<string>;
    };
    mediaElement: {
        type: import("vue").PropType<HTMLMediaElement>;
    };
    options: {
        type: import("vue").PropType<PeaksOptions>;
    };
}>> & {
    onError?: ((error: Error) => any) | undefined;
}, {}, {}>, {
    overview?(_: {}): any;
    zoomview?(_: {}): any;
    default?(_: {}): any;
    controls?(_: {}): any;
}>;
export default _default;
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
