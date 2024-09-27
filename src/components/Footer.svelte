<footer><span>Made with <span class="heart">♥</span> in Egham</span></footer>

<style>
  footer {
    background-color: #444;
    color: white;
    font-weight: 650;
    height: 75px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer .heart {
    display: inline;
    color: white;
    font-size: 20px;
    transition:
      color 0.5s ease,
      font-size 0.5s ease;
  }

  footer:hover .heart {
    color: red;
    font-size: 40px;
  }
</style>
