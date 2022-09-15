import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Credits from '../../documentation/Credits.vue';

describe('Credits', () => {
  it('renders properly', () => {
    const wrapper = mount(Credits, {});
    expect(wrapper.html()).toContain('Lidija Roos');
  });
});
