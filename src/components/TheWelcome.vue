<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    <p>
      Explore the below examples or see the
      <a target="_blank" href="https://github.com/suterma/vue-peaks#vue-peaks">vue-peaks documentation on GitHub</a>.
    </p>

    <p>
      See the
      <a target="_blank" href="https://waveform.prototyping.bbc.co.uk/">peaks.js documentation</a>
      for detailed information about the options and tools.
    </p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Examples</template>

    See the below examples to get an idea how to use the wrapper components.
  </WelcomeItem>

</template>
