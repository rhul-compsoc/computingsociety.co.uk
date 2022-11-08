<script lang="ts">
    export let onClick: () => void;
</script>

<button on:click={onClick} class="grid grid-cols-3 h-11 p-1 w-11 gap-[6px]">
    <!-- row 1 -->
    <div class='dot'/>
    <div class='dot'/>
    <div class='dot'/>
    
    <!-- row 2 -->
    <div class='dot'/>
    <div class='dot'/>
    <div class='dot'/>
    
    <!-- row 3 -->
    <div class='dot'/>
    <div class='dot'/>
    <div class='dot'/>
</button>

<style>
    .dot {
        @apply bg-white rounded-full ;
    }
</style>