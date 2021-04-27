<template>
  <div class="book-reader">
    <!-- Tìtulo -->
    <h2 class="book-title">{{ $book.title }}</h2>
    <div class="gallery-container">
      <!-- Miniaturas -->
      <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div v-for="page in $book.pages" :key="page.id" class="swiper-slide">
            <img src="@/assets/img/page.svg" />
            {{ page.pageNumber }}
          </div>
        </div>
      </div>
      <!-- Texto Principal -->
      <div class="swiper-container gallery-main">
        <div class="swiper-wrapper">
          <div
            v-for="page in $book.pages"
            :key="page.id"
            class="swiper-slide page"
            v-html="page.text"
          ></div>
        </div>
      </div>
    </div>
    <!-- Botões -->
    <div class="buttons">
      <div class="swiper-button-unique-prev">
        <img src="@/assets/img/arrow.svg" />
      </div>
      <div class="swiper-button-unique-next">
        <img id="right-arrow" src="@/assets/img/arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'swiper/swiper-bundle.css'
// eslint-disable-next-line import/no-named-as-default
import Swiper from 'swiper/bundle'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    }
  },

  mounted() {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      breakpoints: {
        992: {
          direction: 'vertical',
          slidesPerView: 4,
          height: 835,
          width: 300
        }
      },
      width: 300,
      height: 835,
      centeredSlides: false,
      centeredSlidesBounds: true,
      slidesPerView: 2,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: 'horizontal',
      mousewheel: true
    })

    const galleryMain = new Swiper('.gallery-main', {
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-unique-next',
        prevEl: '.swiper-button-unique-prev'
      },
      thumbs: {
        swiper: galleryThumbs
      },
      keyboard: {
        enabled: true
      }
    })

    galleryMain.on('transitionStart', () => {
      galleryThumbs.slideTo(galleryThumbs.activeIndex)
    })
    galleryThumbs.on('transitionStart', () => {
      galleryMain.slideTo(galleryMain.activeIndex)
    })
  }
})
</script>

<style lang="scss" scoped>
.gallery-container {
  display: grid;
  grid-gap: 1.5rem;
  height: 879px;
  grid-template-columns: 148px 1fr;
  margin-top: 1.5rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
    height: auto;
  }
}

.gallery-thumbs {
  .swiper-wrapper {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 0.7rem;
    @include screen('small', 'medium') {
      grid-auto-flow: column;
    }
  }

  .swiper-slide {
    border: 1px solid color(dark);
    background: #ffffff;
    cursor: pointer;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 1em;
    border-radius: 12px;
    grid-gap: 1em;

    @include screen('large', 'infinity') {
      padding: 1em 1.25em;
      grip-gap: 0;
    }

    &:hover {
      border: 2.5px solid color(dark);
    }

    &-thumb-active {
      border: 3px solid color(dark, darkest);
      &:hover {
        border: 3px solid color(dark, darkest);
      }
    }
  }
}

.gallery-main {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: -1px 4px 21px 3px rgba(0, 0, 0, 0.2);
  .swiper-slide {
    line-height: 1.5rem;
    padding: 4em 3em 3em;
  }
}

.buttons {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 2.5em 2.5em;
  grid-template-rows: 2.5em;
  grid-gap: 0.5em;
  justify-content: end;
  transition: 0.25s;
  .swiper-button-unique {
    &-prev,
    &-next {
      background-color: #292929;
      display: grid;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 20px;
      transition: 0.25s;
      &:hover {
        background-color: black;
      }
    }
    &-next {
      transform: rotate(180deg);
    }
  }
}

.swiper-button-disabled {
  opacity: 0.38;
  &:hover {
    cursor: default;
    background-color: #292929;
  }
}
</style>
