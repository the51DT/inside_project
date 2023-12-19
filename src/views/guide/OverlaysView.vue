<template>
  <div>
    <title-input title="modal" />
    <title-input title="modal" type="gray" />
    <ButtonCmp
      bdBtn="base"
      btnSize="small"
      btnTxt="modal"
      @click="openBtn('modal')"
    />
    <ButtonCmp
      bdBtn="base"
      btnSize="small"
      btnTxt="success-modal"
      @click="openBtn('success-modal')"
    />
    <br />
    <ButtonCmp
      bgBtn="base"
      btnSize="small"
      btnTxt="modal-bottom"
      @click="openBtn('modal-bottom')"
    />
    <ButtonCmp
      bgBtn="base"
      btnSize="small"
      btnTxt="modal-bottom2"
      @click="openBtn('modal-bottom2')"
    />
    <ButtonCmp
      bgBtn="base"
      btnSize="small"
      btnTxt="modal-bottom3"
      @click="openBtn('modal-bottom3')"
    />
    <modal-center id="modal">
      <template v-slot:title>
        <h4>Modal Title</h4>
      </template>
      <template v-slot:body>
        <div class="popup--body__contnet">
          Write your detailed description for this modal here
        </div>
      </template>
      <template v-slot:footer>
        <ButtonCmp bdBtn="base" btnSize="small" btnTxt="Action" />
        <ButtonCmp
          bgBtn="base"
          btnSize="small"
          btnTxt="Action"
          @click="closeBtn($event)"
        />
      </template>
    </modal-center>

    <modal-center id="success-modal">
      <template v-slot:title>
        <h4 class="success">Modal Title</h4>
      </template>
      <template v-slot:body>
        <div class="popup--body__contnet">
          Write your detailed description for this modal here
        </div>
      </template>
      <template v-slot:footer>
        <ButtonCmp bdBtn="base" btnSize="small" btnTxt="Action" />
        <ButtonCmp
          bgBtn="base"
          btnSize="small"
          btnTxt="Action"
          @click="closeBtn($event)"
        />
      </template>
    </modal-center>

    <modal-bottom id="modal-bottom">
      <template v-slot:title> </template>
      <template v-slot:body>
        <button class="restore">Restore This Note</button>
        <button class="deleteBtn">Delete Note</button>
      </template>
      <template v-slot:footer>
        <button class="closeBtn" @click="closeBtn($event)">
          <span>close</span>
        </button>
      </template>
    </modal-bottom>

    <modal-bottom id="modal-bottom2">
      <template v-slot:title> </template>
      <template v-slot:body>
        <div class="bg--list">
          <bg-choice :bglist="bglist" />
        </div>
        <div class="extras">
          <p class="extras__title">EXTRAS</p>
          <ul>
            <li :key="list" v-for="list in lists">
              <button :data-icon="list.type">{{ list.text }}</button>
            </li>
          </ul>
        </div>
        <button class="deleteBtn">Delete Note</button>
      </template>
      <template v-slot:footer>
        <button class="closeBtn" @click="closeBtn($event)">
          <span>close</span>
        </button>
      </template>
    </modal-bottom>

    <modal-bottom id="modal-bottom3">
      <template v-slot:title> </template>
      <template v-slot:body>
        <div class="popup--body__contnet">
          <div class="notification">
            <div class="notification--title">
              <h5>Notes Pinned Successfully</h5>
            </div>
            <div class="notification--descript">
              <p>This note already displayed on pinned section</p>
            </div>
          </div>
          <ButtonCmp
            bgBtn="base"
            btnSize="small"
            btnTxt="Close"
            @click="closeBtn($event)"
          />
        </div>
      </template>
      <template v-slot:footer>
        <button class="closeBtn" @click="closeBtn($event)">
          <span>close</span>
        </button>
      </template>
    </modal-bottom>
    <task-bar />
    <nav-bar title="" rightBtn="" />
    <nav-bar title="" rightBtn="setting" />
    <nav-bar title="" rightBtn="action" />
    <nav-bar title="title" rightBtn="" />
    <nav-bar title="title" rightBtn="setting" />
    <nav-bar title="title" rightBtn="action" />
  </div>
</template>

<script>
/* eslint-disable */
import BgChoice from '@/components/fragments/BgChoice.vue'
export default {
  components: { BgChoice },
  data() {
    return {
      lists: [
        { type: '1', text: 'Set Reminder', flag: 'Not set' },
        { type: '2', text: 'Change Note Type', flag: 'Buying Some...' },
        { type: '3', text: 'Give Label', flag: 'Not set' },
        { type: '4', text: 'Mark as Finished', flag: '' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.notification {
  &--title {
    h5 {
      font-weight: 700;
      font-size: rem(20px);
      line-height: rem(28px);
      color: $neutral-dark;
    }
  }
  &--descript {
    p {
      font-weight: 400;
      font-size: rem(16px);
      line-height: rem(22px);
      color: $neutral-darkgrey;
    }
  }
}
.restore {
  width: 100%;
  line-height: rem(56px);
  color: $neutral-dark;
  font-size: rem(16px);
  font-weight: 500;
}
.deleteBtn {
  margin-top: rem(8px);
  width: 100%;
  text-align: left;
  line-height: rem(56px);
  color: $error-base;
  font-size: rem(16px);
  font-weight: 500;
  border: none;
}
.extras {
  &__title {
    font-size: rem(10px);
    line-height: rem(12px);
    color: $neutral-darkgrey;
  }
  ul {
    margin-top: rem(8px);
    li {
      button {
        display: block;
        line-height: rem(56px);
        border: none;
      }
    }
  }
}
.closeBtn {
  width: rem(24px);
  height: rem(24px);
  background-color: $neutral-lightgrey;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  background-image: url('@/assets/images/icon/setting_x.svg');
  background-position: center;
  background-repeat: no-repeat;
  span {
    @include ally-hidden;
  }
}
</style>
