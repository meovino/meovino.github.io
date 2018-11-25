<!-- Home.vue -->
<template lang="html">
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Played It - The Golf Course Review Directory</h1>
        <p>The Open Source directory of golf course reviews.  Browse reviews or contribute links.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
    </div>
    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>Browse the courses</h2>
          <p>Scroll through our list of courses to read reviews.</p>
          <p><router-link :to="{ name: 'countries', params: {} }" class="btn btn-secondary" role="button">View details &raquo;</router-link></p>
        </div>
        <div class="col-md-4">
          <h2>Contribute to Our Reviews</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>
      <hr>
    </div> <!-- /container -->
  </div>
</template>
