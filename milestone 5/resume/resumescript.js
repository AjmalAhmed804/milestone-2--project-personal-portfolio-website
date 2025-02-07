"use strict";
window.addEventListener("load", () => {
    let myName = localStorage.getItem("name");
    let Desig = localStorage.getItem("Desig");
    let Phone = localStorage.getItem("Phone");
    let Email = localStorage.getItem("Email");
    let add = localStorage.getItem("add");
    let pass = localStorage.getItem("pass");
    let deg = localStorage.getItem("deg");
    let uni = localStorage.getItem("uni");
    let pass2 = localStorage.getItem("pass2");
    let deg2 = localStorage.getItem("deg2");
    let uni2 = localStorage.getItem("uni2");
    let skill1 = localStorage.getItem("skill1 ");
    let skill2 = localStorage.getItem("skill2 ");
    let skill3 = localStorage.getItem("skill3 ");
    let lang1 = localStorage.getItem("lang1");
    let lang2 = localStorage.getItem(" lang2");
    let lang3 = localStorage.getItem(" lang3");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let comlocation = localStorage.getItem("comlocation");
    let jobtitle = localStorage.getItem("jobtitle");
    let achv1 = localStorage.getItem("achv1");
    let achv2 = localStorage.getItem("achv2");
    let achv3 = localStorage.getItem("achv3");
    let picture = localStorage.getItem("profile_pic");
    let resumename = document.getElementById('resumename');
    resumename.textContent = myName;
    let resumDesig = document.getElementById('resumDesig');
    resumDesig.textContent = Desig;
    let resumPhone = document.getElementById('resumPhone');
    resumPhone.textContent = Phone;
    let resumemail = document.getElementById('resumemail');
    resumemail.textContent = Email;
    let resumadd = document.getElementById('resumadd');
    resumadd.textContent = add;
    let resumpass = document.getElementById('resumpass');
    resumpass.textContent = pass;
    let resumdeg = document.getElementById('resumdeg');
    resumdeg.textContent = deg;
    let resumuni = document.getElementById('resumuni');
    resumuni.textContent = uni;
    let resumpass2 = document.getElementById('resumpass2');
    resumpass2.textContent = pass2;
    let resumdeg2 = document.getElementById('resumdeg2');
    resumdeg2.textContent = deg2;
    let resumuni2 = document.getElementById('resumuni2');
    resumuni2.textContent = uni2;
    let resumski1 = document.getElementById('resumski1');
    resumski1.textContent = skill1;
    let resumski2 = document.getElementById('resumski2');
    resumski2.textContent = skill2;
    let resumski3 = document.getElementById('resumski3');
    resumski3.textContent = skill3;
    let resumlang1 = document.getElementById('resumlang1');
    resumlang1.textContent = lang1;
    let resumlang2 = document.getElementById('resumlang2');
    resumlang2.textContent = lang2;
    let resumlang3 = document.getElementById('resumlang3');
    resumlang3.textContent = lang3;
    let resumstyear = document.getElementById('resumstyear');
    resumstyear.textContent = styear;
    let resumendyear = document.getElementById('resumendyear');
    resumendyear.textContent = endyear;
    let resumcompany = document.getElementById('resumcompany');
    resumcompany.textContent = company;
    let resumcompanylocation = document.getElementById('resumcompanylocation');
    resumcompanylocation.textContent = comlocation;
    let resumjob = document.getElementById('resumjob');
    resumjob.textContent = jobtitle;
    let resumachv1 = document.getElementById('resumachv1');
    resumachv1.textContent = achv1;
    let resumachv2 = document.getElementById('resumachv2');
    resumachv2.textContent = achv2;
    let resumachv3 = document.getElementById('resumachv3');
    resumachv3.textContent = achv3;
    let resumimg = document.getElementById('resumimg');
    resumimg.textContent = picture;
});
// Print Button kay liyai   .
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
// / edit Button kay liyai   .
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
    window.history.back();
    // / shareable link Button kay liyai   .
    let share_btn = document.getElementById("share_btn");
    share_btn?.addEventListener("click", () => {
    });
    let anc = document.getElementById('anc');
    let userName;
    if (myName) {
        userName = myName.toLowerCase().replace(/\s+/g, "-");
    }
    else {
        userName = "user";
    }
    let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
    let uniqueUrl = `${baseUrl}?/${myName}`;
    share_btn?.addEventListener("click", () => {
        anc?.setAttribute("href", uniqueUrl);
    });
    // copy link button 
    let copy_btn = document.getElementById('copy_btn');
    copy_btn?.addEventListener("click", () => {
        navigator.clipboard.writeText(uniqueUrl).then(() => {
            alert("copy done");
        });
    });
});
