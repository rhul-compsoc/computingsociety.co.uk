<script>
  import css from "./Header.module.css";
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
      <div class={css.logo}>
        <img src="/compsoc-logo.png" alt="CompSoc Logo, back to top" />
      </div>
      <div class={css.links}>
        <a>Home</a>
        <a>Events</a>
        <a>About</a>
        <a>Our Team</a>
        <a>Sponsors</a>
      </div>
      <img
        src="/compsoc-logo.png"
        alt="Logo"
        class={scrollTop > 75 ? css.hidden : ""}
      />
    </div>
  </div>
</header>
