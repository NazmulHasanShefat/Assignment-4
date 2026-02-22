const interviewList = [];
const rejectedList = [];
// jobs form "./jobs-data.js"
const job_Navigation = document.querySelectorAll(".job_Navigation li");

// show all data number status on header tabs
function showTotalsHeader() {
    let totalJobs = jobs.length;
    const total_jobs = document.getElementById("total_jobs");
    const header_total_display = document.getElementById("header_total_display");
    const total_interview_display = document.getElementById("total_interview_display")
    const total_rejected_display = document.getElementById("total_rejected_display")
    header_total_display.textContent = totalJobs;
    total_jobs.textContent = `${totalJobs} of ${totalJobs}`;
    total_interview_display.textContent = interviewList.length;
    total_rejected_display.textContent = rejectedList.length;
}


// switch tab eventLisener added hare
for (const jobNav of job_Navigation) {
    const total_jobs = document.getElementById("total_jobs");
    jobNav.addEventListener("click", (e) => {
        for (const jobNavs of job_Navigation) {
            jobNavs.classList.remove("m_active")
        }
        if (!e.target.classList.contains("m_active")) {
            e.target.classList.add("m_active");
            if (e.target.dataset.filter === "all") {
                getjobData();
                 total_jobs.textContent = `${jobs.length} of ${jobs.length}`;
            } else if (e.target.dataset.filter === "Interview") {
                getInterviewList();
                total_jobs.textContent = `${interviewList.length} of ${jobs.length}`;
            } else if (e.target.dataset.filter === "Rejected") {
                getjobData();
                getRejectedList();
                total_jobs.textContent = `${rejectedList.length} of ${jobs.length}`;
            }
        }
    })
}





const jobCards_container = document.querySelector(".jobCards_container");

