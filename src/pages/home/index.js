
import { Helmet } from "react-helmet";
import './style.css';

function Home(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name="description" content="This is home!" />
      </Helmet>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-md-8 '>
            <div class='article'>
              <div class='article-header'>
                <img class="img-fluid rounded" src='https://9cover.com/images/ccovers/1465145558new-zealand-nature.jpg' />
                <h1 class='h3 mt-2'>Suspendisse non nisl sit amet</h1>
                <p>
                  <small>2020-11-12 13:14:53</small>
                </p>
              </div>
              <div class='article-body'>
                <p>Curabitur a felis in nunc fringilla tristique. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Phasellus ullamcorper ipsum rutrum nunc. Ut varius tincidunt libero. Vestibulum volutpat pretium libero.</p>
                <p>Etiam feugiat lorem non metus. Nam commodo suscipit quam. Sed lectus. Aenean vulputate eleifend tellus. Suspendisse non nisl sit amet velit hendrerit rutrum.</p>
                <p>Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Pellentesque auctor neque nec urna. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Cras ultricies mi eu turpis hendrerit fringilla.</p>
                <p>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Vestibulum suscipit nulla quis orci. Phasellus ullamcorper ipsum rutrum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque ut neque.</p>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
          </div>
        </div>
      </div>
    </>

  );
}

export default Home;