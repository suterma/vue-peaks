import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Credits from '../../documentation/Credits.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Credits, {});
    expect(wrapper.text()).toContain('Lidija Roos');
  });
});
