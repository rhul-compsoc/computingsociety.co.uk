<script lang="ts">
  import css from "./Header.module.css";
  import logo from "../assets/compsoc-logo.png";
</script>

<header class={css.header} id="">
  <div class={css.navbar}>
    <p>Home</p>
    <p>Events</p>
    <p>About</p>
    <p>Our Team</p>
    <p>Sponsors</p>
  </div>
</header>

<div class={css.topCard}>
  <img src={logo} alt="CompSoc" />
</div>
