<template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style><template>
  <div class="app dark-mode">
    <Header />
    <component :is="currentStep" @nextStep="goToNext" @prevStep="goToPrev" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Penawaran from './components/Penawaran.vue'
import Penyewaan from './components/Penyewaan.vue'
import Konfirmasi from './components/Konfirmasi.vue'
import Status from './components/Status.vue'

const steps = [Penawaran, Penyewaan, Konfirmasi, Status]
const stepIndex = ref(0)
const currentStep = computed(() => steps[stepIndex.value])

function goToNext() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function goToPrev() {
  if (stepIndex.value > 0) stepIndex.value--
}
</script>

<style>
.dark-mode {
  background: #111;
  color: #eee;
  min-height: 100vh;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
</style>
