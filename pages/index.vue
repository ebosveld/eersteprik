<template>
  <div class="container flex flex-col mx-auto h-screen">
    <div class="bg-pink-700 text-white w-40 h-14 ml-6 flex justify-center">
      <span class="pt-4 font-bold uppercase tracking-wider">EerstePrik<span class="font-normal">.nl</span></span>
      </div>
    <div class="w-screen place-content-center flex-grow flex flex-col text-center">
      <vaccination-counter />
    </div>
    <footer class="pb-2 px-3 flex flex-row text-xs justify-between items-center">
      <div class="text-gray-400">
        Bron: <a class="underline" href="https://www.rivm.nl/covid-19-vaccinatie/cijfers-vaccinatieprogramma">RIVM</a> (bijgewerkt op {{ lastUpdated }}) &amp; CBS (bevolkingstelling op 1 maart 2021)
      </div>
      <div class="self-end">
        <a href="https://github.com/ebosveld/eersteprik" class="text-gray-400 hover:text-gray-500 transition-colors duration-200">
          <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
    </footer>
  </div>
</template>

<script lang="js">
import getShareImage from '@jlengstorf/get-share-image';
import getSiteMeta from "~/utils/getSiteMeta.js";
import numeral from 'numeral';

export default {
  async asyncData({store, $moment}){
    const percentagePartially = numeral(store.state.percentagePartiallyVaccinated).format('0.[00]%');
    const percentageFully = numeral(store.state.percentageFullyaccinated).format('0.[00]%');
    const lastUpdated = $moment(store.state.lastUpdated).format('DD MMMM');
    const socialImage = getShareImage({
        title: `${percentagePartially}`,
        tagline:  `heeft een eerste prik gehad op ${lastUpdated}`,
        cloudName: 'duau4ijyn',
        imagePublicID: 'socialmedia-template_t2mzn9.png',
        titleExtraConfig: '_line_spacing_-10',
        titleFont: 'ngdk69vmj13i1vjtu4if.ttf',
        titleFontSize: '72',
        taglineFontSize: '48',
        taglineFont: 'yg4i8tydo5d7jmyebjsh.ttf',
        textColor: 'fff',
        textLeftOffset: '100',
        titleBottomOffset: '350',
        taglineTopOffset: '340'
      });

    return { socialImage, lastUpdated }
  },
  computed: {
    meta() {
      const metaData = {
        mainImage: this.socialImage,
      };
      return getSiteMeta(metaData);
    }
  },
  head() {
    return {
      meta: this.meta
    }
  }
}
</script>
