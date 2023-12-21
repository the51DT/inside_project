<template>
  <div>
    <div class="nav-bar__fixed">
      <NavBar back="Back" />
    </div>
    <div class="create__wrap">
      <div class="create-box--guidance">
        <div class="create-box--guidance-tit">
          <inputField
            type="textarea"
            id="guidance-title"
            placeholder="New Product guidances"
          />
        </div>
        <div class="create-box--guidance-middle">
          <div class="middle-upload" v-if="previewImage === ''">
            <i class="empty-img-icon"></i>
            <p class="empty-des">Please try uploading the image.</p>
            <inputField
              type="file"
              id="file_choose"
              chooseFileLabel="Choose a file"
              @change="changeImage"
            />
          </div>
          <div class="middle-upload preview" v-else>
            <img :src="previewImage" alt="선택한 이미지" />
            <inputField type="file" id="file_default" />
          </div>
          <div class="middle-des">
            <inputField
              type="textareaDes"
              id="textareaDes_default"
              placeholder="Write your notes here..."
            />
          </div>
        </div>
      </div>
      <div class="create-box--guidance__reminder">
        <div class="create-box--guidance__reminder-date">
          Reminder set on 15/07/2021, 18:30
        </div>
      </div>
    </div>
    <TaskBar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
/* eslint-disable */
const previewImage = ref('')

const changeImage = (event) => {
  const files = event.target?.files
  if (files.length > 0) {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
</script>
<style lang="scss">
.create__wrap {
  padding: rem(78px) rem(16px) 0;
  .create-box--guidance {
    &-tit {
      .inputField__text {
        padding: 0;
        font-size: rem(32px);
        font-weight: 700;
        line-height: rem(38.4px);
      }
    }
    &-middle {
      margin-top: rem(16px);
      .middle-upload {
        width: 100%;
        border: 2px dashed $neutral-lightgrey;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: rem(12px);
        padding: rem(20px) 0;
        .empty-img-icon {
          width: rem(28px);
          height: rem(28px);
          background: url('@/assets/images/icon/icon_file_upload.svg') no-repeat;
          background-size: 100%;
        }
        .empty-des {
          margin-top: rem(16px);
          font-size: rem(12px);
          line-height: normal;
        }
        .inputField {
          margin-top: rem(24px);
          width: auto;
        }
      }
      .middle-des {
        margin-top: rem(16px);
      }
      .preview {
        padding: 0;
        display: block;
        position: relative;
        border: 0;
        border-radius: rem(12px);
        img {
          display: block;
          width: 100%;
        }
        .inputField {
          margin-top: 0;
          position: absolute;
          bottom: 2%;
          right: 2%;
        }
      }
    }
    &-btn {
      display: flex;
      gap: 16px;
      margin-top: rem(24px);
    }
    &__reminder {
      &-date {
        padding-top: rem(20px);
        margin-top: rem(20px);
        font-size: rem(12px);
        font-weight: 400;
        line-height: normal;
        color: $neutral-darkgrey;
        border-top: 1px solid $neutral-lightgrey;
      }
      &-tag {
        margin-top: rem(20px);
        display: flex;
        flex-wrap: wrap;
        gap: 20px 12px;
      }
    }
  }
}
</style>
