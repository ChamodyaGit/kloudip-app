<template>
    <div class="home-container">
        <h2>Centered with wide button</h2>

        <button @click="openModal" class="btn-open">Open Modal</button>

        <div v-if="isOpenModal3" class="modal-overlay">
            <div class="modal">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                </div>
                <h2>Payment successful</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo.</p>
                <div class="button-container">
                    <button class="cancel-btn" @click="closeModal">Cancel</button>
                    <button class="deactivate-btn" @click="closeModal">Deactivate</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpenModal3 = ref(false);

const openModal = () => {
    isOpenModal3.value = true;
};

const closeModal = () => {
    isOpenModal3.value = false;
};

const deactivateAccount = () => {
    alert("Account Deactivated!");
    closeModal();
};
</script>

<style scoped>

.btn-open {
    background: #1e40af;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-open:hover {
    background: #1e3a8a;
}

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

.button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

button {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    cursor: pointer;
    flex: 1;
    margin: 0 5px;
    font-weight: bold;
}

.cancel-btn {
    background: white;
}

.deactivate-btn {
    background: blue;
    color: white;
    border: none;
}

.deactivate-btn:hover {
    background: rgb(0, 0, 219);
}
</style>
