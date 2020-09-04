<template>
  <section class="container is-fluid">
    <h2
      class="title is-size-4-mobile is-size-2-tablet has-text-primary newclass_nosimplantations"
    >Nos implantations</h2>
    <section class="newclass_nosimplantations">
      <article class="columns" id="implantation.implantation_names">
        <ul
          class="column mt-4 is-size-7-touch is-size-3-mobile"
          v-for="implantation in implementations"
          :key="implantation.id"
        >
          <li>
            <strong>{{ implantation.localisation }}</strong>
          </li>
          <li :id="implantation.name">{{ full(implantation.name)}}</li>
          <li>contact@rintio.com, {{ implantation.contact }}</li>
          <figure class="image_nosimplantations">
            <g-image
              :src="implantation.src"
              :alt="implantation.alt"
              :title="implantation.title"
              :width="implantation.title"
              :height="implantation.title"
              fit="contain"
              class="image_contenu"
            />
          </figure>
        </ul>
      </article>
    </section>
  </section>
</template>
<script>
function findTrueDate(country) {
  var now = new Date(); //Time where you are
  var offset_country;
  var thegmt;
  //alert(now.getUTCHours());
  if (country == "cotonou_benin") {
    offset_country = 1;
    thegmt = "GMT+1";
  }
  if (country == "abidjan_cote_d_ivoire") {
    offset_country = 0;
    thegmt = "GMT+1";
  }
  if (country == "paris_france") {
    var day = now.getUTCDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    if (month > 3 && month < 10) {
      offset_country = 2;
      thegmt = "GMT+2";
    } else if (month == 3 || month == 10) {
      var fin_month = new Date(year + "," + month + ",31");
      var day_fin_month = fin_month.getDay();
      var last_sunday = 31 - day_fin_month;
      var fulldate_lastsunday = new Date(
        year + "," + month + "," + last_sunday
      );
      if (last_sunday > day) {
        //  alert("GMT+1 car denier dimanche est supérieure à la date soit "+last_sunday+">"+day);
        offset_country = 1;
        thegmt = "GMT+1";
      } else if (last_sunday < day) {
        // alert("GMT+2 car denier dimanche est inférieure à la date"+last_sunday+"<"+day);
        offset_country = 2;
        thegmt = "GMT+2";
      } else {
        if (month == 3 && now.getUTCHours() >= 2) {
          // alert("GMT+2 car l'heure du dernier dimanche est  supérieure ou égale à 2  "+now.getHours());
          //
          offset_country = 2;
          thegmt = "GMT+2";
        } else if (month == 10 && now.getUTCHours() <= 3) {
          // alert("GMT+2 car l'heure du dernier dimanche est  inférieure ou égale à 1 "+now.getHours());
          offset_country = 2;
          thegmt = "GMT+2";
        } else {
          // alert("GMT+1 car horaire incorrecte"+now.getHours());
          offset_country = 1;
          thegmt = "GMT+1";
        }
      }
    }
  }
  var offset = offset_country * 3600000;
  now.setTime(now.getTime() + offset + now.getTimezoneOffset() * 60000);
  var ladate;
  ladate = now.getSeconds();
  // return ladate;
  return (
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds() +
    " " +
    thegmt
  );
}
function publishdate() {
  var date = findTrueDate("abidjan_cote_d_ivoire");
  var now = new Date(); //Time where you are
  if (date != now.getSeconds() + 1) {
    return alert(date);
  }
  // return setTimeout(findTrueDate(country),1000);

  //return setTimeout(findTrueDate(country), 2000);
}
//publishdate();
//publishdate();
export default {
  data() {
    return {
      isImageModalActive: "ADIO",
      counter: 0,
      implementations: {
        cotonou_benin: {
          name: "cotonou_benin",
          localisation: "Cotonou, Bénin",
          horaire: findTrueDate("cotonou_benin"),
          //horaire: 6,
          contact: "+229 97 11 94 79",
          src: "images/cotonou_benin.svg",
          alt: "Cotonou, Bénin",
          title: "Cotonou, Bénin",
          width: "535",
          height: "334",
        },
        abidjan_cote_d_ivoire: {
          name: "abidjan_cote_d_ivoire",
          localisation: "Abidjan, Côte d'ivoire",
          horaire: findTrueDate("abidjan_cote_d_ivoire"),
          // horaire: 6,
          contact: "+225 58 08 74 21",
          src: "images/abidjan_cote_d_ivoire.svg",
          alt: "Abidjan, Côte d'ivoire",
          title: "Abidjan, Côte d'ivoire",
          width: "536",
          height: "334",
        },
        paris_france: {
          name: "paris_france",
          localisation: "Paris, France",
          horaire: findTrueDate("paris_france"),
          //horaire: 6,
          contact: "+33 6 25 18 40 11",
          src: "images/paris_france.svg",
          alt: "Paris, France",
          title: "Paris, France",
          width: "536",
          height: "334",
        },
      },
    };
  },
  methods: {
    carousel(zone) {
      document.getElementById(zone).innerHTML = findTrueDate(zone);
    },
    full(zone) {
      setTimeout(this.carousel, 10, zone);
      setTimeout(this.full, 1000, zone);
    },
  },
};
</script>
<style>
.newclass_nosimplantations {
  margin-top: 50px;
}
.image_nosimplantations {
  position: relative;
  margin: auto;
  overflow: hidden;
  margin-bottom: 50px;
}
.image_nosimplantations .image_contenu {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
}
.image_nosimplantations:hover .image_contenu {
  transform: scale(1.1);
}
</style>