// showing all job list on ui
function getjobData() {
    jobCards_container.innerHTML = "";
    // check joblist is empty or not
    if (jobs.length === 0) {
        jobCards_container.innerHTML = `
        <div class="noJob flex flex-col items-center mt-15 p-5">
                <img src="./jobs.png" alt="">
                <h1 class="text-lg">No jobs available</h1>
                <p>Check back soon for new job opportunities</p>
            </div>
        `;
    } else {
        jobs.forEach(job => {
            jobCards_container.innerHTML += `
             <div class="jobcard bg-white p-5 mt-3 ${job.status === "REJECTED" ? "border-l-2 border-red-500" : job.status === "INTERVIEW" ? "border-l-2 border-green-600" : null}">
                        <div class="card_header flex justify-between items-center">
                             <div>
                                <h3 class="font-semibold text-[18px] companyName">${job.companyName}</h3>
                                <p class="roll text-[#64748B] py-1 text-sm">${job.NeedRoll}</p>
                            </div>
                            <div class="all_tab_delete_icon cursor-pointer group" title="delete" data-delid="${job.id}">
                                <svg class="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <circle cx="16" cy="16" r="15.5" fill="white" stroke="#F1F2F4" class="group-hover:stroke-1 group-hover:stroke-red-400 group-hover:fill-red-500"/>
                                    <path
                                        d="M21.5 11H19V10.5C19 10.1022 18.842 9.72064 18.5607 9.43934C18.2794 9.15804 17.8978 9 17.5 9H14.5C14.1022 9 13.7206 9.15804 13.4393 9.43934C13.158 9.72064 13 10.1022 13 10.5V11H10.5C10.3674 11 10.2402 11.0527 10.1464 11.1464C10.0527 11.2402 10 11.3674 10 11.5C10 11.6326 10.0527 11.7598 10.1464 11.8536C10.2402 11.9473 10.3674 12 10.5 12H11V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V12H21.5C21.6326 12 21.7598 11.9473 21.8536 11.8536C21.9473 11.7598 22 11.6326 22 11.5C22 11.3674 21.9473 11.2402 21.8536 11.1464C21.7598 11.0527 21.6326 11 21.5 11ZM14 10.5C14 10.3674 14.0527 10.2402 14.1464 10.1464C14.2402 10.0527 14.3674 10 14.5 10H17.5C17.6326 10 17.7598 10.0527 17.8536 10.1464C17.9473 10.2402 18 10.3674 18 10.5V11H14V10.5ZM20 21H12V12H20V21ZM15 14.5V18.5C15 18.6326 14.9473 18.7598 14.8536 18.8536C14.7598 18.9473 14.6326 19 14.5 19C14.3674 19 14.2402 18.9473 14.1464 18.8536C14.0527 18.7598 14 18.6326 14 18.5V14.5C14 14.3674 14.0527 14.2402 14.1464 14.1464C14.2402 14.0527 14.3674 14 14.5 14C14.6326 14 14.7598 14.0527 14.8536 14.1464C14.9473 14.2402 15 14.3674 15 14.5ZM18 14.5V18.5C18 18.6326 17.9473 18.7598 17.8536 18.8536C17.7598 18.9473 17.6326 19 17.5 19C17.3674 19 17.2402 18.9473 17.1464 18.8536C17.0527 18.7598 17 18.6326 17 18.5V14.5C17 14.3674 17.0527 14.2402 17.1464 14.1464C17.2402 14.0527 17.3674 14 17.5 14C17.6326 14 17.7598 14.0527 17.8536 14.1464C17.9473 14.2402 18 14.3674 18 14.5Z"
                                        fill="#64748B" class="group-hover:fill-white"/>
                                </svg>
                            </div>
                        </div>
                        <div class="text-[#64748B] py-2">
                            <ul class="flex items-center gap-3 text-sm">
                                <li>${job.jobPlace}</li>
                                <span> • </span>
                                <li class="">${job.jobTiming}</li>
                                <span> • </span>
                                <li><span><span>$</span>${(job.startingSalery).toLocaleString()}</span> - <span>$</span><span>${(job.highestSalary).toLocaleString()}</span></li>
                            </ul>
                        </div>
                        <button class="py-[8px] px-[12px] rounded-md bg-[#EEF4FF] ${job.status === "REJECTED" ? "bg-red-500/20 text-red-600" : job.status === "INTERVIEW" ? "bg-green-500/20 text-green-600" : ""} text-sm">${job.status}</button>
                        <p class="text-sm py-2">${job.description}</p>
                        <div class="flex gap-3">
                            <button
                                class="py-[8px] px-[12px] rounded-sm cursor-pointer bg-white text-sm border border-green-600 text-green-600 hover:bg-green-600 hover:text-white active:scale-95 interview_btn" data-jobid="${job.id}">INTERVIEW</button>
                            <button
                                class="py-[8px] px-[12px] rounded-sm cursor-pointer bg-white text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white active:scale-95 reject_btn" data-jobrejid="${job.id}">REJECTED</button>
                        </div>
                    </div>
            `;

            const all_tab_delete_icon = document.querySelectorAll(".all_tab_delete_icon");

            all_tab_delete_icon.forEach(del_icon => {
                del_icon.addEventListener("click",(e)=>{
                    const findObjToDeleteIndex = jobs.findIndex(item => item.id === Number(e.target.dataset.delid));

                    if(findObjToDeleteIndex > -1){
                        jobs.splice(findObjToDeleteIndex, 1);
                        getjobData();
                        // updater header ui
                        showTotalsHeader();
                    }
                })
            })

            // INTERVIEW button and rejected button functionalitys added
            const interview_btn = document.querySelectorAll(".interview_btn");
            interview_btn.forEach(intBtn => {
                intBtn.addEventListener("click", (e) => {
                    // item.id is alrady number in the object this is not api because typed item.id
                    const myobj = jobs.find(item => item.id === Number(e.target.dataset.jobid));
                    const myobjIndex = rejectedList.findIndex(item => item.id === Number(e.target.dataset.jobid));
                    const checkExist = interviewList.find(item => item.id === myobj.id);
                    myobj.status = "INTERVIEW";
                    if (!checkExist) {
                        interviewList.push(myobj);
                        if(myobjIndex > -1){
                            rejectedList.splice(myobjIndex, 1);
                        }
                    }
                    showTotalsHeader();
                    getjobData();
                })
            })
            const reject_btn = document.querySelectorAll(".reject_btn");
            reject_btn.forEach(delBtn => {
                delBtn.addEventListener("click", (e) => {
                    console.log(e.target.dataset.jobrejid)
                    const rejObj = jobs.find(item => item.id === Number(e.target.dataset.jobrejid));
                    const rejObjIndex = interviewList.findIndex(item => item.id === Number(e.target.dataset.jobrejid));
                    const existingRejectionObj = rejectedList.find(item => item.id === rejObj.id);
                    rejObj.status = "REJECTED";
                    if (!existingRejectionObj) {
                        rejectedList.push(rejObj)
                        if(rejObjIndex > -1){
                            interviewList.splice(rejObjIndex, 1);
                        }
                    }
                    showTotalsHeader();
                    getjobData();
                })
            })
        });

    }

}

