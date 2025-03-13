<template>
    <div class="home-container">
        <h2>Centered with single action</h2>

        <button @click="openModal" class="btn-open">Open Modal</button>

        <div v-if="isOpenModal2" class="modal-overlay">
            <div class="modal">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                </div>
                <h2>Payment successful</h2>
                <p>In this case, the modal is set to close after clicking the button and auto-open again in 3 seconds.</p>
                <button @click="closeModal">Go back to dashboard</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpenModal2 = ref(true);

const closeModal = () => {
    isOpenModal2.value = false;
    setTimeout(() => {
        isOpenModal2.value = true;
    }, 3000);
};
</script>

<style scoped>
.icon {
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: green;
    background: #e6ffee;
    border-radius: 50%;
    display: inline-block;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    background: blue;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background: rgb(0, 0, 219);
}
</style>
