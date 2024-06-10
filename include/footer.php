<footer class="footer_wrapper">
  <div class="scrn_container">
    <div class="footer_row">
      <p class="copyRight_text">Copyright © 2019 by Fairlink Hospitality </p>
      <ul class="footerLink">
        <li class="f_linkItemt"><a href="#" class="f_links"> Account</a></li>
        <li class="f_linkItemt"><a href="#" class="f_links">Community Blog</a></li>
        <li class="f_linkItemt"><a href="#" class="f_links">Terms</a></li>
        <li class="f_linkItemt"><a href="#" class="f_links">Privacy Policy</a></li>
        <li class="f_linkItemt"><a href="#" class="f_links"> guestpolicy</a></li>
      </ul>
    </div>
  </div>
</footer>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="./js/header.js"></script>
<script src="./js/animate.js"></script>
<script src="./js/counter.js"></script>


<script>
  $(document).ready(function () {
    $('.dropdown_btn').click(function (event) {
      var $dropdownList = $(this).next('.dropdown_list');
      $('.dropdown_list').not($dropdownList).slideUp(); // Close other dropdowns
      $('.dropdown_btn').removeClass('active_dropdown')
      $dropdownList.slideToggle(); // Toggle the current dropdown
      $(this).toggleClass('active_dropdown')
      event.stopPropagation(); // Prevent the click from propagating to the document
    });

    $(document).click(function () {
      $('.dropdown_btn').removeClass('active_dropdown')
      $('.dropdown_list').slideUp(); // Close all dropdowns
    });

    $('.dropdown_container').click(function (event) {
      event.stopPropagation(); // Prevent the click from propagating to the document
    });
  });
</script>
</body>

</html>