// showing INTERVIEW list on ui
function getInterviewList() {
    jobCards_container.innerHTML = "";
    if (interviewList.length === 0) {
        jobCards_container.innerHTML = `
          <div class="noJob flex flex-col items-center mt-15 p-5">
                <img src="./jobs.png" alt="">
                <h1 class="text-lg">No jobs available</h1>
                <p>Check back soon for new job opportunities</p>
            </div>
        `;
    } else {
        interviewList.forEach(intlist => {
            jobCards_container.innerHTML += `
               <div class="jobcard bg-white p-5 mt-3 border-l-2 border-green-600">
                        <div class="card_header flex justify-between items-center">
                             <div>
                                <h3 class="font-semibold text-[18px] companyName">${intlist.companyName}</h3>
                                <p class="roll text-[#64748B] py-1 text-sm">${intlist.NeedRoll}</p>
                            </div>
                            <div class="delete_icon cursor-pointer" title="delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <circle cx="16" cy="16" r="15.5" fill="white" stroke="#F1F2F4" />
                                    <path
                                        d="M21.5 11H19V10.5C19 10.1022 18.842 9.72064 18.5607 9.43934C18.2794 9.15804 17.8978 9 17.5 9H14.5C14.1022 9 13.7206 9.15804 13.4393 9.43934C13.158 9.72064 13 10.1022 13 10.5V11H10.5C10.3674 11 10.2402 11.0527 10.1464 11.1464C10.0527 11.2402 10 11.3674 10 11.5C10 11.6326 10.0527 11.7598 10.1464 11.8536C10.2402 11.9473 10.3674 12 10.5 12H11V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V12H21.5C21.6326 12 21.7598 11.9473 21.8536 11.8536C21.9473 11.7598 22 11.6326 22 11.5C22 11.3674 21.9473 11.2402 21.8536 11.1464C21.7598 11.0527 21.6326 11 21.5 11ZM14 10.5C14 10.3674 14.0527 10.2402 14.1464 10.1464C14.2402 10.0527 14.3674 10 14.5 10H17.5C17.6326 10 17.7598 10.0527 17.8536 10.1464C17.9473 10.2402 18 10.3674 18 10.5V11H14V10.5ZM20 21H12V12H20V21ZM15 14.5V18.5C15 18.6326 14.9473 18.7598 14.8536 18.8536C14.7598 18.9473 14.6326 19 14.5 19C14.3674 19 14.2402 18.9473 14.1464 18.8536C14.0527 18.7598 14 18.6326 14 18.5V14.5C14 14.3674 14.0527 14.2402 14.1464 14.1464C14.2402 14.0527 14.3674 14 14.5 14C14.6326 14 14.7598 14.0527 14.8536 14.1464C14.9473 14.2402 15 14.3674 15 14.5ZM18 14.5V18.5C18 18.6326 17.9473 18.7598 17.8536 18.8536C17.7598 18.9473 17.6326 19 17.5 19C17.3674 19 17.2402 18.9473 17.1464 18.8536C17.0527 18.7598 17 18.6326 17 18.5V14.5C17 14.3674 17.0527 14.2402 17.1464 14.1464C17.2402 14.0527 17.3674 14 17.5 14C17.6326 14 17.7598 14.0527 17.8536 14.1464C17.9473 14.2402 18 14.3674 18 14.5Z"
                                        fill="#64748B" />
                                </svg>
                            </div>
                        </div>
                        <div class="text-[#64748B] py-2">
                            <ul class="flex items-center gap-3 text-sm">
                                <li>${intlist.jobPlace}</li>
                                <span> • </span>
                                <li class="">${intlist.jobTiming}</li>
                                <span> • </span>
                                <li><span><span>$</span>${(intlist.startingSalery).toLocaleString()}</span> - <span>$</span><span>${(intlist.highestSalary).toLocaleString()}</span></li>
                            </ul>
                        </div>
                        <button class="py-[8px] px-[12px] rounded-md bg-green-500/20 text-green-600 text-sm">${intlist.status}</button>
                        <p class="text-sm py-2">${intlist.description}</p>
                        <div class="flex gap-3">
                            <button
                                class="py-[8px] px-[12px] rounded-sm cursor-pointer bg-white text-sm border border-green-600 text-green-600 hover:bg-green-600 hover:text-white active:scale-95 disabled:border-gray-500 disabled:text-gray-500 disabled:pointer-events-none interview_btn" data-jobid="${intlist.id}" disabled>INTERVIEW</button>
                            <button
                                class="py-[8px] px-[12px] rounded-sm cursor-pointer bg-white text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white active:scale-95 reject_btn" data-jobrejid="${intlist.id}">REJECTED</button>
                        </div>
                    </div>
            `;

            const reject_btn = document.querySelectorAll(".reject_btn");
            reject_btn.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const rejected_obj = interviewList.find(item => item.id === Number(e.target.dataset.jobrejid));
                    const rejected_obj_index = interviewList.findIndex(item => item.id === Number(e.target.dataset.jobrejid));
                    const existingObj = rejectedList.find(item => item.id === rejected_obj.id);
                    rejected_obj.status = "REJECTED";
                    if (!existingObj) {
                        rejectedList.push(rejected_obj);
                        interviewList.splice(rejected_obj_index, 1);
                        getInterviewList();
                    }
                })
            })

        })
    }
}

