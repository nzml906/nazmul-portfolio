<template>
  <div class="skillz-container">
    <div id="skills">
      <div class="skillz-container__head">
        <h1>Progressive skills</h1>
      </div>
      <div class="skillz-container__grid">
        <div
          class="Skillz-Item"
          v-for="(skill, index) in skills"
          :key="index"
          :id="skill.id"
          :data-index="index"
        >
          <div
            class="Skillz-Description"
            data-aos-duration="500"
            data-aos="zoom-in"
          >
            <a class="skillz-name">{{ skill.title }}</a>
            <div class="skillz-span">
              <span v-for="(skilll, i) in skill.skill" :key="i"
                >{{ skilll }} | &nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import skills from '@/data/skills.js';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer
  },
  data() {
    return {
      skills: skills
    };
  },
  created() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
};
</script>
