
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
    <div class="modal-innner">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
              Title: {{name}}
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <img :src="image" :alt="name" class="modal-image">
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
                <a :href="image" target="_blank" class="button">View Email In Full Page</a>

            <!-- <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button> -->
          </slot>
        </footer>
      </div>
    </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'modal',
    props: {
    image: {
      type: String
    },
    name: {
      type: String
    }
  },    
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
        z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

.modal-innner{
    position: relative;

}
  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    width: 100%;
    z-index: 999;
    max-width: 900px;
    flex-direction: column;
  }

  .modal-footer {
    display: flex;
  }

  .modal-header {
        padding: 15px;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    font-size: 24px;
    text-align: center;
    font-weight: 600;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: center;
  }

  .modal-body {
    max-height: 500px;
    overflow-x: auto;
    position: relative;
    padding: 0px 10px;
  }

  .btn-close {
border: none;
    font-size: 20px;
    padding: 10px;
    position: absolute;
    right: 10px;
    top: 0px;
    z-index: 9;
    margin: 0px;
    cursor: pointer;
    font-weight: bold;
    color: red;
    border-radius: 50%;
    background: #fafafa;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-close:hover{
    color: #fafafa;
    background: red;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  img.modal-image{
    width: 100%;
    max-width: 100%;
  }
  a.button{
  padding: 10px 30px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 1000px;
    cursor: pointer;
    background: #fff;
    color: #3e64ea;
    border: 1px solid #3e64ea;
    text-decoration: none;
    font-family: Barlow,sans-serif;
    text-transform: uppercase;
    margin: 10px;
    -webkit-transition: all .15s ease-out;
    transition: all .15s ease-out;
}
a.button:hover{
      background: #3e64ea;
    color: #fff;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
}
</style>