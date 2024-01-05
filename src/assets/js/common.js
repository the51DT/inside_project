/* eslint-disable */
export default {
  methods: {
    openBtn(id) {
      if (id !== '') {
        const popupId = document.getElementById(id)
        popupId.classList.add('active')
      }
    },
    closeBtn(event) {
      const targetPopup = document.getElementById(
        event.target.closest('.popup').id
      )
      targetPopup.classList.remove('active')
    },
    toastPop(id) {
      if (id !== '') {
        const popupId = document.getElementById(id)
        popupId.classList.add('active')
        setTimeout(() => {popupId.classList.remove('active')}, 4000)
      }
    }
  }
}
