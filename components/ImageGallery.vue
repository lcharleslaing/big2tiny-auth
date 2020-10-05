<template>
    <div>
        <h1>My Image Gallery</h1>
        <div class="main">
            <div class="card">
                <div class="info">
                    <strong>My Title</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequuntur delectus voluptatibus similique veniam? Corrupti, pariatur. </p>
                </div>
                <img src="@/assets/img/beach1.jpg" alt="Image">
            </div>
            <div class="card">
                <div class="info">
                    <strong>My Title</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequuntur delectus voluptatibus similique veniam? Corrupti, pariatur. </p>
                </div>
                <img src="@/assets/img/beach2.jpg" alt="Image">
            </div>
            <div class="card">
                <div class="info">
                    <strong>My Title</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequuntur delectus voluptatibus similique veniam? Corrupti, pariatur. </p>
                </div>
                <img src="@/assets/img/beach3.jpg" alt="Image">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>
$colors: gray

body, html
    height: 100%

body
    margin: 0

h1
    margin: 2rem

.main
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
    cursor: pointer

.card
    padding: 20px
    img
        width: 100%
.info
    padding: 1rem
</style>
