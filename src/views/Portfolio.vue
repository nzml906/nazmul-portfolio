<template>
  <div class="portfolio-container">
    <div id="proyectos">
      <!-- title -->
      <div class="portfolio-container__head">
        <h1>Some projects</h1>
      </div>

      <!--desk-portfolio-->
      <div class="portfolio-container__desk">
        <div class="portfolio-container__desk__container">
          <div
            class="Desk-Folio-Item"
            v-for="(project, index) in projects"
            :key="index"
            :id="project.id"
            :data-index="index"
          >
            <!--porto-img-->
            <figure class="Desk-folio-image">
              <a @click="projectModal(project)">
                <!-- <v-lazy-image
                  class="lazy-img"
                  :src="project.img"
                  src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
                /> -->

                <img
                  :src="project.img"
                  alt=""
                  class="lazy-img"
                  src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
                />
                <div class="img-overlay">
                  {{ $t('message.portfolio.view') }}
                </div>
              </a>
            </figure>

            <!--porto-info-->
            <div
              class="Desk-folio-description"
              data-aos-duration="500"
              data-aos="zoom-in"
            >
              <a @click="projectModal(project)" class="details">
                {{ $t('message.portfolio.details') }}
              </a>
              <a @click="projectModal(project)" class="name">
                {{ project.titulo }}
              </a>
              <div class="skills-span">
                <span v-for="(skill, i) in project.skills" :key="i"
                  >{{ skill }},&nbsp;</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--mobile-portfolio-->
      <div class="portfolio-container__mobile">
        <div
          class="portfolio-container__mobile--item"
          v-for="(project, index) in projects"
          :key="index"
        >
          <figure class="portfolio-container__mobile--item--img">
            <!-- <v-lazy-image
              class="lazy-img"
              :src="project.img"
              src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
            /> -->

            <img
              :src="project.img"
              alt=""
              class="lazy-img"
              src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
            />
          </figure>

          <div class="portfolio-container__mobile--item--links">
            <div class="name">{{ project.titulo }}</div>

            <div class="skills-span">
              <span v-for="(skill, i) in project.skills" :key="i"
                >{{ skill }},&nbsp;</span
              >
            </div>
          </div>

          <div class="portfolio-container__mobile--item--btn">
            <a class="mobileProBtn" :href="project.linkSitio" target="_blank">
              <font-awesome-icon
                class="mobileProBtn-icon"
                :icon="['fas', 'link']"
              />demo
            </a>

            <a class="mobileProBtn" :href="project.linkGithub" target="_blank">
              <font-awesome-icon
                class="mobileProBtn-icon"
                :icon="['fab', 'github']"
              />source
            </a>
          </div>
        </div>
      </div>
    </div>

    <!--modal-->
    <transition name="projectModalAppear">
      <div v-show="showProjectModal" class="projectDetailsModal">
        <div v-if="currentProjectModal" class="modalContent">
          <div class="modalCloseBtn">
            <div class="close-btn" @click="closeModalProject">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>

          <div class="desktModal-title">{{ currentProjectModal.titulo }}</div>

          <div class="desktModal-description">
            <div class="modalProjectDetails">
              {{ currentProjectModal.details }}
            </div>

            <div class="modalToolsLabels">
              <span
                v-for="(herramienta, i) in currentProjectModal.herramientas"
                :key="i"
                class="tool"
                >{{ herramienta }}&nbsp;</span
              >
            </div>

            <div class="modalButtons">
              <a
                :href="currentProjectModal.linkSitio"
                target="_blank"
                class="modalButton-1"
              >
                <font-awesome-icon
                  class="modalButton-icon"
                  :icon="['fas', 'link']"
                />view live
              </a>

              <a
                :href="currentProjectModal.linkGithub"
                target="_blank"
                class="modalButton-2"
              >
                <font-awesome-icon
                  class="modalButton-icon"
                  :icon="['fab', 'github']"
                />view on github
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <Footer></Footer>
  </div>
</template>

<script>
import projects from '@/data/projects.js';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer
  },
  data() {
    return {
      currentProjectModal: null,
      showProjectModal: false,
      projects
    };
  },
  methods: {
    projectModal(obj) {
      this.currentProjectModal = obj;
      this.showProjectModal = true;
    },
    closeModalProject() {
      this.showProjectModal = false;
    }
  },
  created() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
};
</script>
