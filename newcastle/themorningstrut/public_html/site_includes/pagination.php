
<style media="screen">
  .pagerBTN {
    background-color: #a2af71;
    color: white;
    padding: 7px 18px;
    font-size: 14px;
  }
</style>
<?php

  $show_next_button = "<a class='bd-button-text pagerBTN' style='float:right;' href='/?page=".$loop_next."'>Next Page</a>";

  $show_previous_button = "<a class='bd-button-text pagerBTN' tyle='float:left;' href='/?page=".$loop_previous."'>Previous Page</a>";

  if ($loop_next) echo $show_next_button;
  if ($loop_previous) echo $show_previous_button;
?>