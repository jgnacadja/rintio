<template>
  <section class="container is-fluid">
    <section>
      <div class="columns bottom-footer" id="app">
        <form class="column vue-form is-6-tablet is-12-mobile" @submit.prevent="submit">
          <!--<div class="error-message">
            <p v-show="!email.valid">Oh, please enter a valid email address.</p>
          </div>-->
          <fieldset>
            <div>
              <label class="label" for="name">Nom</label>
              <input type="text" name="name" id="name" required v-model="name" />
            </div>
            <div>
              <label class="label" for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                :class="{ email , error: !email.valid }"
                v-model="email.value"
              />
            </div>

            <div>
              <label class="label" for="object">Objet</label>
              <input type="text" name="object" id="object" required :v-model="object" />
            </div>

            <div>
              <label class="label" for="textarea">Message</label>
              <textarea
                class="message"
                name="textarea"
                id="textarea"
                required
                v-model="message.text"
                :maxlength="message.maxlength"
              ></textarea>
              <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
            </div>
            <div>
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  </section>
</template>
<script>
//var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export default {
  data: function () {
    return {
      name: "",
      email: {
        value: "",
        valid: true,
      },
      object: {
        value: "",
      },
      message: {
        text: ``,
        maxlength: 255,
      },
      submitted: false,
    };
    /*methods: { 
                // submit form handler
                submit: function() {
                this.submitted = true;
                },
                // validate by type and value
                validate: function(type, value) {
                if (type === "email") {
                    this.email.valid = this.isEmail(value) ? true : false;
                }
                },
                // check for valid email adress
                isEmail: function(value) {
                return emailRegExp.test(value);
                },
            },
            watch: {
                // watching nested property
                "email.value": function(value) {
                this.validate("email", value);
                }
                },*/
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400");

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
.container {
  min-height: 50vh;
}

#app {
  display: flex;
}

.vue-form {
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 4px;
  margin-left: 1%;
}

.vue-form div {
  position: relative;
  margin: 20px 0;
}
.vue-form h4,
.vue-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.vue-form .label {
  display: block;
}
.vue-form input,
.vue-form textarea,
.vue-form label {
  color: #2b3e51;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea {
  display: block;
  width: 100%;
  appearance: none;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}

.vue-form .vue-form-list {
  margin-top: 16px;
}
.vue-form .vue-form-list::after {
  clear: both;
  content: "";
  display: table;
}
.vue-form .vue-form-list li {
  display: inline-block;
  position: relative;
  user-select: none;
  margin: 0 26px 16px 0;
  float: left;
}

.vue-form textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}
.vue-form input[type="submit"] {
  border: none;
  background: #2c3e50;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;
}
.no-touch .vue-form input[type="submit"]:hover {
  background: #42a2e1;
}
.vue-form input[type="submit"]:focus {
  outline: none;
  background: #2b3e51;
}
.vue-form input[type="submit"]:active {
  transform: scale(0.9);
}
.vue-form .error-message {
  height: 35px;
  margin: 0px;
}
.vue-form .error-message p {
  background: #e94b35;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
  padding: 16px;
}
.vue-form .error {
  border-color: #e94b35 !important;
}
.vue-form .counter {
  background-color: #ecf0f1;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 10px;
  padding: 4px;
}

@-webkit-keyframes cd-bounce {
  0%,
  100% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.8);
  }
}
@-moz-keyframes cd-bounce {
  0%,
  100% {
    -moz-transform: scale(1);
  }
  50% {
    -moz-transform: scale(0.8);
  }
}
@keyframes cd-bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
}

.bottom-footer {
  padding-bottom: 5%;
}
</style>