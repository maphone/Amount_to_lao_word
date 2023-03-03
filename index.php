

<?php
require 'number.php';

$num = $_POST["number_text"];


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convert Number to Lao word</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
        <form method="POST" action="index.php">
            <div class="form-group">
                <label for="exampleInputEmail1"><h2>Enter Number</h2></label>
                <input type="text" name="number_text"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number">
                <small id="emailHelp" class="form-text text-muted">We'll never share your Number with anyone else.</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    <?php
        $number_text = new Rundiz\Number\NumberThai();
        echo '<h2> '.number_format($num).' ກີບ<?h2><br>';
        echo $number_text->convertBaht($num);
    ?>
    </div>

</body>
</html>
