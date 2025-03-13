<template>
    <h1>Modal Dialogs</h1>
    <p>
        Use these Tailwind CSS modal dialog components to create pop-up boxes for things like alerts, notifications,
        or confirmation prompts. These modals are designed and built by the Tailwind CSS team, and include a variety
        of different styles and layouts.
    </p>
    <div class="home-container">
        <h2>Simple with gray footer</h2>

        <button @click="openModal" class="btn-open">Open Modal</button>

        <div v-if="isOpenModal1" class="modal-overlay">
            <div class="modal modal-content-start">
                <div class="modal-content modal-content-start">
                    <div class="modal-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor" class="icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div class="modal-text">
                        <h3>Deactivate Account</h3>
                        <p>Are you sure you want to deactivate your account? All of your data will be permanently
                            removed.
                            This action cannot be undone.</p>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-cancel" @click="closeModal">Cancel</button>
                    <button class="btn-danger" @click="deactivateAccount">Deactivate</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpenModal1 = ref(false);

const openModal = () => {
    isOpenModal1.value = true;
};

const closeModal = () => {
    isOpenModal1.value = false;
};

const deactivateAccount = () => {
    alert("Account Deactivated!");
    closeModal();
};
</script>

<style scoped>
.modal-content-start {
    text-align: start;
}

.modal-icon {
    background: #f9dfdf;
    border-radius: 50%;
    padding: 10px;
}

.icon {
    width: 40px;
    height: 40px;
    color: red;
}

.btn-danger {
    background: red;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-danger:hover {
    background: #b91c1c;
}

.btn-cancel {
    background: #e7e9ec;
    color: #2f3744;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-cancel:hover {
    background: #ced2d7;
}
</style>
