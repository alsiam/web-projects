window.onload = function () {
    const projectList = projects.map(project => {
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
    `
    })

    document.getElementById("project").innerHTML = projectList.join("")

}