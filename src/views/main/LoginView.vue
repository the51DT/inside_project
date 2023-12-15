<template>
  <div class="login__wrap">
    <TitleInput title="Let’s Login" sub="And notes your idea"></TitleInput>
    <div class="login__input">
      <inputField
        type="email"
        title="Email Address"
        id="email"
        name="email"
        placeholder="Example: johndoe@gmail.com"
      ></inputField>
      <inputField
        type="password"
        title="Password"
        id="password"
        name="password"
        placeholder="********"
      ></inputField>
      <ButtonCmp
        bgBtn="base"
        btnSize="large"
        btnTxt="Forgot Password"
        :btnType="false"
      />
    </div>
    <div class="login__button">
      <ButtonCmp
        bgBtn="base"
        btnSize="large"
        icon2
        iconPosition
        btnTxt="Login"
      />
      <div class="login__button__line">Or</div>
      <ButtonCmp
        bdBtn="google"
        btnSize="large"
        icon
        btnTxt="Login with Google"
        @click="onClickGoogle()"
      />
      <ButtonCmp
        bdBtn="base"
        btnSize="large"
        btnTxt="Don’t have any account? Register here"
        :btnType="false"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .login {
    &__wrap {
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin: 0 auto;
      padding: rem(16px);
      width: rem(360px);
      height: 100vh;
    }
    &__input {
      margin-top: rem(32px);
      & .btn {
        display: block;
        margin-top: rem(12px);
      }
    }
    &__button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: rem(16px);
      margin-top: rem(40px);
      &__line {
        position: relative;
        font-size: rem(12px);
        font-weight: 500;
        color: $neutral-darkgrey;
        width: 100%;
        text-align: center;
        &::before,
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          width: rem(141px);
          border-top: solid rem(1px) $neutral-lightgrey;
        }
        &::before {
          left: 0;
        }
        &::after {
          right: 0;
        }
      }
    }
  }
</style>