function getRejectedList() {
    jobCards_container.innerHTML = "";
    if (rejectedList.length === 0) {
        jobCards_container.innerHTML = `
          <div class="noJob flex flex-col items-center mt-15 p-5">
                <img src="./jobs.png" alt="">
                <h1 class="text-lg">No jobs available</h1>
                <p>Check back soon for new job opportunities</p>
            </div>
        `;
    } else {
        rejectedList.forEach(item => {
            jobCards_container.innerHTML += `
              <div class="jobcard bg-white p-5 mt-3 border-l-2 border-red-600">
                        <div class="card_header flex justify-between items-center">
                             <div>
                                <h3 class="font-semibold text-[18px] companyName">${item.companyName}</h3>
                                <p class="roll text-[#64748B] py-1 text-sm">${item.NeedRoll}</p>
                            </div>
                            <div class="delete_icon cursor-pointer" title="delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <circle cx="16" cy="16" r="15.5" fill="white" stroke="#F1F2F4" />
                                    <path
                                        d="M21.5 11H19V10.5C19 10.1022 18.842 9.72064 18.5607 9.43934C18.2794 9.15804 17.8978 9 17.5 9H14.5C14.1022 9 13.7206 9.15804 13.4393 9.43934C13.158 9.72064 13 10.1022 13 10.5V11H10.5C10.3674 11 10.2402 11.0527 10.1464 11.1464C10.0527 11.2402 10 11.3674 10 11.5C10 11.6326 10.0527 11.7598 10.1464 11.8536C10.2402 11.9473 10.3674 12 10.5 12H11V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V12H21.5C21.6326 12 21.7598 11.9473 21.8536 11.8536C21.9473 11.7598 22 11.6326 22 11.5C22 11.3674 21.9473 11.2402 21.8536 11.1464C21.7598 11.0527 21.6326 11 21.5 11ZM14 10.5C14 10.3674 14.0527 10.2402 14.1464 10.1464C14.2402 10.0527 14.3674 10 14.5 10H17.5C17.6326 10 17.7598 10.0527 17.8536 10.1464C17.9473 10.2402 18 10.3674 18 10.5V11H14V10.5ZM20 21H12V12H20V21ZM15 14.5V18.5C15 18.6326 14.9473 18.7598 14.8536 18.8536C14.7598 18.9473 14.6326 19 14.5 19C14.3674 19 14.2402 18.9473 14.1464 18.8536C14.0527 18.7598 14 18.6326 14 18.5V14.5C14 14.3674 14.0527 14.2402 14.1464 14.1464C14.2402 14.0527 14.3674 14 14.5 14C14.6326 14 14.7598 14.0527 14.8536 14.1464C14.9473 14.2402 15 14.3674 15 14.5ZM18 14.5V18.5C18 18.6326 17.9473 18.7598 17.8536 18.8536C17.7598 18.9473 17.6326 19 17.5 19C17.3674 19 17.2402 18.9473 17.1464 18.8536C17.0527 18.7598 17 18.6326 17 18.5V14.5C17 14.3674 17.0527 14.2402 17.1464 14.1464C17.2402 14.0527 17.3674 14 17.5 14C17.6326 14 17.7598 14.0527 17.8536 14.1464C17.9473 14.2402 18 14.3674 18 14.5Z"
                                        fill="#64748B" />
                                </svg>
                            </div>
                        </div>
                        <div class="text-[#64748B] py-2">
                            <ul class="flex items-center gap-3 text-sm">
                                <li>${item.jobPlace}</li>
                                <span> • </span>
                                <li class="">${item.jobTiming}</li>
                                <span> • </span>
                                <li><span><span>$</span>${(item.startingSalery).toLocaleString()}</span> - <span>$</span><span>${(item.highestSalary).toLocaleString()}</span></li>
                            </ul>
                        </div>
                        <button class="py-[8px] px-[12px] rounded-md bg-red-500/20 text-red-600 text-sm">${item.status}</button>
                        <p class="text-sm py-2">${item.description}</p>
                        <div class="flex gap-3">
                            <button
                                class="py-[8px] px-[12px] rounded-sm cursor-pointer bg-white text-sm border border-green-600 text-green-600 hover:bg-green-600 hover:text-white active:scale-95 interview_btn" data-jobid="${item.id}">INTERVIEW</button>
                            <button
                                class="py-[8px] px-[12px] disabled:border-gray-500 disabled:text-gray-500 disabled:pointer-events-none rounded-sm cursor-pointer bg-white text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white active:scale-95 reject_btn" data-jobrejid="${item.id}" disabled>REJECTED</button>
                        </div>
                    </div>
            `;

            const interview_btn = document.querySelectorAll(".interview_btn");

            interview_btn.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const rejectObj = rejectedList.find(item => item.id === Number(e.target.dataset.jobid));

                    const findObjIndex = rejectedList.findIndex(item => item.id === Number(e.target.dataset.jobid));

                    rejectObj.status = "INTERVIEW";
                    interviewList.push(rejectObj)
                    rejectedList.splice(findObjIndex, 1);
                    getRejectedList();
                })
            })

        })
    }
}

getjobData();
showTotalsHeader();


