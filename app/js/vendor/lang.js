window.addEventListener('DOMContentLoaded', () => {
  // maps
  const logoLang = {
    'es': currentLogoGeo('es'),
    'pt': currentLogoGeo('pt'),
    'it': currentLogoGeo('it'),
    'gr': currentLogoGeo('gr'),
    'ro': currentLogoGeo('ro'),
    'bg': currentLogoGeo('bg')
  }
  const actionIcons = {
    'es': currentIconsGeo('es'),
    'pt': currentIconsGeo('pt'),
    'it': currentIconsGeo('it'),
    'gr': currentIconsGeo('gr'),
    'ro': currentIconsGeo('ro'),
    'bg': currentIconsGeo('bg')
  }
  const doctorVersionHero = {
    1: doctorVersionImg('1', 'hero'),
    2: doctorVersionImg('2', 'hero'),
    3: doctorVersionImg('3', 'hero')
  }
  const doctorVersionPresent = {
    1: doctorVersionImg('1', 'presentation'),
    2: doctorVersionImg('2', 'presentation'),
    3: doctorVersionImg('3', 'presentation')
  }
  const doctorVersionCompanion = {
    1: doctorVersionImg('1', 'companion'),
    2: doctorVersionImg('2', 'companion'),
    3: doctorVersionImg('3', 'companion')
  }
  // maps

  let htmlLang = document.querySelector('html').lang;
  const htmlDoctorVersion = document.querySelector('html').dataset.version;
  const logoImg = document.querySelector('.header-logo__img');
  const actionIcon = document.querySelector('.header-action__img');
  const doctorImgHero = document.querySelector('.hero-box__img');
  const doctorImgPresentation = document.querySelector('.presentation-doctor');
  const doctorImgCompanion = document.querySelector('.companion-info__avatar');



  Number(htmlDoctorVersion) <= Object.keys(doctorVersionHero).length ? doctorImgHero.src = doctorVersionHero[htmlDoctorVersion] : doctorImgHero.src = doctorVersion[1];
  Number(htmlDoctorVersion) <= Object.keys(doctorVersionPresent).length ? doctorImgPresentation.src = doctorVersionPresent[htmlDoctorVersion] : doctorImgPresentation.src = doctorVersion[1];
  Number(htmlDoctorVersion) <= Object.keys(doctorVersionCompanion).length ? doctorImgCompanion.src = doctorVersionCompanion[htmlDoctorVersion] : doctorImgCompanion.src = doctorVersion[1];


  Object.keys(logoLang).map(item => {
    if (item != htmlLang) {
      document.querySelector('html').lang = 'pt';
      document.querySelector('.header').dataset.header = 'pt';
      document.querySelector('.hero').dataset.hero = 'pt';
      logoImg.src = logoLang['pt'];
      actionIcon.src = actionIcons['pt'];      
    } else {
      logoImg.src = logoLang[htmlLang];
      actionIcon.src = actionIcons[htmlLang];
      document.querySelector('.header').dataset.header = htmlLang;
      document.querySelector('.hero').dataset.hero = htmlLang;
    }
  })



  function currentLogoGeo(lang) {
    return `./images/dest/header/${lang}/header-logo.png`
  }

  function currentIconsGeo(lang) {
    return `./images/dest/header/${lang}/action-icons.png`
  }

  function doctorVersionImg(version, section) {
    return `./images/dest/${section}/doctor/item-${version}.jpg`
  }
})