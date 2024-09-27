<script>
  import css from "../styles/Header.module.css";
  import { onMount } from "svelte";

  let scrollTop = 0;

  function handleScroll() {
    scrollTop = window.scrollY;
  }

  // Attach the scroll event listener on component mount
  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<header
  class={`${css.header} ${scrollTop > 75 ? css.sticky : ""}`}
  style="height: {scrollTop > 75 ? '10rem' : '75vh'}"
>
  <div class={css.content}>
    <div class={css.topBar}>
      <a href="#top">
        <div class={css.logo}>
          <img src="/compsoc-logo.png" alt="CompSoc Logo, back to top" />
        </div>
      </a>
      <div class={css.links}>
        <a href="#top">Home</a>
        <a href="#events">Events</a>
        <a href="#about">About</a>
        <a href="#our-team">Our Team</a>
        <a href="#sponsors">Sponsors</a>
      </div>
      <img
        src="/compsoc-logo.png"
        alt="Logo"
        class={scrollTop > 75 ? css.hidden : ""}
      />
    </div>
  </div>
</header>
