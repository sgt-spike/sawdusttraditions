<?php
    include 'php/header.php';
    include 'php/connect.php';
    $stains =   'SELECT photo_id, photo_name, photo_link, photo_desc, photo_orientation 
                FROM photos
                WHERE photo_category = "stains"';

    $decor = 'SELECT photo_id, photo_name, photo_link, photo_desc, photo_orientation 
    FROM photos
    WHERE photo_category = "decor"';

    $pets = 'SELECT photo_id, photo_name, photo_link, photo_desc, photo_orientation 
    FROM photos
    WHERE photo_category = "pets"';

    $furniture = 'SELECT photo_id, photo_name, photo_link, photo_desc, photo_orientation 
    FROM photos
    WHERE photo_category = "furniture"';

    echo    '<section class="project-gallery">
                <div class="gallery-section-container">
                    <div class="gallery-links"></div>
                </div>
                <div class="gallary-section-container">
                    <h2 class="gallery-section-header">Stains</h2>
                    <div class="gallery-sections stains">';
                    if ($results = mysqli_query($conn, $stains)) {
                        while($row = mysqli_fetch_array($results)) {
                            $aspect = "gallery-fig " .$row['photo_orientation'];
                            $src = $row['photo_link'].$row['photo_name'];
                            $photo_desc = $row['photo_desc'];
                            echo "<figure class=\"$aspect\">
                                    <img src=\"{$src}\" alt=\"{$photo_desc}\" class=\"gallery-img\">
                                    <figcaption>{$photo_desc}</figcaption>
                                  </figure>";
                        }
                        echo '</div></div>';
                    }

        echo    '<div class="gallary-section-container">
                    <h2 class="gallery-section-header">Home Decor</h2>
                    <div class="gallery-sections stains">';
                    if ($results = mysqli_query($conn, $decor)) {
                        while($row = mysqli_fetch_array($results)) {
                            $aspect = "gallery-fig " .$row['photo_orientation'];
                            $src = $row['photo_link'].$row['photo_name'];
                            $photo_desc = $row['photo_desc'];
                            echo "<figure class=\"$aspect\">
                                    <img src=\"{$src}\" alt=\"{$photo_desc}\" class=\"gallery-img\">
                                    <figcaption>{$photo_desc}</figcaption>
                                  </figure>";
                        }
                        echo '</div></div>';
                    }
        
        echo    '<div class="gallary-section-container">
                    <h2 class="gallery-section-header">Pets</h2>
                    <div class="gallery-sections stains">';
                    if ($results = mysqli_query($conn, $pets)) {
                        while($row = mysqli_fetch_array($results)) {
                            $aspect = "gallery-fig " .$row['photo_orientation'];
                            $src = $row['photo_link'].$row['photo_name'];
                            $photo_desc = $row['photo_desc'];
                            echo "<figure class=\"$aspect\">
                                    <img src=\"{$src}\" alt=\"{$photo_desc}\" class=\"gallery-img\">
                                    <figcaption>{$photo_desc}</figcaption>
                                  </figure>";
                        }
                        echo '</div></div>';
                    }

        echo    '<div class="gallary-section-container">
                    <h2 class="gallery-section-header">Furniture</h2>
                    <div class="gallery-sections stains">';
                    if ($results = mysqli_query($conn, $furniture)) {
                        while($row = mysqli_fetch_array($results)) {
                            $aspect = "gallery-fig " .$row['photo_orientation'];
                            $src = $row['photo_link'].$row['photo_name'];
                            $photo_desc = $row['photo_desc'];
                            echo "<figure class=\"$aspect\">
                                    <img src=\"{$src}\" alt=\"{$photo_desc}\" class=\"gallery-img\">
                                    <figcaption>{$photo_desc}</figcaption>
                                  </figure>";
                        }
                        echo '</div></div>';
                    }
                
    echo     '</section>';
?>

<?php
    include 'php/footer.php';
?>