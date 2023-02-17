window.onload = () => {
  // Set the loading flag to true
  let loading = true;

  // Define a function to check the status of the loading flag
  function checkLoading() {
    if (loading) {
      document.getElementById("loading").style.display = "block";
    } else {
      document.getElementById("loading").style.display = "none";
      clearInterval(loadingInterval);
    }
  }

  const loadingInterval = setInterval(checkLoading, 100);

  const featuredProjectList = featuredProjects.map((project) => {
    return `
            <div class="bg-slate-100 p-3 rounded shadow-lg">
                <div class="">
                    <img src=${project.thumbnail} alt="hamburger food" class="w-full h-full">
                </div>
                <div class="flex justify-between items-center mt-3">
                    <h1 class="text-slate-800 text-lg">${project.name}</h1>
                    <div class="flex justify-between items-center gap-3">
                        <a class="bg-slate-200 text-slate-800 py-1 px-3 hover:bg-slate-300 hover:text-slate-900 rounded"
                            href=${project.code}
                            target="_blank">Source Code</a>
                        <a class="bg-slate-200 text-slate-800 py-1 px-3 hover:bg-slate-300 hover:text-slate-900 rounded"
                            href=${project.preview} target="_blank">Preview
                            Demo</a>
                    </div>
                </div>
            </div>
        `;
  });

  document.getElementById("loading").style.display = "none";
  document.getElementById("featured-projects").innerHTML =
    featuredProjectList.join("");

  const totalProjectList = totalProjects.map((project) => {
    return `
        <div class="bg-slate-100 p-3 rounded shadow-lg">
            <div class="">
                <img src=${project.thumbnail} alt="hamburger food" class="w-full h-full">
            </div>
            <div class="flex justify-between items-center mt-3">
                <h1 class="text-slate-800 text-lg">${project.name}</h1>
                <div class="flex justify-between items-center gap-3">
                    <a class="bg-slate-200 text-slate-800 py-1 px-3 hover:bg-slate-300 hover:text-slate-900 rounded"
                        href=${project.code}
                        target="_blank">Source Code</a>
                    <a class="bg-slate-200 text-slate-800 py-1 px-3 hover:bg-slate-300 hover:text-slate-900 rounded"
                        href=${project.preview} target="_blank">Preview
                        Demo</a>
                </div>
            </div>
        </div>
    `;
  });

  // Set the loading flag to false
  loading = false;

  // Define a counter for the images that have been loaded
  let imagesLoaded = 0;

  // Define a function to be called when an image is loaded
  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalProjects.length) {
      loading = false;
    }
  }

  // Call the checkLoading function initially to show the preloader
  checkLoading();

  // Hide the preloader element and inject the project data when all images are loaded
  const interval = setInterval(() => {
    if (imagesLoaded === totalProjects.length) {
      clearInterval(interval);
      document.getElementById("total-projects").innerHTML =
        totalProjectList.join("");
      checkLoading();
    }
  }, 100);
};
