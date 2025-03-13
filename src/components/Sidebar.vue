<template>
    <div class="sidebar-container">

        <aside class="sidebar">
            <ul class="sidebar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/modal2">Modal 2</a></li>
                <li><a href="/modal3">Modal 3</a></li>
            </ul>
        </aside>

        <main class="content">
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts"></script>